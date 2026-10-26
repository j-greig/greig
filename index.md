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
