---
title: Blog
nav_order: 3
has_children: true
has_toc: false
permalink: /blog/
description: Engineering notes from the Riffle project.
---

# Blog

Design notes, performance investigations, and implementation details from the
Riffle project.

<div class="blog-list">
  <article class="blog-list__item">
    <span class="blog-list__date">July 28, 2025 · Performance</span>
    <h2><a href="{% link blog/read-ahead.md %}">Read ahead: cutting shuffle-read stalls with the Linux page cache</a></h2>
    <p>How Riffle recognizes upcoming reads, warms the page cache, and extends prefetching from sequential partitions to AQE read plans.</p>
    <a class="blog-list__link" href="{% link blog/read-ahead.md %}">Read article <span aria-hidden="true">→</span></a>
  </article>
</div>
