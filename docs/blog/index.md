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
    <span class="blog-list__date">July 28, 2026 · Performance</span>
    <h2><a href="{% link blog/io-uring.md %}">io_uring: more disk throughput with less CPU</a></h2>
    <p>How Riffle moved local shuffle I/O onto submission and completion queues, added zero-copy reads, and validated the result on a 2.2 TB TeraSort run.</p>
    <a class="blog-list__link" href="{% link blog/io-uring.md %}">Read article <span aria-hidden="true">→</span></a>
  </article>
  <article class="blog-list__item">
    <span class="blog-list__date">July 28, 2025 · Performance</span>
    <h2><a href="{% link blog/read-ahead.md %}">Read ahead: cutting shuffle-read stalls with the Linux page cache</a></h2>
    <p>How Riffle recognizes upcoming reads, warms the page cache, and extends prefetching from sequential partitions to AQE read plans.</p>
    <a class="blog-list__link" href="{% link blog/read-ahead.md %}">Read article <span aria-hidden="true">→</span></a>
  </article>
</div>
