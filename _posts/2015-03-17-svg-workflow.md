---
layout: post
title:  "My workflow for creating SVG sprites"
tease: "My workflow for creating SVG sprites"
share: "Creating SVG sprites with grunt"
date: 2015-03-17
status: pinned
---


A couple weeks ago I wrote about a variety of methods I’ve used during the past couple years to provide [fallbacks for svg]({% post_url 2015-03-07-five-methods-of-providing-fallbacks-for-svg %}) when they're used either within an `<img>` tag or as a CSS background images.

However, when I rebuilt this site, I wanted to experiment with using in-line `SVG`. Here's a quick description of the current work flow I'm using to create SVG sprites.

After saving all my SVGs from illustrator, I put them in a folder called `svg`.

Next I run a grunt task, using the [grunt-svgstore](https://github.com/FWeinb/grunt-svgstore) plug-in. One side note about my grunt set-up. Rather than putting all my tasks in a Gruntfile, I've modularized my set-up so each task is its own file and those individual tasks are in a folder called `tasks`. The svgstore task configuration looks something like this.

<div class="code-block" data-code="Javascript">
  {% highlight JavaScript %}
  module.exports = function(grunt) {
    grunt.config('svgstore', {
      options: {
        prefix : 'shape-', // This will prefix each ID
        cleanup: false,
        svg: {
          style: "display: none;"
        }
      },
      default: {
        files: {
          "_includes/svg-defs.svg": ["static/svg/*.svg"]
        }
      },
    });
    grunt.loadNpmTasks('grunt-svgstore');
  };
  {% endhighlight %}
</div>

What svgstore does is combine all the svg files I saved from illustrator into a sprite file named `svg-defs.svg`. This is a jekyll site, so the grunt task saves the svg-defs file into the `_includes` folder. Then that file is included in my templates.

When I want to call a given SVG in HTML this is all I need to do.

<div class="code-block" data-code="HTML">
{% highlight HTML %}
<svg class="footer-icon">
  <use xlink:href="#shape-icon_twitter" />
</svg>
{% endhighlight %}
</div>

I'm really liking this workflow. The only thing I haven't solved is support for IE8. Because my site is generally viewed in modern browsers (thank for that, everyone), IE8 is not a concern. However, if I want to use this in a client project, I'll need to solve for that.

Chris Coyier has a great [video](https://css-tricks.com/video-screencasts/screencast-134-tour-site-progress-built-jekyll-grunt-sass-svg-system/) describing this workflow in the context of a Jekyll site, using Grunt.
