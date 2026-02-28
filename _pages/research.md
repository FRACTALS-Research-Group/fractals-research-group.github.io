---
layout: page
title: Research
permalink: /research/
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
    <h2 style="font-weight: 800; color: var(--global-text-color);">Research Areas</h2>
    <p style="font-size: 1.2rem; color: var(--global-text-color); opacity: 0.7;">
      Integrating our core pillars to solve complex scientific challenges.
    </p>
</div>

<div class="projects-grid">
  <a href="/projects/medicine-biological-systems/" class="area-card">
    <i class="fas fa-microscope"></i>
    <h3>Medicine & Biological Systems</h3>
    <p>Developing advanced clinical diagnostics while mastering the non-linear dynamics governing life, from cellular networks to systemic health interactions.</p>
  </a>

  <a href="/projects/therapeutics/" class="area-card">
    <i class="fas fa-pills"></i>
    <h3>Therapeutics, Drug Discovery & Design</h3>
    <p>Bridging Drug Discovery and Design through computational modeling to identify precision medicine solutions and life-saving outcomes.</p>
  </a>

  <a href="/projects/hpc-gpu-simulations/" class="area-card">
    <i class="fas fa-microchip"></i>
    <h3>High Performance Computing & GPU Simulations</h3>
    <p>Leveraging massive computational power and CUDA-driven architectures to push the boundaries of data processing and real-time complex systems modeling.</p>
  </a>

  <a href="/projects/astrophysics-complex-systems/" class="area-card">
    <i class="fas fa-atom"></i>
    <h3>Astrophysics & Complex Systems</h3>
    <p>Decoding the silent language of Cosmic Rays and multi-scale natural systems, turning chaotic high-energy data into physical insights.</p>
  </a>

  <a href="/projects/optimization-CI/" class="area-card">
    <i class="fas fa-vial"></i>
    <h3>Optimization & Computational Intelligence</h3>
    <p>Solving complex mathematical bottlenecks by advancing Swarm Intelligence, Evolutionary Algorithms, and Fuzzy Logic.</p>
  </a>

  <a href="/projects/interpretable-ai-fairness-ethics/" class="area-card">
    <i class="fas fa-brain"></i>
    <h3>Interpretable AI, Fairness & Ethics</h3>
    <p>Opening the "black box" of complex models to provide human-understandable insights while ensuring equitable outcomes and robust digital ethics.</p>
  </a>
</div>

<div style="text-align: center; margin-top: 80px; padding: 40px; background: var(--global-code-bg-color); border-radius: 12px;">
    <h2 style="font-weight: 800; color: var(--global-text-color);">Interested in Joint Research Projects?</h2>
    <a href="/contacts/" class="btn btn-theme">Contact Our Research Group</a>
</div>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 40px;
  }
  .area-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    padding: 35px 25px;
    border-radius: 15px;
    text-align: center;
    text-decoration: none !important;
    transition: all 0.3s ease;
    color: var(--global-text-color) !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
  }
  .area-card:hover {
    transform: translateY(-10px);
    border-color: var(--global-theme-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  .area-card i {
    font-size: 3.5rem;
    color: var(--global-theme-color);
    margin-bottom: 25px;
  }
  .area-card h3 { font-weight: 800; margin-bottom: 15px; font-size: 1.3rem; }
  .area-card p { font-size: 0.95rem; opacity: 0.8; line-height: 1.5; }

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
  .text-group h4 { font-weight: 800; font-size: 1.1rem; }
  .text-group p { opacity: 0.7; font-size: 0.85rem; }
  .arrow-icon { opacity: 0.3; transition: all 0.3s ease; }
  .card-impact-compact:hover .arrow-icon { opacity: 1; transform: translateX(5px); color: var(--global-theme-color); }
</style>