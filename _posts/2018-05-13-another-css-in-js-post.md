---
layout: post
title:  "What's wrong with CSS-in-JS? ... something? ... nothing? ... everything?"
tease: "What's wrong with CSS-in-JS? ... something? ... nothing? ... everything?"
share: "What's wrong with CSS-in-JS? ... something? ... nothing? ... everything?"
date: 2018-05-13
---

One great aspect of the web development community is that there's always someone posing a challenging thought. That initial prompt inspires many responses, which in turn inspires more responses. It's like our very own version of the <a href="https://en.wikipedia.org/wiki/Roxanne_Wars" target="_blank">Roxanne Wars</a>, albeit with fewer rhymes and no dope beats, but maybe more example CodePens or JSFiddles.

Often, this discourse serves as fodder to commiserate with colleagues. We roll our eyes. We point to random tweets or blog posts, claiming said author a fool. We react too quickly before considering the opposing point of view. However, I honestly think being challenged is an important part of pushing the community and the technology we use forward.

Having said that, let's talk about CSS-in-JS. 🔥

A couple weeks ago, the developer Remy Sharp pondered the need for CSS-in-JS:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I *keep* looking at CSS in JS (styled components et al), and the one thing they keep seeming to lack is: *why*. (and no, &quot;CSS is hard/stressful/etc&quot; isn&#39;t a why, because those all apply to JS too).</p>&mdash; @rem (@rem) <a href="https://twitter.com/rem/status/989069638553231360?ref_src=twsrc%5Etfw">April 25, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

At this point, if you're wondering 'What the hell is CSS-in-JS', I'd encourage you to jump back to the first paragraph and follow the link to the Roxanne Wars Wikipedia page. Otherwise, this post is not going to make a lot of sense, and you'll waste your time reading about a very obtuse subject you probably don't need to care about. Your life is way better not knowing or caring. Trust me. 😃

Are you still here? Awesome. Let's continue.

Remy's tweet inspired many responses.

In the "I'm not sure about this CSS-in-JS stuff" corner, Chris Ferdinandi wrote about it a few times offering good insight to why he's <a href="https://gomakethings.com/whats-wrong-with-css-in-js/" target="blank">dubious about the approach</a>. He also, outlined his thoughts in a quick <a href="https://soundcloud.com/vanillajspodcast/whats-wrong-with-css-in-js"> 15 minute podcast</a>. The designer/developer, Brad Frost agreed with Chris, <a href="http://bradfrost.com/blog/link/whats-wrong-with-css-in-js/" target="_blank">asking the same question</a>.

Remy's tweet as well as Chris and Brad's thoughts inspired many responses from the "Are you kidding, CSS-in-JSS is awesome" folk. Two that resonated with me the most came from <a href="http://www.brianmuenzenmeyer.com/" target="_blank">Brian Muenzenmeyer</a> and <a href="https://micahgodbolt.com/blog/what-s-right-with-css-in-js/" target="_blank">Micah Goldbolt</a>.

All these posts are worth reading and thinking through.

#### My concerns about CSS-in-JS

Overall, I have issues with CSS-in-JS.

In his <a href="https://micahgodbolt.com/blog/what-s-right-with-css-in-js/">What's right with CSS-in-JS</a> post, Micah Goldbolt has a couple observations that speak to my concerns:

> I agree that you'll sometimes find JavaScript developers writing markup and styles who know very little about proper semantics and accessibility. But I would argue that this is at most a warning to always keep front-end minded developers involved in your markup and styles. If moving styles to JS makes you think "great, now all we need are more JS developers on this project", you are sorely missing the point!

In my experience, this situation is real, and a problem.

In the age of the full stack developer, I've found core HTML and CSS skills are often punted on. I've worked with a lot of developers during my career, most of which are extremely talented, doing things that made my head turn. But I've also spent a lot of time removing `<div>` elements and replacing them with semantic HTML. Unfortunately, hooking up an interface is often more important than ensuring it's built from a strong foundation. Again, this is my experience. You might work for an organization where this isn't an issue.

While I'd wish these developers took more care with understanding these fundamental basics, I'm not necessarily criticizing them. It's virtually impossible for anyone in tech to master the full range of a given tech stack.

Overall, I'd place this deficit upon organizations and realize that an engineer connecting with a Mongo database, might not also be the best person to write the HTML and CSS. However, unless that organization gets hit with a costly ADA lawsuit, they probably won't ever come to this realization or take action. And if the organization IS hit with an ADA lawsuit, then they're untangling years of product development, potentially rebuilding the entire product at a cost that is x times more expensive than starting from a place of prioritizing releasing an accessible product.

Micah suggests to keep "front-end minded developers involved in your markup and styles". My concern is that we're too eager to consider the fundamentals less important as the front end continues to change.

All this might seem like a hyperbolic jump in logic, but if we're being honest and acknowledging that developers struggle with CSS, using technology to solve that deficiency might not be our best path forward.

Another point Goldbolt makes in his article is the challenges of using reusable mixins and functions:

> …  I agree that writing our styles in JavaScript makes them less accessible to other components wanting to reuse variables, mixins and functions. The variable problem can certainly be remedied by moving those important values into Tokens (or some JSON'esque file that JS and Sass can read). Mixins and Functions, on the other hand, are more difficult to produce cross platform and will either need to be duplicated, or accepted as a 'lost in translation' casualty.

For me, this is huge. Teaching a developer unfamiliar with CSS to use a system of mixins is better and more predictable than teaching a developer the specifics of flexbox or even styling a button element.

I'd rather provide that developer with the opportunity to do something like this.

<div class="code-block" data-code="SCSS">
{% highlight SCSS %}
.my-special-button {
   @import button(primary);
} {% endhighlight %}
</div>

A system of mixins preserves the notion of a single source of truth. Whoever writes the mixins is charged with the maintenance. The end-user developer is only concerned with choosing the correct variant. Losing reusable bits via mixins might be my largest concern with a CSS-in-JS approach.

Beyond the specifics of writing CSS in a Javascript file, is the attitude many developers seem to have about CSS, overall

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I don’t buy that for a second.<br><br>The reality is: most devs have spent a great deal of time learning to not write bad JS, and very few have spent any time learning to not write bad CSS</p>&mdash; keith•j•grant (@keithjgrant) <a href="https://twitter.com/keithjgrant/status/994578913430040576?ref_src=twsrc%5Etfw">May 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It's almost like there is an assumption that CSS shouldn't be hard. After all, it's just colors, sizes, space and other silly visual stuff like that. Fact is, CSS takes time and care. To get good at it, you need to work hard. I don't think many developers get that. I've written lots of CSS, and I make mistakes ... daily ... or hourly. While JS developers are labeling CSS as inferior, I'd encourage them to think about the daily struggle they have with JS. It's a tremendous language, but that shit ain't easy, either. I often get the impression that CSS-in-JS is viewed as a panacea, freeing developers of the scourge of CSS.

And then there's the fact that CSS isn't a programming language.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This is bordering on nihilism; sometimes some systems are just better than others. Working with CSS globals at scale forces you to adopt obtuse systems like BEM to keep everything straight. It should be celebrated that people are trying to create something better.</p>&mdash; Adam Rackis (@AdamRackis) <a href="https://twitter.com/AdamRackis/status/995042978241630209?ref_src=twsrc%5Etfw">May 11, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Proponents of CSS-in-JS, like to throw out the "at-scale" argument. When do we reach a point where we can say we're at scale. A developer at Facebook might have one idea of at scale, while a developer at Bob's Awesome Single Page App, LLC, might have another. It's subjective, rather than absolute. I architected and wrote the CSS library that powers the <a href="http://uniform.hudl.com" target="_blank">Uniform Design System</a>. I'd assume that's "at-scale," and we didn't utilize CSS-in-JS for our React components. 🤷‍♂️

Many CSS-in-JS approaches inject `<style>` tags into the `<head>` of the document. This practice makes me wonder where are are in terms of performance considerations. By making all our styles critical path css, we risk making none of it critical path. Are we less concerned about performance than we were just a couple years ago.


#### Final thoughts

I see the value in an approach that encapsulates style and keeps developers from wrestling with the cascade or the global nature of CSS. The web and the products we make are so much more complex than they were when we strived to keep a defined separation of our concerns: Javascript, HTML and CSS.

If the decision were left up to me, I'd keep CSS out of JS. I'd rely on a naming convention (probably Block Element Modifier), modular files and a system of mixins and functions. I'd help developers write less CSS while helping protect them from all the things they struggle with while writing CSS.

Whether an organization adopts an approach like CSS-in-JS or not, it should be a group decision. It should be a decision that satisfies the needs of the entire organization, not satisfying the desires of a few individual developers eager to experiment with a different technology.

I clearly have my reservations with this approach, but I love that paradigms are constantly challenged in our industry ... as overwhelming has that seems at times.