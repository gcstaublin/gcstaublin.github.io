---
layout: case-study
title: Grant Staublin | Prototype
permalink: /prototype/
<!-- pageclass: page-about -->
---






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



<!-- <script>
  const speed = 0.1;
  // let --paraTop;
  const para = document.querySelector('.parallax');
  // --paraTop = para.offsetTop;
  window.addEventListener('scroll', function() {
  document.body.style.setProperty("--scroll-amount", (document.body.scrollTop || document.documentElement.scrollTop) * speed );
  console.log(`--scroll-amount`);
});



</script> -->