---
layout: page
permalink: /publications/
title: publications
description: Research output of the FRACTALS Research Group
nav: true
nav_order: 2
---

<div class="publications">

<div class="pub-nav" style="margin-bottom: 30px; padding: 10px; border: 1px solid var(--global-divider-color); border-radius: 5px;">
  <strong>Jump to:</strong> &nbsp;
  <button onclick="scrollToSection('journals')" class="btn-link">Journals</button> &nbsp;|&nbsp;
  <button onclick="scrollToSection('conferences')" class="btn-link">Conferences</button> &nbsp;|&nbsp;
  <button onclick="scrollToSection('abstracts')" class="btn-link">Abstracts & Posters</button>
</div>

{% include bib_search.liquid %}

<div id="journals-section">
  <h2 class="category">Journals</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @article %}
</div>

<div id="conferences-section">
  <h2 class="category">Conferences</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @inproceedings %}
</div>

<div id="abstracts-section">
  <h2 class="category">Abstracts & Posters</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @unpublished %}
</div>

</div>

<script>
function scrollToSection(id) {
  const element = document.getElementById(id + "-section");
  if (element) {
    const headerOffset = 80; // Regola in base all'altezza della tua navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
</script>

<style>
  .category {
    margin-top: 2rem;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--global-divider-color);
    color: var(--global-theme-color);
    text-transform: uppercase;
  }

  .btn-link {
    background: none;
    border: none;
    color: var(--global-theme-color);
    font-weight: bold;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    font-size: 1rem;
  }

  .btn-link:hover {
    color: var(--global-text-color);
  }
</style>