---
layout: page
title: cupSODA
description: A CUDA-powered, coarse-grain deterministic simulator for mass-action kinetics models in systems biology.
img: assets/img/projects/cupSODA.png
importance: 2
category: [astrophysics-complex-systems, hpc]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>cupSODA</strong> is a black-box deterministic simulator of biological systems that exploits the remarkable memory bandwidth and computational capability of modern GPUs.
            </p>
            <p>
                Investigating the emergent dynamics of complex biological systems often requires executing a massive number of simulations under varying conditions (e.g., parameter sweeps or sensitivity analysis). cupSODA was designed to efficiently execute these large batches of simulations in parallel. It works by automatically deriving the system of Ordinary Differential Equations (ODEs) from a reaction-based mechanistic model defined by mass-action kinetics, and then solving them using the LSODA numerical integration algorithm.
            </p>
            <div class="repository-badges">
                <div class="repository-badges">
                <a href="https://github.com/aresio/cupSODA" target="_blank"><img src="https://img.shields.io/github/stars/aresio/cupSODA?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/License-BSD--2--Clause-green.svg" alt="License">
            </div>
            <br/>
            <div class="repository-badges">
                <span style="background: #76b900; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-microchip"></i> CUDA / C++
                </span>
                <span style="background: #ff5722; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-network-wired"></i> Systems Biology
                </span>
            </div>
            </div>
        </div>
    </div>
</div>

## Technical Architecture

cupSODA is built directly in **C++** and **CUDA** (83.5% CUDA codebase) to run efficiently on NVIDIA architectures. It is meant to be highly portable and can be compiled across supported architectures (GNU/Linux, Microsoft Windows, macOS) targeting specific GPU compute capabilities.

The software is executed directly from the command line, allowing researchers to specify the model input directory, thread/block distribution, output destinations, and advanced memory configurations to squeeze out maximum parallel performance from the hardware.

---

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-rocket mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Massively Parallel</h5>
                <p class="small">Distributes independent simulation instances across thousands of GPU cores for unparalleled throughput.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-cogs mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Automated ODEs</h5>
                <p class="small">Automatically translates high-level biochemical mass-action reactions into calculable ODEs.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-chart-line mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>LSODA Integration</h5>
                <p class="small">Utilizes the robust LSODA algorithm to ensure high numerical stability for stiff and non-stiff systems.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/aresio/cupSODA" target="_blank" class="btn btn-theme">View Repository</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=nobile2014gpu] --order descending --sort year %}
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