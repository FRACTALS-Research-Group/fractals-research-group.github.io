---
layout: page
title: cuTauLeaping
description: A GPU-powered tau-leaping stochastic simulator for massive parallel analyses of mass-action kinetics models.
img: assets/img/projects/cuTauLeaping.png
importance: 4
category: [astrophysics-complex-systems, hpc]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>cuTauLeaping</strong> is a high-performance stochastic simulator for biological systems, engineered to exploit the remarkable memory bandwidth and computational capability of modern GPUs.
            </p>
            <p>
                In biochemical networks with low molecule counts, random fluctuations play a crucial role in system dynamics, requiring stochastic rather than deterministic simulations. However, exact stochastic algorithms (like Gillespie's SSA) can be computationally prohibitive. cuTauLeaping overcomes this bottleneck by implementing Cao's improved tau-leaping algorithm on NVIDIA CUDA architectures, enabling the massively parallel execution of thousands of stochastic simulations required to investigate emergent biological dynamics under varying conditions.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/cuTauLeaping" target="_blank"><img src="https://img.shields.io/github/stars/aresio/cuTauLeaping?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/License-BSD--2--Clause-green.svg" alt="License">
            </div>
            <br/>
            <div class="repository-badges">
                <span style="background: #76b900; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-microchip"></i> CUDA / Python
                </span>
                <span style="background: #03a9f4; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-dice"></i> Stochastic Simulation
                </span>
            </div>
            </div>
        </div>
    </div>
</div>

## Technical Architecture & Features

cuTauLeaping is built primarily in **CUDA C/C++** to maximize hardware efficiency. It operates via a highly customizable command-line interface where researchers can precisely allocate CUDA threads, blocks, and memory structures to suit their hardware topology. 

* **Advanced Tau-Leaping:** Implements Cao's modified tau-leaping algorithm to take larger, approximate time steps while avoiding negative species counts, vastly speeding up simulation times compared to exact methods.
* **Exact SSA Fallback:** Includes a `force_ssa` flag that allows the algorithm to dynamically fall back on exact Stochastic Simulation Algorithm (SSA) steps when required for absolute precision in highly sensitive states.
* **SBML Integration:** The repository includes a dedicated Python utility (`SBML2BSW.py`) to easily convert standard Systems Biology Markup Language (SBML) files into the specific binary format required by the CUDA engine.

---

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-layer-group mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Massive Ensembles</h5>
                <p class="small">Distributes huge batches of stochastic simulations across GPU threads for rapid parameter sweeps and statistical analyses.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-tachometer-alt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Optimized Leaping</h5>
                <p class="small">Based on Cao's tau-leaping, allowing the system to skip over non-critical reaction events to dramatically reduce computation time.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-file-code mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>SBML Pipeline</h5>
                <p class="small">Seamlessly bridges the gap between standard bioinformatics modeling formats and raw GPU binary data arrays.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/aresio/cuTauLeaping" target="_blank" class="btn btn-theme">View Repository</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=nobile2014cutauleaping] --order descending --sort year %}
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
</style>