---
title: 'DevTools for Designers: Reveal a hidden password'
date: 2016-04-13T14:21:48+00:00
layout: post
permalink: /devtools-reveal-hidden-password/
categories:
  - DevTools for Designers
---
Sometimes your browser has saved the password you’ve entered on a login form, but you can’t actually remember what it is.

You're left staring at the ••••••••• in the password field and wondering if you'll have to reset it again.

What if I told you there was a way to find out the password without having to reset it?

DevTools to the rescue!

(As usually, this lesson assumes that you’re browsing the internet using Chrome on a laptop or desktop computer).

Read these instructions, and then try them out on the login form below.

<h2>How to reveal a saved password using DevTools</h2>

<ul>
<li>Right click (or Control + click) on the password field (underneath 'Ben')</li>
<li>Click on 'Inspect' in the menu that pops up</li>
<li>You should see a line of HTML selected in the 'Source' tab like this:<br />
<code>&lt;input id="cm-password type="password"&gt;</code></li>
<li>Double click on "password" after the equals sign in <code>type="password"</code> and change it to something else. (Usually I just add an extra letter like an "x", but you could also change it to "text").</li>
<li>The password field will now change from ••••••••• to reveal your password. Job done!</li>
</ul>

<div id="cm-header">
  <img src="/media/catmail-logo.png"></div>

<div id="cm-login">
  <form>
  <img id="cm-avatar" src="/media/benatar.png" width="100" height="100">
  <input type="text" value="ben">
  <input id="cm-password" type="password">
  <input id="cm-submit" type="button" value="Sign in">
 </form>  
</div>

<style format="css">
  #cm-avatar { margin: 0 auto; margin-bottom: 20px}
  #cm-submit { border: 1px solid #3079ed;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.1);
  background-color: #4d90fe;
  background-image: -webkit-linear-gradient(top,#4d90fe,#4787ed);
  background-image: -moz-linear-gradient(top,#4d90fe,#4787ed);
  background-image: -ms-linear-gradient(top,#4d90fe,#4787ed);
  background-image: -o-linear-gradient(top,#4d90fe,#4787ed);
  background-image: linear-gradient(top,#4d90fe,#4787ed);}
#cm-header {
text-align : center;
}
#cm-header img {
width : 30%;
margin : 0 auto;
text-align : center;
padding : 20px 0;
}
#cm-login {
margin : 0 auto;
width : 50%;
text-align: center;
border : #CCC solid 1px;
padding : 40px;
background : #F7F7F3;
    -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
#cm-login p {
font-family : Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, 'Helvetica Inserat', 'Bitstream Vera Sans Bold', 'Arial Black', 'sans serif';
font-style : italic;
text-align : center;
}
#cm-login input {
  width: 100%;
font-size : 16px;
display : block;
margin-bottom : 10px;
padding : 5px;
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
box-sizing:border-box;
}
</style>

<script type="text/javascript">
document.getElementById("cm-password").value = "miaw$ers123";
</script>

<small>Disclaimer: please only use this on your own passwords. Using it to log into your pet's email would be morally questionable.</small>

<h2>So what's going on here?</h2>

The <code>&lt;input&gt;</code> tag is used in HTML to specify places where the user can add information. This input could take the form of normal text, or buttons, checkboxes, dates, colours etc.

When your browser sees a form element with the <code>type</code> attribute set to "password", it obscures the text to prevent prying eyes from seeing your password.

The default value for the <code>type</code> attribute is "text", which means that as soon as you change the type from "password" to something else, your password is revealed.

<h2>Need help? Here's a quick runthrough</h2>

<img src="/media/devtools-for-designers-reveal-password.gif" alt="" width="750" height="609" class="alignnone size-full wp-image-2118" />