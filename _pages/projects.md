---
layout: page
title: projects
permalink: /projects/
description: Discover the areas of Research Interest and the innovative projects undertaken by the Fractals Research Group.
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---
<!-- PAGE UNDER CONSTRUCTION -->
<div style="text-align: center; margin-top: 50px;">
    <h2 style="font-weight: 800; color: var(--global-text-color);">Page Under Construction</h2>
    <p style="font-size: 1.2rem; color: var(--global-text-color); opacity: 0.7;">We're working hard to bring you the latest updates on our projects. Stay tuned!</p>
</div>

<!-- Interest in Joint Research Projects? Vistin contact us page-->
<div style="text-align: center; margin-top: 50px;">
    <h2 style="font-weight: 800; color: var(--global-text-color);">Interested in Joint Research Projects?</h2>
    <p style="font-size: 1.2rem; color: var(--global-text-color); opacity: 0.7;">Visit our <a href="/contacts/">Contact Us</a> page to get in touch with us and explore potential collaborations!</p>
</div>


<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
