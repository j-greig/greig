---
title: 'DevTools For Designers: Download Any Image From A Website'
date: 2016-03-28T13:52:32+00:00
layout: post
permalink: /devtools-download-image/
categories:
  - DevTools for Designers
---
We've all been there...

You're browsing a website, maybe on the hunt for a reference image for a moodboard, and want to drag an image off onto your desktop.

But you can't.

It's like the image is superglued into the page.

And a screenshot won't cut the mustard because the image is tiny, or there's text on top.

Who you gonna call for help?

Yup. 

DevTools.

*(Before we go any further, these instructions are written for [Google's Chrome browser][1], and assume you're using a laptop or desktop computer right now).*

[1]: https://www.google.com/chrome/browser/desktop/

**Challenge: download the cat photo below to your desktop**

1. Right click (or Ctrl+click) on the image
2. Select 'Inspect' in the menu that pops up
3. The DevTools window should now be open, with this line of code selected in the 'Elements' panel:  ``<div class="bgimage"></div>``
4. In the 'Styles' panel on the right, look for this line of CSS:
     ``background-image: url('http://greig.cc/wp-content/uploads...');``
5. Now right click (or Ctrl+click) on the blue link (starting "``http://greig.cc/wp-content/uploads...``") and select 'Open in new tab'.
6. And boom! The cat photo will open in a new tab in your browser. Now you can drag it off to your desktop, or right click and 'Save as' to the folder of your choice.

<style type="text/css">
.bgimage {
  width: 450px;
  height: 271px;
  background-image: url('/media/catphoto.jpg');
  background-size: cover;
}
</style>
<div class="bgimage"></div>

If you need a bit more help, I made a short video to guide you through the process above.

Here it is...

https://youtu.be/yijZTeSVO50

## Now for the technical stuff (if you're interested that is...)

So why couldn't you just drag the image straight onto your desktop?

Well, there are two main ways to add images to HTML pages.

The usual approach is to use an image "tag", which looks like this:

`<img src="filename.jpg" alt="Caption goes here">`

But there's a second way to add images using CSS, using the background-image property:

`background-image: url(/media/catphoto.jpg`

This is how the cat photo above was added to the page, and why it's harder than usual to get at than an image placed into the HTML with the `<img>` tag.