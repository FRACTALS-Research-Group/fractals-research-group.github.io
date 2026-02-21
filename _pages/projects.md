---
layout: page
title: Research
permalink: /projects/
description: Discover the areas of Research Interest and the innovative projects undertaken by the Fractals Research Group.
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

<div class="row mt-4 mb-5">
  <div class="col-md-6 mb-3">
    <a href="/funding/" class="card-impact-compact">
      <div class="card-content">
        <i class="fas fa-hand-holding-usd fa-2x"></i>
        <div class="text-group">
          <h4 class="m-0">Research Funding</h4>
          <p class="m-0 small">Grants and supporting institutions</p>
        </div>
      </div>
      <i class="fas fa-arrow-right arrow-icon"></i>
    </a>
  </div>
  <div class="col-md-6 mb-3">
    <a href="/patents/" class="card-impact-compact">
      <div class="card-content">
        <i class="fas fa-certificate fa-2x"></i>
        <div class="text-group">
          <h4 class="m-0">Patents</h4>
          <p class="m-0 small">Technological breakthroughs</p>
        </div>
      </div>
      <i class="fas fa-arrow-right arrow-icon"></i>
    </a>
  </div>
</div>

<hr>

<div style="text-align: center; margin-top: 50px;">
    <h2 style="font-weight: 800; color: var(--global-text-color);">Current Research Projects</h2>
    <p style="font-size: 1.2rem; color: var(--global-text-color); opacity: 0.7;">We're currently documenting our latest breakthroughs. Detailed project cards will appear below shortly.</p>
</div>

<div class="projects-grid">
  <a href="/projects/digital-health/" class="area-card">
    <i class="fas fa-microscope"></i>
    <h3>Digital Health & Pathology</h3>
    <p>AI-driven diagnostics and cell analysis.</p>
  </a>

  <a href="/projects/medical-imaging/" class="area-card">
    <i class="fas fa-x-ray"></i>
    <h3>Medical Imaging</h3>
    <p>Advanced signal and image processing.</p>
  </a>

  <a href="/projects/interpretable-ai/" class="area-card">
    <i class="fas fa-brain"></i>
    <h3>Interpretable AI and Fairness</h3>
    <p>Transparent algorithms.</p>
  </a>

  <a href="/projects/hpc/" class="area-card">
    <i class="fas fa-microchip"></i>
    <h3>HPC & GPU Computing</h3>
    <p>Massively parallel simulations.</p>
  </a>

  <a href="/projects/complex-systems/" class="area-card">
    <i class="fas fa-atom"></i>
    <h3>Complex Systems</h3>
    <p>Astrophysics and behavioral ecology.</p>
  </a>

  <a href="/projects/optimization/" class="area-card">
    <i class="fas fa-vial"></i>
    <h3>Optimization & Stochastic Algorithms</h3>
    <p>Novel methods for complex optimization.</p>
  </a>
</div>


<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% endif %}
</div>

<div style="text-align: center; margin-top: 80px; padding: 40px; background: var(--global-code-bg-color); border-radius: 12px;">
    <h2 style="font-weight: 800; color: var(--global-text-color);">Interested in Joint Research Projects?</h2>
    <a href="/contacts/" class="btn btn-theme">Contact Our Research Group</a>
</div>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 40px;
  }
  .area-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    text-decoration: none !important;
    transition: all 0.3s ease;
    color: var(--global-text-color) !important;
  }
  .area-card:hover {
    transform: translateY(-10px);
    border-color: var(--global-theme-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  .area-card i {
    font-size: 3rem;
    color: var(--global-theme-color);
    margin-bottom: 20px;
  }
  .area-card h3 { font-weight: 800; margin-bottom: 10px; }
  .area-card p { font-size: 0.9rem; opacity: 0.8; }

  .card-impact {
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 30px;
    height: 100%;
    transition: all 0.3s ease;
    background: var(--global-bg-color);
  }
  .card-impact:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-color: var(--global-theme-color);
  }
  .btn-outline-theme {
    color: var(--global-theme-color);
    border: 1px solid var(--global-theme-color);
    border-radius: 50px;
    padding: 8px 20px;
    font-weight: 600;
  }
  .btn-outline-theme:hover {
    background-color: var(--global-theme-color);
    color: white !important;
  }
  .btn-theme {
    background-color: var(--global-theme-color);
    color: white !important;
    border-radius: 50px;
    padding: 10px 30px;
    font-weight: bold;
    text-decoration: none;
  }
  .card-impact-compact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    background: var(--global-bg-color);
    text-decoration: none !important;
    transition: all 0.3s ease;
    color: var(--global-text-color) !important;
  }
  .card-impact-compact:hover {
    border-color: var(--global-theme-color);
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .card-content i {
    color: var(--global-theme-color);
    width: 40px;
    text-align: center;
  }

  .text-group h4 {
    font-weight: 800;
    font-size: 1.1rem;
  }

  .text-group p {
    opacity: 0.7;
    font-size: 0.85rem;
  }

  .arrow-icon {
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  .card-impact-compact:hover .arrow-icon {
    opacity: 1;
    transform: translateX(5px);
    color: var(--global-theme-color);
  }
</style>