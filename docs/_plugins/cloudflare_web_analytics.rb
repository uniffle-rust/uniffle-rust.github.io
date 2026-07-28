# frozen_string_literal: true

Jekyll::Hooks.register :site, :after_init do |site|
  configured_token = site.config.fetch("cloudflare_web_analytics_token", "").to_s.strip
  environment_token = ENV.fetch("CLOUDFLARE_WEB_ANALYTICS_TOKEN", "").strip

  if configured_token.empty? && !environment_token.empty?
    site.config["cloudflare_web_analytics_token"] = environment_token
  end
end
