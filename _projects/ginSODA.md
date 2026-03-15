---
layout: page
title: ginSODA
description: A Python API for the massively parallel, GPU-powered simulation of stiff Ordinary Differential Equation (ODE) models.
img: assets/img/projects/ginSODA.png
importance: 4
category: [astrophysics-complex-systems, hpc]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>ginSODA</strong> is a streamlined Python interface designed to offload the simulation of massive numbers of stiff Ordinary Differential Equation (ODE) systems directly onto the GPU.
            </p>
            <p>
                Modeling complex biological and physical systems often results in stiff ODEs, which are computationally expensive and notoriously slow to solve on traditional CPUs. ginSODA bridges the gap between the ease of use of Python and the raw computational power of NVIDIA CUDA architectures. By utilizing the robust LSODA numerical integration algorithm, ginSODA allows researchers to evaluate vast ensembles of models—ideal for tasks like parameter estimation, sensitivity analysis, or robust experimental design—without the traditional bottlenecks of CPU-bound solvers.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/ginSODA" target="_blank"><img src="https://img.shields.io/github/stars/aresio/ginSODA?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/License-BSD--2--Clause-green.svg" alt="License">
            </div>
            <br/>
            <div class="repository-badges">
                <span style="background: #3776ab; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fab fa-python"></i> Python API
                </span>
                <span style="background: #76b900; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-microchip"></i> CUDA Accelerated
                </span>
                <span style="background: #ff5722; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-network-wired"></i> Systems Biology
                </span>
            </div>
        </div>
    </div>
</div>

## Technical Architecture & Features

While the user interacts entirely through a clean, high-level **Python** API, the heavy lifting is done by a highly optimized **CUDA C/C++** backend (comprising over 90% of the codebase). 

* **Automatic Differentiation & Parsing:** ginSODA includes Python utilities (`differentiator.py`, `ginsoda.py`) that parse the model definitions and prepare them for rapid GPU execution.
* **Stiff & Non-Stiff Handling:** Because it relies on the LSODA algorithm, ginSODA automatically detects the stiffness of the system being solved and switches between Adams methods (for non-stiff problems) and BDF methods (for stiff problems) dynamically, ensuring high numerical stability.

---

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fab fa-python mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Python Native Feel</h5>
                <p class="small">Seamlessly integrates into existing Python workflows, allowing you to define models in Python while executing them in CUDA.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-wave-square mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Stiff Systems Solver</h5>
                <p class="small">Powered by a GPU-adapted LSODA algorithm, ensuring accurate and stable integration even for highly stiff ODE systems.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-layer-group mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Massive GPU Offloading</h5>
                <p class="small">Distributes thousands of independent ODE simulations across GPU cores, dramatically reducing time-to-solution for large-scale analyses.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/aresio/ginSODA" target="_blank" class="btn btn-theme">View Repository</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>
<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=s2019ginsoda] --order descending --sort year %}
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