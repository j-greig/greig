---
title: Refreshingly honest notes on art, design, technology and writing
layout: home
description: Refreshingly honest notes on art, design, technology, writing and making things, by James Greig
---
<h1 class="f2 f1-l mh3 mh5-m mh6-l mb2 normal measure-narrow animated slideInDown">Refreshingly honest notes <br>on <span class="typed">art<div class="dib dn-l">, design, technology &amp; writing</div></span></h1>

<section class="mh3 mh5-m mh6-l mt5 measure animated fadeIn">
  <h2 class="f6 ttu tracked normal mb3">Latest articles</h2>
  <ul class="list pl0 mt0">
    {% for post in site.posts limit:5 %}
    <li class="mb3 serif f4 lh-title"><a class="link black dim" href="{{ post.url }}">{{ post.title }}</a> <span class="sans-serif f6 o-60">{{ post.date | date: "%Y" }}</span></li>
    {% endfor %}
  </ul>
  <a class="f6 ttu tracked link black underline" href="/articles/">All articles</a>
</section>
<br>&nbsp;<br>
