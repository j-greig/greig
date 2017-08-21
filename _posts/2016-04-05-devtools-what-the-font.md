---
id: 2111
title: 'DevTools For Designers: What The Font?'
date: 2016-04-05T14:14:46+00:00
author: James Greig
layout: post
guid: http://greig.cc/?p=2111
permalink: /devtools-what-the-font/
categories:
  - DevTools for Designers
---
If you’re design savvy (or even just design curious), you might have seen a nice font being used on a website, but not known it's name. 

Good news.

With DevTools, it’s a three second job to find out.

(As usual, these instructions assume that you’re using [Google’s Chrome browser][1]).

[1]: https://www.google.com/chrome/browser/desktop/

Here’s how to identify that font with DevTools…

<h2 style="font-family: 'Comic Sans MS', 'Chalkboard', 'Marker Felt', sans-serif; font-size: 28px">
  Challenge: find out (exactly) what font this text that you’re reading right now is written in!
</h2>

* Right click (or Ctrl+click) on the text above
* Select ‘Inspect’ from the menu that pops up
* Next to the ‘Styles’ tab (somewhere on the right of your screen) click on ‘Computed’
* Then look for ‘font-family’ in the list of CSS properties
* In our case it should say `font-family: ’Comic Sans MS', 'Chalkboard', ‘Marker Felt', sans-serif`
* But I want you to keep scrolling down the list of CSS properties until the bottom, where it says ‘Rendered fonts’
* And then simply read off the value, which in our case is probably that most lovely of fonts, Comic Sans.

Just in case you got stuck, here's a quick runthrough of how the sequence above should look:

<img src="/media/devtools-for-designers-what-the-font.gif" alt="" width="842" height="539" class="alignnone size-full wp-image-2112" />

Easy once you know how, right?

## Now for the (optional) CSS lesson

Remember the list of fonts you were just looking at?

`font-family: 'Comic Sans MS', 'Chalkboard', 'Marker Felt', sans-serif`

What this does is give your browser a list of fonts to use.

If Comic Sans MS is available, your computer will use it. (It's quite likely, as Comic Sans is a font that comes with both Windows and OS X).

If not, the next font in the list is used instead, eg Chalkboard. And if not, the font after that will be used instead, eg Marker Felt.

What if you don’t have any of these fallback fonts?

Well, then your computer will use the default ‘sans-serif’ font for your system. Which means Arial a PC, or Helvetica on a Mac.

(Remember that all kinds of devices can browse the web, so someone could be using a games console, an ebook reader, or even their fridge to view your website. Don't ask why though...)

So… this is why we kept scrolling to the ‘Rendered fonts’ info… to be sure what’s happening on your particular setup.

# Bonus challenge: can you change the font size of this headline?

One of my favourite things about DevTools is that it lets you play about with the design of a website.

Here's how to change the size of any HTML text:

* Right click on any part of the headline above
* Click 'Inspect'
* In the 'Styles' tab, look for the line that reads `element.style {`
* Click it, and the cursor should jump down to the line below and start blinking
* Now type `font-size` and press Tab on your keyboard
* And now type a big number followed by `px` (which stands for pixels). So maybe something like `80px`...

Boom.

Here's how that looks:

<img src="/media/devtools-for-designers-what-the-font-size.gif" alt="" width="750" height="480" class="alignnone size-full wp-image-2113" />


