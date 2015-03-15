---
layout: post
title:  "Edit SCSS directly from your browser? Yes, you can do that!"
subhead: "With CSS source maps saving your dev tool tweaking back to your code base is as easy as saving a file"
tease: "Edit SCSS directly from your browser? Yes, you can!"
share: "CSS source maps will enable you to edit and save your SCSS right from your browser"
date: 2015-03-10
---

Has this ever happened to you? You're tweaking CSS with the Chrome dev tools. You're making refinements, everything is getting dialed in just so. But then you make a fatal mistake, you refresh the browser, or maybe even close the window. Either way, it's gone. It's all gone. All that beautiful work is gone, leaving you to start over, hoping you can remember every rule and value you previously tweaked.

Wouldn't it be great if you could edit CSS in your browser and have the changes appear in your code base? Here's a little secret. You can! I'm totally not even kidding.

With Source Maps you can edit in the browser, then save those edits back to your source SCSS files, saving the extra steps of transposing all that work.


## Setting up

Getting up and running with source maps is easy, though there are a couple steps which seem somewhat obtuse. Here's the steps I used to get them working for me in Chrome. Firefox and Safari also have support for source maps, though I'm not sure how set up for those browsers might differ.

**Step 1**  &nbsp;
Open your Chome dev tools and navigate to settings (It's the gear at the top right of your dev tools window). Make sure `Enable CSS Source Maps` is checked. I'm not sure if this required but go ahead and click the `Auto Reload generated CSS` checkbox as well.

![](/static/img/posts/2015_03/enable_css.gif)

**Step 2** &nbsp;
Next while still in the dev tools seeings navigate to workspaces. We need to tell the browser where our project is located. Select the root folder of your project. In the photo below, I’ve selected a folder called `test` which is located on my desktop. This is the root of my project.

![](/static/img/posts/2015_03/workspace.gif)

**Step 3** &nbsp;
If you click on the `Sources` tab at the top of your dev tools, you should see the folder you added in Step 2 in the left hand panel. If you don't see this left panel, click on the small expand arrow toward the top left of your dev tools window.

**Step 4** &nbsp;
Now you want to map the source file for your outputted CSS. For instance, my compiled CSS is called `screen.css`, so I'm to mapping that to the `screen.scss`. Control click on the `screen.scss` file and select `Map to Network Resource` from the contextual menu.

![](/static/img/posts/2015_03/map_to_resource.gif)

**Step 5** &nbsp;
In the workspaces pop up that appears after you select your map to network resources file, select the same file and hit return.

![](/static/img/posts/2015_03/after_resource.gif)

**Step 6** &nbsp;
Hit return, and you should get a notification to restart your Chrome dev tools. Click ok

![](/static/img/posts/2015_03/restart_tools.gif)


## Using
Now that we're set up we're ready to edit some CSS and see the magic happen.

**Step 7** &nbsp;
Start watching your SCSS in whatever why you normally do. Lately, I've been using grunt for tasks like this, but here the handy ole built in SCSS watch terminal command.

<div class="code-block" data-code="Terminal">
{% highlight Bash shell scripts %}
scss —watch static/scss/screen.scss:static/css/screen.css
{% endhighlight %}
</div>

**Step 8** &nbsp;
Inspect an element with your chrome dev tools. You should see the source `.scss` file for the corresponding element. If you click on that link, the scss file will open in your dev tools windows. Edit the rule you want to change, then save `Command S`. When you save you're actually saving to your actual SCSS file. As you save, keep an eye on your terminal window, and you should notice that saving from the browser is triggering you SCSS to recompile. **Additionally, if you `Command click` on a value, you can edit the source value, whether that's a variable, mixin or placeholder.**

![](/static/img/posts/2015_03/edit_original.gif)



## Wrap up

Source maps are really cool, and I'm glad I finally played around with them to see them in action. However, as much as I hate transposing dev tools tweaking into the code base, or losing work all together, I do like the separation between dev tools and code base. I'm not sure I'll adopt this for my workflow, but ask me again the next time I mistakenly refresh the browser after making lots of tweaks.
