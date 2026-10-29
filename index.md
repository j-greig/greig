---
title: Latest articles
layout: home
description: Refreshingly honest notes on art, design, technology, writing and making things, by James Greig
---
<section class="mh3 mh5-m mh6-l mt3 mt4-l measure animated fadeIn">
  <h2 class="f6 ttu tracked normal mb3">Latest articles</h2>
  <ul class="list pl0 mt0">
    {% for post in site.posts limit:5 %}
    <li class="mb3 serif f3 lh-title"><a class="link black" href="{{ post.url }}">{{ post.title }}</a> <span class="sans-serif f6 o-60">{{ post.date | date: "%Y" }}</span></li>
    {% endfor %}
  </ul>
  <a class="f6 ttu tracked link black underline" href="/articles/">All articles</a>
</section>
<br>&nbsp;<br>

<style>
  .studio-new { margin-top: 2rem; margin-bottom: 3rem; display: inline-block; background: #c0c0c0; color: #000;
    border: 2px solid; border-color: #fff #808080 #808080 #fff; padding: 6px 10px 8px 6px;
    font-family: "Times New Roman", Times, serif; font-size: 1rem; line-height: 1.3; text-align: left; }
  .studio-new img { float: left; margin: 0 8px 0 0; image-rendering: pixelated; }
  .studio-new a, .studio-new a:hover { color: #0000ee; text-decoration: underline; font-weight: bold; }
  .studio-new a:visited { color: #551a8b; }
  .studio-new small { display: block; font-size: 0.85rem; }
  @media (min-width: 40em) { .studio-new { position: fixed; right: 16px; bottom: 16px; margin: 0 !important; z-index: 10; } }
</style>
<div class="studio-new mh3 mh5-m mh6-l">
  <picture>
    <source srcset="/media/new-studio-still.png" media="(prefers-reduced-motion: reduce)">
    <img src="/media/new-studio.gif" width="66" height="42" alt="New!">
  </picture>
  <a href="https://studio.greig.cc/">Studio Greig</a>
  <small>my art and the symbient Wib&amp;Wob</small>
</div>
