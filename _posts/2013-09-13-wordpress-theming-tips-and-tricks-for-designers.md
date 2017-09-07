---
title: 'WordPress theming: tips and tricks for designers'
date: 2013-09-13T23:10:51+00:00
layout: post
permalink: /wordpress-theming-tips-and-tricks-for-designers/
categories:
  - graphic-design
---
<img src="/media/wordpress.png" alt="" width="1000" height="645" class="alignnone size-full wp-image-1990" />

At some point in 2005, just as my interest in Flash was starting to wane, I caught scent of a fresh-faced blogging platform called&nbsp;<a href="http://wordpress.org/">Wordpress</a>. &nbsp;

Not knowing any PHP at the time, the whole thing seemed pretty alien to me.&nbsp;

But it turned out that learning Wordpress&nbsp;was a great way to move beyond straight-up HTML and CSS and into the world of sever-side scripting.

I spent some late but entertaining nights learning how to make Wordpress do approximately what I wanted it to, and my blog went online early in 2006.

<a href="http://web.archive.org/web/20060214105603/http://www.3stripe.net/">My first two posts</a>?

Well, one was about procrastination: essentially it was that most terrible of blog posts... an apology for not writing anything other than the apology itself.

And the other was a listicle: a top 10 list of top 10 list articles. Ha!

(Sidenote: everyone's first few blog posts are a bit rubbish. Don't worry about it... just keeping writing... you'll get better much faster than you think you will.)

If you're a designer who wants to dip your toes into the coding water, I'd urge you to give Wordpress a shot. For me the learning curve was just steep enough to pique my interest without ever feeling intimidating.&nbsp;<span style="line-height: 1.6em;">In short: you'll be up and running with Wordpress quicker than you think.</span></p>

<h2>Reasons to choose Wordpress</h2>

<ol><li>The <a href="http://wordpress.org/support/">community</a> is huge. An entire whole ecosystem of companies and services has evolved around Wordpress.&nbsp;</li><li>There are thousands of free <a href="http://wordpress.org/plugins/">plugins</a> which cover almost any requirement you can think of beyond the standard Wordpress functionality.</li><li><span style="line-height: 1.6em;">Wordpress is much more than a blogging system these days. In fact I'd describe it as a fully fledged CMS that also happens to be great for managing a standard blog.</span></li><li>Although its own documentation, <a href="http://codex.wordpress.org/Main_Page">the Wordpress Codex</a>, can be a bit patchy, there are so many people willing to share their knowledge about Wordpress elsewhere (eg on their own blogs) that it doesn't matter. &nbsp;</li></ol>

<h2>My tips and tricks for designers getting started with Wordpress theming</h2>

<ol><li>You don't need to buy any special hosting to start playing with Wordpress. Instead, run it locally (eg on your own computer) using either <a href="http://www.mamp.info/en/index.html">MAMP</a> for Mac or <a href="http://www.apachefriends.org/en/xampp.html">XAMPP</a>/<a href="http://www.wampserver.com/en/">WAMP</a> for PCs. More info: <a href="http://webdesignerwall.com/tutorials/installing-wordpress-locally">installing Wordpress locally</a></li><li>You're going to need a decent (and by decent I mean distraction free) code editor. I use <a href="http://macromates.com/">TextMate</a>&nbsp;with the Blackboard theme, or you could try other code editors like <a href="http://panic.com/coda/">Coda</a>&nbsp;or <a href="http://www.barebones.com/products/bbedit/">BBEdit</a>. At a push Dreamweaver will do the job too, although for me it is verging into bloatware territory: it tries to do more than it should or needs to.</li><li>Start by messing around with a readymade Wordpress theme.&nbsp; Drag the theme folder into your editor and make changes to the php files, starting with index.php which is the basic template file. The alternative is to try and get your head around <a href="http://codex.wordpress.org/File:Template_Hierarchy.png">the Wordpress template hierarchy</a>, which is something I would put off for at least a few days (click that link and you'll see why). When I say messing around, I really mean it. Set yourself small tasks (<a href="https://www.google.co.uk/search?q=wordpress+modify+sidebar&amp;oq=wordpress+modify+si&amp;aqs=chrome.1.69i57j0l3j69i64.3716j0&amp;sourceid=chrome&amp;ie=UTF-8">like adding something to the sidebar</a>) and then use Google to find tutorials or explanations about what you need to do.</li><li>Eventually you will get bored of this. Congratulations! Now it is time to build your own theme. But instead of cloning an existing screen, try starting from scratch. That way you will learn how to construct from the foundations upwards, instead of inheriting someone else's existing structure and scaffolding. Above all else, remember that <a href="http://mattread.com/wordpress-is-not-php">Wordpress is not PHP</a>.</li><li><a href="http://codex.wordpress.org/The_Loop">The Wordpress loop</a> is the thing you'll need to get your head round first, because it's the code that Wordpress uses to display posts from your blog. Essentially you use it to tell Wordpress which posts to go and find in its database, and it then spits them out onto the page for you. But things can get complicated if you are displaying more than a single post on the same page. For more detailed information on this see&nbsp;<a href="http://www.catswhocode.com/blog/multiple-wordpress-loops">Wordpress multiple loops explained</a>. &nbsp;</li><li>Another place where magic (and frustration) happens is in the functions.php file, which is where you can modify the default behavours of Wordpress. If you want to create <a href="http://codex.wordpress.org/Post_Types#Custom_Post_Types">custom post types</a>, <a href="http://codex.wordpress.org/Customizing_the_Read_More">change the "Read more" link</a> under posts or <a href="http://codex.wordpress.org/Function_Reference/add_image_size">add new image sizes to your theme</a>, functions.php is the place you need to go.</li><li>It's often preferable to add a snippet of code to functions.php than to install a plugin, because it gives you greater control over what's happening. Sure, it you get stuck and have found a plugin to do what you need to do, go for it, but remember if you install 20 plugins like that, things will get much harder to manage. &nbsp;</li><li>That said, sometimes it's better to let an expert handle things for you. For instance, if you ever get frustrated by the limitations of the Wordpress post editing screen (which only gives you access to a post title, body and excerpt by default), you can use a plugin like <a href="http://www.advancedcustomfields.com/">Advanced Custom Fields</a>&nbsp;to add extra fields (or even images) for you.</li><li>If you get stuck: (a) Google the problem. Chances are that someone has had it before and already documented the solution. (b) Remember to breathe! Take a break, go for a walk or just leave it until tomorrow (c) Post your problem to the Wordpress forum. Sometimes I find that just the process of writing down my problem allows me to evaluate it differently and find a solution.</li></ol>

<h2>Where to host your Wordpress site</h2>

I've only ever used two Wordpress hosts and I'd recommend both, but for very different reasons.

<strong>Budget hosting: <a href="http://www.dreamhost.com/r.cgi?91436">Dreamhost</a><br></strong>You get a LOT for your money with Dreamhost. In fact you get pretty much unlimited everything, except speed. But if you're ok with that, they make a great option for beginners because of the low price. Use the code 'GREIG' when you sign up to get $60 off. Or use Google to look for an even better voucher code ;)

<strong>Managed hosting: <a href="http://www.shareasale.com/r.cfm?B=394686&amp;U=671335&amp;M=41388&amp;urllink=">WP-Engine</a><br></strong>I host <a href="http://www.cyclelove.cc/">CycleLove</a> with WP-Engine and have had nothing but stellar service and rock solid hosting from them. Because it is a managed service you can relax in the knowledge that malicious attacks by hackers and Wordpress updates will be handled on your behalf. Which leaves you with more time to write your blog.<br><br>
