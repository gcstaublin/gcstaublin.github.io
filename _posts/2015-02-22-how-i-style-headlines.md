---
layout: post
title:  "The casual charms of writing CSS"
tease: "How I made a headline turn red"
share: "How in the hell did this headline become red? With CSS, of course"
subhead: "This lesson will serve you well throughout the rest of your life"
date:   2015-02-22
---

One day I was coding. I was writing lots of solid, semantic html. Like Kerouac banging out On The Road on a never ending scroll in the course of a few days, I was on a role. A ``<div>`` here a ``<p>`` over there and ``<span>`` everywhere; I was in the zone. The inspired steamrolling then hit a snag. I wrote the folling line:

{% highlight html linenos %}
<h1>The Casual Charms of Writing CSS</h1>
{% endhighlight %}

That headline rendered on my page as a big black headline. Like really dark and black. I couldn't believe my eyes. How could I ever make this headline look better? Could it be done.

Well, after much trial and error, and even a little googling, I found answer.

{% highlight css linenos %}
h1 {
  color: red;
}
{% endhighlight %}

That simple bit of code, which I've learned is called CSS, can be applied to pretty much any element in an html document. Mind blowing, right?
