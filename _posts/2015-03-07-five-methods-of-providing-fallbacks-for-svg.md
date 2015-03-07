---
layout: post
title:  "Five methods of provding fallbacks for SVGs"
tease: "Got svgs? Here's how to serve fallbacks to older browsers"
share: "Svg is wonderful, but if we support less capable browsers like IE8, we need fallbacks. Here's five possible methods."
date:   2015-03-07
---


In case you haven't heard, which I'm assuming you have, SVG is pretty sweet. It's scalable, looks crisp on high resolution screens and file sizes are tiny in comparison to their raster counterparts. Great things often have a catch, however, and for SVG, that gotcha is oldie-time IE, as well as some older Android browsers.

Depending on what it is your building, you might be in a position to ignore older browsers, forging ahead with impunity. Personal sites and other side projects are a perfect example of this. In fact, the site you're right right this very moment forsakes browsers that lack svg support. SVGs most likely don't appear for you IE8 visitors. I say most likely, because I don't honestly know. I never checked.

Obviously, this type of laissez-faire browser support is untenable for client projects. I've found most clients tend to expect that their company logo appears in all browsers, even if that browser is receiving legacy or baseline support.

To that point, here are a few methods I've used during the past few years to serve svg logos to modern browsers while providing graceful fallbacks for the less capable.

## 1. Swapping background images with Modernizr classes

As a matter of preference I typically don't use background images for site logos. I don't have a great philosophical or practical stance to explain that preference. There's the potential few extra lines of CSS, defining widths and heights, a background image logo requires. Other than that, I've generally prefered serving my svgs with an `<img>` tag.

Having said that, here's a couple options, if you're using background images.

The HTML markup for our background image example is simple and discrete. We have an `<h1>` wrapping an anchor link with a class of `logo`. This is the class we'll use in our CSS (or SCSS) as the target for our background image.

<div class="code-block" data-code="HTML">
{% highlight HTML %}
<h1 class="logo-mod">
  <a class="logo" href="/">Logo</a>
</h1>  <!-- /logo -->
{% endhighlight %}
</div>

In our SCSS, we give the `.logo` class a width and a height, set it to `display: block` and serve an `.svg` by default. Then, assuming you're using Modernizr in your project, we target the `.no-svg` class Modernizr would add to the `<body>` of our document as the page loads and Modernizr tests for feature. Because the `.no-svg & ` declaration block is nested inside our `.logo` block, that line is saying when the class of 'no-svg' exists, the 'logo' class should load the `.png` file, rather than the `.svg`. You might be thinking, 'I know how CSS specificity works, dummy,' but in the case you're new to SCSS or to using Modernizr, that's what is happening here.

<div class="code-block" data-code="SCSS">
{% highlight SCSS %}
.logo {
  width: 120px;
  height: 60px;
  display: block;
  text-indent: -9999px;
  background-image: url('my-logo.svg');

  .no-svg & {
    background-image: url('my-logo.png');
  }
}
{% endhighlight %}
</div>

**Takeaway:** I typically don't use this technique for site logos. I use a similar technique for UI Icons (menu buttons, social icons, etc), which I'll explain in a future article. But this technique works and is reliable. It does, however, have the dependency of Modernizr. Depending on the performance requirements of your project, loading Modernizr might be out of scope. Let's take a look at a similar technique that doesn't have the Modernizr dependency.

## 2. A Modernizr-free method of swapping out background images

Before I describe this technique, let me reveal that I've never actually used this technique in a project. I've tested it out but not utilized it in the wild. I would suggest experimenting before throwing it into your next project.

The markup for this technique is exactly the same as the example above. The CSS is where the differences occur. The parlor trick is that multiple background support and svg support is roughly the same. Because it doesn't support multiple backgrounds, IE8 will ignore the background-image, falling back to the first line. Thus, serving a png, rather than an svg.

<div class="code-block" data-code="SCSS">
{% highlight SCSS %}
.logo {
    background: url('logo.png');
    background: url('logo.svg'), none;
}
{% endhighlight %}
</div>

## 3. Swapping inline images with modernizr and javascript

During the past few years, this is the technique I've most often used for clients and personal projects.

The HTML for this technique is very similar to the foundational code from our previous examples, with the addition of an `<img>` tag, which is how our logo is served, versus being served with CSS as we did, previously.

<div class="code-block" data-code="HTML">
{% highlight HTML %}
<h1 class="logo-mod">
  <a class="logo" href="/">
    <img class="logo-img" src="logo.svg" alt="" />
  </a>
</h1>  <!-- /logo -->
{% endhighlight %}
</div>

The Javascript is the magic happens with this technique. What's happening here, right? On the first line, the Javascript is testing if Modernizr has determined this browser does not support svg. If our browser doesn't support svg, Jquery finds each .svg file, replacing the src with a .png file.

