---
layout: page
title: ProCell
description: An award-winning stochastic modeling and simulation framework to investigate cell proliferation dynamics using flow cytometry data.
img: assets/img/projects/ProCell.png
importance: 4
category: [bio-med, optimization]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>ProCell</strong> is a modeling and simulation framework designed to investigate cell proliferation dynamics. Unlike traditional approaches, it explicitly accounts for the inherent <strong>stochasticity</strong> of cell division events.
            </p>
            <p>
                The tool directly manipulates raw data from flow cytometry experiments (such as GFP signal histograms) and leverages computational intelligence—specifically <i>Swarm Intelligence</i>—to calibrate the proliferation models. ProCell has been successfully applied to complex in vivo scenarios, including the modeling of cell proliferation in human acute myeloid leukemia xenografts.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/ProCell" target="_blank"><img src="https://img.shields.io/github/stars/aresio/ProCell?style=social" alt="GitHub stars"></a>
                <a href="https://pypi.org/project/procell/" target="_blank"><img src="https://img.shields.io/pypi/v/procell?color=blue" alt="PyPI version"></a>
                <img src="https://img.shields.io/badge/License-GPL--2.0-blue.svg" alt="License">
            </div>
            <br/>
            <div class="repository-badges">
                <span style="background: #e91e63; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-dice"></i> Stochastic Simulation
                </span>
                <span style="background: #76b900; color: black; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-microchip"></i> CUDA Accelerated
                </span>
            </div>
        </div>
    </div>
</div>

## How ProCell Works

ProCell bridges experimental biology and computational modeling by ingesting real-world flow cytometry data to simulate future cell population states over a maximum simulation time ($T$). 

**Experimental Inputs:**
* Initial cell fluorescence histograms (e.g., GFP signal across the population).
* The number of distinct sub-populations and their initial proportions.
* The mean and standard deviation of the division time for each sub-population.
* A baseline fluorescence minimum threshold.

**Simulation Output:**
ProCell produces a highly accurate predicted histogram of GFP fluorescence after time $T$, allowing researchers to validate hypotheses about division rates and population heterogeneity.

---

## Software & Tools

We have developed multiple versions of ProCell to ensure accessibility for biologists and high performance for computational scientists.

* **ProCell (Python/GUI):** The core framework is easily installable via pip (`pip install procell`). It features a user-friendly Graphical User Interface designed to simplify modeling, calibration, and simulation without requiring coding expertise.
* **cuProCell (GPU Version):** A CUDA-accelerated implementation designed to handle massive populations and strongly reduce the computational effort of stochastic simulations, scaling effectively on modern GPUs.

<div>
    <h3 class="mt-5">Framework Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-chart-bar mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Flow Cytometry Integration</h5>
                <p class="small">Directly imports and processes raw in vivo and in vitro flow cytometry histograms to seed stochastic simulations.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-project-diagram mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Swarm Intelligence</h5>
                <p class="small">Utilizes advanced Swarm Intelligence algorithms to calibrate model parameters against experimental ground truths.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-tachometer-alt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>High-Performance Computing</h5>
                <p class="small">cuProCell provides a fully CUDA-accelerated backend, drastically cutting simulation times for large-scale analyses.</p>
            </div>
        </div>
    </div>
</div>
<div class="award-spotlight mt-5 mb-5">
    <div class="row align-items-center">
        <div class="col-md-2 text-center">
            <i class="fas fa-trophy award-icon"></i>
        </div>
        <div class="col-md-10">
            <h3 class="award-title">Best Paper Award</h3>
            <h5 class="award-subtitle">IEEE CIBCB 2019 &bull; Siena, Italy</h5>
            <p class="award-text">
                The core methodology behind this framework was internationally recognized at the <em>2019 IEEE Conference on Computational Intelligence in Bioinformatics and Computational Biology</em>. 
            </p>
            <p class="award-text mb-2">
                <strong>Awarded Publication:</strong> <br>
                <i>"ProCell: Investigating cell proliferation with Swarm Intelligence"</i><br>
                <small class="text-muted">Authors: Marco S. Nobile, Thalia Vlachou, Simone Spolaor, Paolo Cazzaniga, Giancarlo Mauri, Pier Giuseppe Pelicci, and Daniela Besozzi.</small>
            </p>
            <a href="https://doi.org/10.1109/CIBCB.2019.8791485" target="_blank" class="award-link">
                View on IEEE Xplore <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/aresio/ProCell" target="_blank" class="btn btn-theme">View on GitHub (Python)</a>
    <a href="https://github.com/ericniso/cuda-pro-cell" target="_blank" class="btn btn-theme">View on GitHub (CUDA)</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publications</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=nobile2019modeling || key=nobile2019procell || key=nobile2020cuprocell] --order descending --sort year %}
    </div>
</div>

<style>
.repository-badges { margin-top: 15px; }
.btn-theme {
    background-color: var(--global-theme-color);
    color: white !important;
    border-radius: 50px;
    padding: 10px 30px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s ease;
}
.btn-theme:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
.card {
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.05);
}
.award-spotlight {
    background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    border: 1px solid rgba(255, 193, 7, 0.4);
    border-left: 5px solid #ffc107;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
}
.award-spotlight:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 193, 7, 0.15);
}
.award-icon {
    font-size: 4.5rem;
    color: #ffc107;
    filter: drop-shadow(0 4px 6px rgba(255, 193, 7, 0.3));
}
.award-title {
    font-weight: 800;
    margin-bottom: 5px;
    color: var(--global-text-color);
}
.award-subtitle {
    font-weight: 600;
    color: #856404; /* Dark gold for readability */
    margin-bottom: 15px;
    font-size: 1.1rem;
}
.award-text {
    font-size: 0.95rem;
    line-height: 1.6;
}
.award-link {
    display: inline-block;
    margin-top: 10px;
    font-size: 0.9rem;
    font-weight: 700;
    color: #d39e00;
    text-decoration: none;
    transition: color 0.2s;
}
.award-link:hover {
    color: #856404;
    text-decoration: underline;
}
/* Responsive adjustment for mobile */
@media (max-width: 768px) {
    .award-icon { margin-bottom: 20px; }
    .award-spotlight { text-align: center; }
}
</style>