---
layout: case-study
title: Grant Staublin | Prototype
permalink: /prototype/
<!-- pageclass: page-about -->
---






<!-- Page Header -->
<!-- ==================================== -->
<!-- Collection Items -->
<!-- ==================================== -->

{% for item in site.collection-case-study-mike %}
{% if item.component == 'hero' %}
  {% include case-study/hero.html %}
{% elsif item.component == 'banner' %}
  {% include case-study/banner.html %}
{% elsif item.component == 'broadsheet' %}
  {% include case-study/broadsheet.html %}
{% else %}
  {% include case-study/items.html %}
{% endif %}
{% endfor %}



<!-- {% include case-study/collection.html collection='mike' %} -->



