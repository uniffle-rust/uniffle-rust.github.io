(() => {
  const changelog = document.querySelector("#changelog-releases");

  if (!changelog) return;

  const headings = Array.from(changelog.children).filter(
    (element) => element.tagName === "H2",
  );

  if (headings.length === 0) return;

  const releases = headings.map((heading) => {
    const content = [];
    let sibling = heading.nextElementSibling;

    while (sibling && sibling.tagName !== "H2") {
      content.push(sibling);
      sibling = sibling.nextElementSibling;
    }

    return {
      heading,
      content,
      id: heading.id,
      title: heading.textContent.trim(),
    };
  });

  releases.forEach((release) => {
    const date = release.content.find(
      (element) => element.tagName === "P",
    );
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const title = document.createElement("span");
    const dateLabel = document.createElement("span");
    const body = document.createElement("div");

    details.className = "changelog-release";
    details.id = release.id;

    summary.className = "changelog-release__summary";
    title.className = "changelog-release__title";
    title.textContent = release.title;
    dateLabel.className = "changelog-release__date";
    dateLabel.innerHTML = date?.innerHTML ?? "";

    summary.append(title, dateLabel);
    body.className = "changelog-release__body";

    release.heading.replaceWith(details);
    date?.remove();
    release.content
      .filter((element) => element !== date)
      .forEach((element) => body.append(element));
    details.append(summary, body);
  });

  const hashId = decodeURIComponent(window.location.hash.slice(1));
  const hashTarget = hashId && document.getElementById(hashId);
  if (hashTarget instanceof HTMLDetailsElement) {
    hashTarget.open = true;
  }
})();
