#!/usr/bin/env ruby

require "date"
require "json"
require "net/http"
require "set"
require "uri"

REPOSITORY = ENV.fetch("RIFFLE_REPOSITORY", "zuston/riffle")
CHANGELOG_PATH = File.expand_path(
  ENV.fetch("CHANGELOG_PATH", "../docs/changelog.md"),
  __dir__
)
API_ROOT = ENV.fetch("GITHUB_API_URL", "https://api.github.com")

def github_releases
  releases = []
  page = 1

  loop do
    uri = URI("#{API_ROOT}/repos/#{REPOSITORY}/releases?per_page=100&page=#{page}")
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/vnd.github+json"
    request["X-GitHub-Api-Version"] = "2022-11-28"
    request["User-Agent"] = "riffle-docs-release-sync"

    token = ENV["GITHUB_TOKEN"]
    request["Authorization"] = "Bearer #{token}" if token && !token.empty?

    response = Net::HTTP.start(
      uri.hostname,
      uri.port,
      use_ssl: uri.scheme == "https"
    ) { |http| http.request(request) }

    unless response.is_a?(Net::HTTPSuccess)
      raise "GitHub API request failed: #{response.code} #{response.message}"
    end

    batch = JSON.parse(response.body)
    releases.concat(batch)
    break if batch.length < 100

    page += 1
  end

  releases.reject { |release| release["draft"] }
end

def markdown_date(timestamp)
  date = Date.parse(timestamp)
  "#{date.strftime('%B')} #{date.day}, #{date.year}"
end

def normalize_release_notes(body)
  notes = body.to_s.gsub("\r\n", "\n").strip
  return "- No release notes provided." if notes.empty?

  notes.lines.map do |line|
    line.sub(/\A(\#{1,6})(?=\s)/) do |heading|
      "#" * [heading.length + 2, 6].min
    end
  end.join.rstrip
end

def release_section(release)
  tag = release.fetch("tag_name")
  url = release.fetch("html_url")
  published_at = release["published_at"] || release.fetch("created_at")
  notes = normalize_release_notes(release["body"])

  <<~MARKDOWN
    ## [#{tag}](#{url})

    _#{markdown_date(published_at)}_

    #{notes}
  MARKDOWN
end

def sync_releases(releases = github_releases)
  changelog = File.read(CHANGELOG_PATH)
  existing_tags = changelog.scan(/^## \[([^\]]+)\]/).flatten.to_set

  new_releases = releases
    .reject { |release| existing_tags.include?(release["tag_name"]) }
    .sort_by { |release| release["published_at"] || release["created_at"] }
    .reverse

  if new_releases.empty?
    puts "Changelog is current; no new Riffle releases found."
    return
  end

  heading = "# Changelog\n"
  heading_index = changelog.index(heading)
  raise "Could not find '# Changelog' in #{CHANGELOG_PATH}" unless heading_index

  insert_at = heading_index + heading.length
  sections = new_releases.map { |release| release_section(release) }.join("\n")
  updated = changelog.dup.insert(insert_at, "\n#{sections}\n")

  File.write(CHANGELOG_PATH, updated)
  puts "Added #{new_releases.length} release(s): #{new_releases.map { |release| release['tag_name'] }.join(', ')}"
end

sync_releases if $PROGRAM_NAME == __FILE__
