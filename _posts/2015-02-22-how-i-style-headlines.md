---
layout: post
title:  "The casual charms of writing CSS"
tease: "How I made a headline turn red"
share: "How in the hell did this headline become red? With CSS, of course"
subhead: "This lesson will serve you well throughout the rest of your life"
date:   2015-02-22
---

One day I was coding. I was writing lots of solid, semantic html. Like Kerouac banging out On The Road on that never ending scroll, I was on a role. A ``<div>`` here a ``<p>`` over there and ``<span>s`` everywhere; I was in the zone. The inspired steamrolling hit a snag when I wrote the following line:

{% highlight html linenos %}
<h1>The Casual Charms of Writing CSS</h1>
{% endhighlight %}

That headline rendered on my page as a big black headline. Like really dark and black. I couldn't believe my eyes. How could I ever make this headline look better? Could it be done?

Well, after much trial and error, and even a little googling, I found answer. I simply needed to use something called CSS.

{% highlight css linenos %}
h1 {
  color: red;
}
{% endhighlight %}

That simple bit of code, can be applied to pretty much any element in an html document. Mind blowing, right? So now you're thinking 'what if I didn't want a red headline, but I wanted it to be in all caps, spaced out and have a color of medium gray?' With CSS, you can do that.

{% highlight css linenos %}
h1 {
  text-transform: uppercase;
  letter-spacing: 47px;
  color: #666666;
}
{% endhighlight %}

There's virtually nothing CSS can't do when it comes to visually styling elements on your webpages. I encourage you to utilize it on your next web design project. I think you'll find CSS will breath a new life into everything you build.
