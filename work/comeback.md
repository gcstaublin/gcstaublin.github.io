---
layout: case-study
title: Grant Staublin | Prototype
permalink: /work/comeback/
<!-- pageclass: page-about -->
---




<!-- {% include case-study/hero-comeback.html %} -->


<!-- Collection Items -->
<!-- ==================================== -->
{% for item in site.collection-case-study-comeback %}
{% if item.component == 'hero' %}
  {% include case-study/hero-comeback.html %}
{% elsif item.component == 'banner' %}
  {% include case-study/banner.html %}
{% elsif item.component == 'broadsheet' %}
  {% include case-study/broadsheet-comeback.html %}
{% else %}
  {% include case-study/comeback-end.html %}
{% endif %}
{% endfor %}