<div class="code-block" data-code="Javascript">
{% highlight JavaScript %}
if (!Modernizr.svg) {
  $('img[src$=".svg"]').each(function() {
    // E.g replaces 'logo.svg' with 'logo.png'.
    $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
  });
}
{% endhighlight %}
</div>

Our CSS is slightly different, as well. Obviously we no longer need to call a background image, as we previously did. We also don't need to specify a height for our `.logo`. Using a `max-width: 100%` for the `.logo-img`, our image with resize to the width of it's container (the `.logo`) or it's true size, which ever happens first.

<div class="code-block" data-code="SCSS">
{% highlight SCSS %}
.logo {
  width: 120px;
  display: block;
}

.logo-img {
  max-width: 100%;
}
{% endhighlight %}
</div>

**Takeway:** I've used this technique most often during the past few years. It's been successful. IE8 users will see a flash of no logo (FONL). I just made that up. And, with all things Javascript, there's the potential of failure. If Modernizr doesn't load, or our Javascript test fails to load or run, there's a chance of no .png displaying. Because most client projects I've worked on the past couple years have dwindling support for less capable browsers wuch as IE8, this technique has worked well for me. And to be honest, the whole reason I'm writing this article is to give me a known spot to copy the javascript, rather than rewriting it for each project or hunting through other repositories to find it.

**Bonus advice:** Because this technique is really for IE8, we can conditionally serve our Javascript to oldie time IE browsers. If our browser is less than IE 9, the external ie.js file will download. Other browsers will ignore the test and not worry with our js.

<div class="code-block" data-code="HTML">
{% highlight HTML %}
<!--[if lt IE 9]>
  <script src="ie.js" type="text/javascript"></script>
<![endif]-->
{% endhighlight %}
</div>

## 4. Swapping inline images without css or javascript

This method is short and sweet. Doesn't require javascript, modernizr or any css. It's all in the markup. One potential problem with this method is the dependency of having access to our markup. Depending on the situation, you might not have that access. Plan accordingly, I guess.

<div class="code-block" data-code="HTML">
{% highlight HTML %}
<img src="logo.svg" onerror="this.src='logo.png'; this.onerror=null;">
{% endhighlight %}
</div>

## 5. Two inline images, hiding and showing with Modernizr classes

I recently used this technique on a project, and it definitely works. It's easy. However, I'm not sure I would recommend it. Why? Because this technique not only has the dependency of Modernizr, it also downloads both files, the .svg and the .png. You might be asking, 'what's the big deal?' The additional .png download is small. On it's own, it's not a bandwidth killer, like, say, the 440K of fonts you've included in your project. However, if we're designing and developing with performance in mind, this technique is a less than ideal approach.

The markup for this example adds a second `<img>` tag to our markup.

<div class="code-block" data-code="HTML">
{% highlight HTML %}
<h1 class="logo-mod">
  <a class="logo" href="/">
    <img class="nav-logo-img" src="logo.svg" alt="">
    <img class="nav-logo-img logo-fallback" src="logo.png" alt="">
  </a>
</h1>  <!-- /logo -->
{% endhighlight %}
</div>

Then in our SCSS we use both Modernizr `.no-svg` and the `.logo-fallback` class to determine what is or is not shown.

<div class="code-block" data-code="SCSS">
{% highlight SCSS linenos %}
// By default, the png logo-fallback is set to display: none
.logo-img {
  &.logo-fallback {
    display: none;
  }

  // If Modernizr determines that our browser does not support
  // svg, we hide our logo-img, but display the img with the class
  // of logo-img.logo-fallback
  .no-svg & {
    display: none;
    &.logo-fallback {
      display: block;
    }
  }
}
{% endhighlight %}
</div>

**Takeway:** Like I said, this technique works well and is quite easy. However, Let's assume our svg logo weighs in at 4.6kb, and our png fallback weighs in at 15kb. These hypothetical file sizes are actual sizes from a project I worked on last year. For capable browsers, we're out of the gate, downloading an extra 15kb we don't need. Now, let's also assume we have a slightly different logo that we're using in the footer of our site. Assuming similar files sizes, we would be downloading an extra 30kb. That could be the sum total of downloading something like a minimized version of Jquery. Again, if we're keeping an eye on the performance in our projects, does this technique have too much overhead? That's for you to decide, I guess.

There you have it; five methods of providing fallbacks for the svgs in our projects. As with all things on the web, there are many ways to accomplish the same task. This is just the tip of the image switching iceberg. Originally, I thought this would be a short article highlighting the javascript I often use to provide graceful fallbacks for svg. Obviously, my writing suffered from a slight bit of scope creep.

If you have thoughts, ideas or other methods, I'd love to hear your thoughts.
