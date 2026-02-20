---
layout: page
title: patents & intellectual property
permalink: /patents/
description: Technological breakthroughs and certified innovations developed by the FRACTALS Research Group.
nav: false
---

<div class="patents-container">

  <div class="patent-card">
    <div class="patent-header">
      <h2 class="project-title-highlight">THAITI</h2>
      <div class="project-status-badge">University Spin-off</div>
    </div>
    
    <div class="patent-body">
      <h4 class="patent-headline">Optimizing Magnetic Resonance Imaging</h4>
      <p class="patent-desc">
        A method for determining an optimal inversion time for an <strong>Inversion Recovery</strong> radio frequency pulse sequence 
        for acquiring late images after administering a paramagnetic contrast medium.
      </p>

      <div class="patent-timeline">
        <div class="timeline-entry">
          <span class="date">Aug 2022</span>
          <span class="event"><strong>Italian Patent:</strong> IT102022000017907</span>
        </div>
        <div class="timeline-entry">
          <span class="date">Aug 2023</span>
          <span class="event"><strong>International Extension:</strong> PCT/EP2023/073475</span>
        </div>
      </div>

      <div class="spin-off-box">
        <i class="fas fa-rocket"></i>
        <span>Approved as a <strong>University Spin-off</strong> by Ca’ Foscari University of Venice (Sept 2025).</span>
      </div>
    </div>
  </div>

  <div class="patent-card">
    <div class="patent-header">
      <h2 class="project-title-highlight">RenAI</h2>
      <div class="project-status-badge">International PCT</div>
    </div>
    
    <div class="patent-body">
      <h4 class="patent-headline">AI-Powered Renal Biopsy Analysis</h4>
      <p class="patent-desc">
        An advanced method for the <strong>automated analysis of digitized renal biopsy images</strong> using specialized 
        Artificial Intelligence frameworks to enhance diagnostic precision.
      </p>

      <div class="patent-timeline">
        <div class="timeline-entry">
          <span class="date">Dec 2024</span>
          <span class="event"><strong>Italian Patent:</strong> IT102024000028188</span>
        </div>
        <div class="timeline-entry">
          <span class="date">Oct 2025</span>
          <span class="event"><strong>International Extension:</strong> PCT International Filing</span>
        </div>
      </div>
    </div>
  </div>

</div>

<style>
  .patents-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .patent-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
    padding: 30px;
    transition: border-color 0.3s ease;
  }

  .patent-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--global-theme-color);
    padding-bottom: 10px;
  }

  /* Titolo del progetto molto più visibile */
  .project-title-highlight {
    font-size: 2.8rem !important;
    font-weight: 900 !important;
    color: var(--global-theme-color) !important;
    margin: 0 !important;
    letter-spacing: -1.5px;
  }

  .project-status-badge {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    opacity: 0.6;
  }

  .patent-headline {
    font-weight: 700;
    margin-bottom: 15px;
  }

  .patent-desc {
    font-size: 1.05rem;
    line-height: 1.5;
    margin-bottom: 20px;
    opacity: 0.9;
  }

  .patent-timeline {
    border-left: 2px solid var(--global-divider-color);
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .timeline-entry {
    margin-bottom: 8px;
    font-size: 0.9rem;
  }

  .date {
    font-weight: bold;
    color: var(--global-theme-color);
    margin-right: 10px;
  }

  .spin-off-box {
    margin-top: 20px;
    padding: 12px 18px;
    background: var(--global-code-bg-color);
    border-radius: 8px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid var(--global-divider-color);
  }

  .spin-off-box i {
    color: var(--global-theme-color);
  }
</style>