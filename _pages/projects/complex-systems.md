---
layout: page
title: Complex Systems & Astrophysics
permalink: /projects/complex-systems/
---
<div class="projects">
  {% assign projects = site.projects | where: "category", "complex-systems" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in projects %}{% include projects.liquid %}{% endfor %}
  </div>
</div>

<div style="text-align: center; margin-top: 50px;">
    <h2 style="font-weight: 800; color: var(--global-text-color);">Current Research Projects</h2>
    <p style="font-size: 1.2rem; color: var(--global-text-color); opacity: 0.7;">We're currently documenting our latest breakthroughs. Detailed project cards will appear below shortly.</p>
</div>
