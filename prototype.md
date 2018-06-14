---
layout: case-study
title: Grant Staublin | Prototype
permalink: /prototype/
<!-- pageclass: page-about -->
---






<!-- Collection Items -->
<!-- ==================================== -->
<!-- {% for item in site.collection-case-study-mike %}
{% if item.component == 'hero' %}
  {% include case-study/hero.html %}
{% elsif item.component == 'banner' %}
  {% include case-study/banner.html %}
{% elsif item.component == 'broadsheet' %}
  {% include case-study/broadsheet.html %}
{% else %}
  {% include case-study/items.html %}
{% endif %}
{% endfor %} -->



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




<!-- Second Smalls -->
<!-- ========================== -->
<section class="work__grid--2">
{% for item in site.data.work.projects  %}
  <article class="work__item--small {% if item.theme %}theme--{{item.theme}}{% endif %}">
      <div class="work__media work__media--small">
        <div class="work__container--img--small">
          <img class="work__img" src="/static/img/work_landing/{{item.img}}">
          <!-- <img class="work__img" src="/static/img/work_landing/grant_2018.jpg"> -->
        </div>
      </div>

      <div class="work__content">
        <h3 class="work__headline work__headline--small">
          {{item.head}}
        </h3>
        <div class="work__text">
          {{item.text}}
          <a class="archive__link--text" target="_blank" href="{{item.url}}">See project</a>
          <a class="archive__link--text" target="_blank" href="{{site.baseurl}}/{{item.url}}">See project</a>
        </div>
      </div>
  </article>
{% endfor %}
</section>

[here](/work/goodbye-mike)
