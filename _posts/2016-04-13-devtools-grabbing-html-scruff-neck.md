---
title: 'DevTools For Designers: Grabbing HTML By The Scruff Of The Neck'
date: 2016-04-13T14:27:30+00:00
layout: post
permalink: /devtools-grabbing-html-scruff-neck/
categories:
  - DevTools for Designers
---
<style type="text/css">
	pre {
      diplay: inline;
    }
</style>
<p>Today we're going to get hands-on.</p>
<p>Ready?</p>
<p>It's time to grab HTML by the scruff of the neck and drag it around a bit.</p>
<p>One of the coolest things about DevTools is that it turns any web page into a code playground. It's easy to <a href="http://greig.cc/devtools-what-the-font">change a font</a>, make type bigger or smaller, or <a href="http://greig.cc/devtools-reveal-hidden-password/">reveal a hidden saved password</a> that you can't remember.</p>
<p>But all of these things are achieved using CSS — a styling language which tells your browser how to display HTML.</p>

<p>Today we're going to manipulate HTML directly.</p>

<h2>Have you met Dom?</h2>
<p>Let's get technical for a second. If you read the official DevTools documentation, you'll see the term "DOM" appearing everywhere. DOM stands for Document Object Model, a cross-platform language for representing and interacting with objects in HTML, XHTML, and XML documents.</p>
<p>Don't worry about all those acronyms though.</p>
<p>All you need to know for now about DOM (he's a nice chap by the way) is that he has a tree-like structure:</p><br>
<img src="/media/dom_tree.gif" alt="" width="700" height="365" class="alignnone size-full wp-image-2127" />
<br><br>
<p>So when you're writing HTML, you need to respect this structure. Always respect the DOM.</p>
<p>If you open a tag, like the body tag: <pre>&lt;body&gt;</pre>you need to close it again, eg <pre>&lt;/body&gt;</pre>
<p>(Notice the forwards slash in the closing tag)</p>
<p>You might have noticed that the diagram has both a HEAD and a BODY. For once this is self-explantory, yay!.</p>
<p>The head of an HTML page is where everything gets set up — things like the title of the page, and a description of it for search engines like Google.</p>
<p>The body of an HTML page is where the actual content goes, with paragraph text in &lt;p&gt; tags and images in&lt;img&gt; tags, for example.</p>
<p>That's enough tecnical stuff for this lesson.</p>
<p>Let's do the hands-on bit now!</p>
<h2>How to change the order of elements on a web page</h2>
<p>As usual, this lesson assumes that you're using the Chrome browser on a laptop or desktop.</p>
<ul>
<li>Right click on the thing you want to reorder</li>
<li>In the menu that pops up, click 'Inspect'</li>
<li>Now in the 'Source' panel — which shows the raw HTML for our mate DOM — click and drag the thing to where you want it.</li>
<li>(Or to delete the thing you have selected, just press backspace on your keyboard!)</li>
</ul>
<h2>Now it's your turn: can you fix this list?</h2>
<ul>
  <li>Monday</li>
  <li>Tuesday</li>
  <li>Wednesday</li>
  <li>Thursday</li>
  <li>Sunday</li>
  <li>Friday</li>
  <li>Saturday</li>
  <li>Dog</li>
</ul>

## In case you get stuck...
Here's how to put the list above into the right order, and remove the thing that shouldn't be in it:

<img src="/media/devtools-for-designers-grabbing-html.gif" alt="" width="750" height="480" class="alignnone size-full wp-image-2125" />

## Bonus DevTools tip
When you have some HTML selected in the 'Source' panel, you can copy & paste the code just like you would normal text: Cmd+C and Cmd+P on a Mac, or Ctrl+C and Ctrl+P on a PC.