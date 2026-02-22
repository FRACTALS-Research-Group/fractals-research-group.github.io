---
layout: page
title: Research Funding
permalink: /funding/
description: Key grants and funded projects supporting the FRACTALS Research Group.
nav: false
---

<div class="funding-container">

  <div class="funding-card">
    <div class="funding-header">
      <span class="funding-badge">PNRR Cascade Funding</span>
      <h3 class="funding-title">ALLIANCE</h3>
    </div>
    <p class="funding-subtitle">A novel integrated cyclic peptide-based platform for precision delivery of nucleic acid-based therapeutics</p>
    
    <div class="funding-details">
      <div class="detail-item">
        <strong>Institution:</strong> National Center for Gene Therapy and Drugs based on RNA Technology (CN RNA & Gene Therapy)
      </div>
      <div class="detail-item">
        <strong>Role:</strong> Work Package 2: "Computational development and characterization of cyclic peptide binders"
      </div>
      <div class="detail-item">
        <strong>PI:</strong> Prof. Alessandro Angelini (Ca’ Foscari University of Venice)
      </div>
    </div>
    
    <div class="funding-footer">
      <div class="amount-tag">EUR 715,800</div>
    </div>
  </div>

  <div class="funding-card">
    <div class="funding-header">
      <span class="funding-badge gold">POR/HPC</span>
      <h3 class="funding-title">CONVECS</h3>
    </div>
    <p class="funding-subtitle">COmuNità VEneta per il Calcolo Scientifico – Regional hub for High Performance Computing</p>
    
    <div class="funding-details">
      <div class="detail-item">
        <strong>Institution:</strong> Regione Veneto
      </div>
      <div class="detail-item">
        <strong>Role:</strong> Scientific Director for Ca’ Foscari University
      </div>
      <div class="detail-item">
        <strong>PI:</strong> Prof. Zanella (University of Padua)
      </div>
    </div>
    
    <div class="funding-links mt-3">
      <a href="#" class="btn-link-sm"><i class="fas fa-external-link-alt"></i> ATS Website</a>
      <a href="#" class="btn-link-sm"><i class="fas fa-university"></i> Ca’ Foscari Page</a>
    </div>

    <div class="funding-footer">
      <div class="amount-tag">EUR 16.5 M</div>
    </div>
  </div>

  <div class="funding-card">
    <div class="funding-header">
      <span class="funding-badge">PNRR Cascade Funding</span>
      <h3 class="funding-title">SDEGnO</h3>
    </div>
    <p class="funding-subtitle">Stochastic Differential Equations on GPU for Optimization</p>
    
    <div class="funding-details">
      <div class="detail-item">
        <strong>Thematic Area:</strong> Astrophysics and Cosmos Observation (Spoke 3)
      </div>
      <div class="detail-item">
        <strong>Institution:</strong> Istituto Nazionale di Astrofisica (INAF)
      </div>
      <div class="detail-item">
        <strong>PI:</strong> Prof. Marco S. Nobile
      </div>
    </div>
    
    <div class="funding-footer">
      <div class="amount-tag">EUR 80,000</div>
    </div>
  </div>

</div>

<style>
  .funding-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .funding-card {
    border: 1px solid var(--global-divider-color);
    border-left: 5px solid var(--global-theme-color);
    border-radius: 8px;
    padding: 25px;
    background: var(--global-card-bg-color);
    transition: transform 0.2s ease;
  }

  .funding-card:hover {
    transform: scale(1.01);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }

  .funding-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
  }

  .funding-title {
    margin: 0;
    font-weight: 900;
    letter-spacing: -1px;
    color: var(--global-text-color);
  }

  .funding-badge {
    background: var(--global-theme-color);
    color: white !important;
    font-size: 0.7rem;
    padding: 3px 10px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .funding-badge.gold {
    background: #d4af37; /* Colore speciale per grandi progetti regionali */
  }

  .funding-subtitle {
    font-style: italic;
    color: var(--global-text-color);
    opacity: 0.8;
    margin-bottom: 15px;
    font-size: 1.1rem;
  }

  .funding-details {
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .detail-item strong {
    color: var(--global-theme-color);
  }

  .funding-footer {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }

  .amount-tag {
    background: var(--global-code-bg-color);
    border: 1px solid var(--global-divider-color);
    padding: 5px 15px;
    border-radius: 4px;
    font-weight: bold;
    font-family: monospace;
    color: var(--global-text-color);
  }

  .btn-link-sm {
    font-size: 0.8rem;
    margin-right: 15px;
    text-decoration: none;
    color: var(--global-theme-color) !important;
    font-weight: 600;
  }

  .btn-link-sm:hover {
    text-decoration: underline;
  }
</style>