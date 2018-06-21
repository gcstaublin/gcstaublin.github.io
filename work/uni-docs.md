---
layout: case-study
title: Grant Staublin | UniDocs
permalink: /work/uniform-ui-documentation/
<!-- pageclass: page--has-no-bottom-margin -->
---


<style>


.angle-bg { background-color: #ff6500; }

.angle {
  position: relative;
  z-index: -1;
}

.angle--bottom {
  z-index: 1;
  opacity: 0.5;
  overflow: hidden;
}

.angle__bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  fill: #FF1F00;
}

.angle__bottom--right {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 73%;
  fill: #FF1F00;
}

.angle__bottom--right--large {
  position: fixed;
  bottom: 0;
  right: 0;
  fill: #FF1F00;
}

.angle__top--right {
  position: fixed;
  top: 0;
  right: 0;
  fill: #FFAE3B;
}

.angle__top--left {
  position: fixed;
  top: 0;
  left: 0;
  fill: #FFAE3B;
  z-index: 1;
}
</style>



<!-- Collection Items -->
<!-- ==================================== -->
{% for item in site.collection-case-study-uniDocs %}
{% if item.component == 'hero' %}
  {% include case-study/hero.html %}
{% elsif item.component == 'banner' %}
  {% include case-study/banner.html %}
{% elsif item.component == 'device' %}
  {% include case-study/device.html %}
{% else %}
  {% include case-study/items.html %}
{% endif %}
{% endfor %}





<!-- Hero -->
<!-- ============================= -->
<!-- <section class="case-study__hero hero--bleed--top">
  <div class="hero__content--case-study case-study__module--704 element--will-appear">
    <h2 class="case-study__headline--hero">Uniform-UI-Docs</h2>
    <div class="case-study__text--hero">
      Hello
    </div>
  </div>
</section> -->



<!-- Broadsheet device -->
<!-- ============================= -->
<!-- <section class="case-study__section--broadsheet">
  <div class="case-study__container--img--broadsheet case-study__module--704 element--will-appear">
    <img class="case-study__img work__device" src="/static/img/work_landing/uniDocs_work_tease.jpg" alt="">
  </div>
    <div class="case-study__content slide-up">
        <h2 class="case-study__headline">Poop Headline</h2>
        <div class="case-study__text">Poop Text</div>
    </div>
</section>
 -->





<!-- Items -->
<!-- ============================= -->
<section class="case-study__section {% if item.verticalPadding %} case-study__section--has-vertical-padding{% endif %}">
    <div class="case-study__content">
        <h2 class="case-study__headline">Items</h2>
        <div class="case-study__text">Items Text</div>
    </div>

  <div class="case-study__module--details case-study__module--1256">
    <ul class="case-study__items">


      <li class="case-study__item--highlight">
        <div class="case-study__container--item--image">
          <img class="case-study__image--item--highlight work__device--small" src="/static/img/work_landing/uniDocs_work_tease.jpg">
        </div>

        <div class="case-study__content--item">
          <h4 class="case-study__headline--item">I am items</h4>
          <div class="case-study__text--item">
              <p>I am graph</p>
          </div>
        </div>
      </li>


      <li class="case-study__item">
        <img class="case-study__image--item" src="/static/img/case-study/{{detail.image}}">
        <div class="case-study__content--item">
          <h4 class="case-study__headline--item">I am items</h4>
          <div class="case-study__text--item">
              <p>I am graph</p>
          </div>
        </div>
      </li>

    </ul>
  </div>
</section>







<!-- Banner -->
<!-- ============================= -->
<section class="case-study__section--banner">
  <div class="case-study__container--img">
    <img
      class="case-study__img case-study__img--banner--no-zoom"
      src="/static/img/case-study/uniDocs/theming.gif" alt="">
    <div class="case-study__banner-mask"></div>
  </div>
</section>




<!-- section -->
<!-- ============================= -->




<!-- Angles -->
<!-- ============================= -->
<div class="angle angle--full">
  <svg class="angle__bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 128">
    <polygon fill-opacity=".15" fill-rule="evenodd" points="1440 957.884 0 894.563 0 1021.205 1440 1021.205" transform="translate(0 -894)"></polygon>
  </svg>

  <svg class="angle__bottom--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1056 215">
    <polygon fill-opacity=".15" fill-rule="evenodd" points="1440 807.75 384.781 1021.205 1440 1021.205" transform="translate(-384 -807)"></polygon>
  </svg>

  <svg class="angle__bottom--right--large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 425">
    <polygon fill-opacity=".15" fill-rule="evenodd" points="0 1001.5 0 1024 1440 1024 1440 599.055" transform="translate(0 -599)"></polygon>
  </svg>

  <svg class="angle__top--left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 254">
    <polygon fill-rule="evenodd" points="0 253.305 0 0 1440 0 1440 58.969" opacity=".15"></polygon>
  </svg>

  <svg class="angle__top--right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 134">
    <polygon fill-rule="evenodd" points="720 0 1439.938 0 1439.938 133.984" transform="translate(-720)" opacity=".15"></polygon>
  </svg>
</div>





