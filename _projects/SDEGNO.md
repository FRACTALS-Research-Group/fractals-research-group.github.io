---
layout: page
title: SDEGnO
description: Optimization and performance testing of CUDA-(multi)GPU-accelerated codes for the automatic parameterization of physical models.
# img: assets/img/projects/sdegno.png
importance: 6
category: [astrophysics-complex-systems, hpc]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>SDEGnO</strong> (Stochastic Differential Equations on GPUs for Optimization) aims to develop high-performance, general-purpose simulators for the simulation and automatic calibration of physical models based on <strong>Stochastic Differential Equations (SDEs)</strong>.
            </p>
            <p>
                The initiative seeks to implement an integrated framework that leverages Monte Carlo techniques and global optimization algorithms (evolutionary strategies, swarm intelligence) to drastically reduce simulation time and energy consumption while ensuring high accuracy.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/ICSC-Spoke3/Cosmica-dev" target="_blank"><img src="https://img.shields.io/github/stars/ICSC-Spoke3/Cosmica-dev?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/Platform-CUDA--MultiGPU-76b900.svg?logo=nvidia" alt="CUDA">
                <!-- <img src="https://img.shields.io/badge/Domain-Astrophysics-0d47a1.svg" alt="Astrophysics"> -->
            </div>
            <br/>
            <div class="repository-badges">
                <span style="background: #ffc107; color: black; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-cogs"></i> High-Performance Computing
                </span>
                <span style="background: #2196f3; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-star"></i> Astrophysics 
                </span>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/SDEGnO.png" alt="SDEGnO Logo" class="img-fluid">
        </div>
    </div>
</div>

## Key Features
- **Architectural Optimization**: Maximizes computational efficiency using NVIDIA multi-GPU architectures, refined memory management, and SIMD (Single Instruction, Multiple Data) techniques.
- **Intelligent Calibration**: Integrates advanced algorithms for the automatic search and calibration of physical parameters to dynamically adapt to various application scenarios.
- **Uncertainty & Sensitivity**: Features novel algorithms designed to rigorously assess parameter uncertainty and system sensitivity.
- **Energy-Aware Computing**: Drastically cuts down execution time and the corresponding energy footprint of massive stochastic simulations.


## Project Phases & Funding Details

The SDEGnO project is structured to deliver a replicable, scalable framework providing strategic support to future HPC research groups. 

<div class="mt-4 mb-4 p-4" style="background-color: var(--global-code-bg-color); border-left: 4px solid var(--global-theme-color); border-radius: 8px;">
    <h5 style="font-weight: 800; text-transform: uppercase; font-size: 1rem; color: var(--global-theme-color);">Grant & Institutional Info</h5>
    <ul style="list-style-type: none; padding-left: 0; font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
        <li><strong>Grant:</strong> ICSC National Centre for HPC, Big Data and Quantum Computing (Spoke 3 – Astrophysics), funded by PNRR MUR – M4C2 – Investment 1.4.</li>
        <li><strong>CUP:</strong> C53C22000350006</li>
        <li><strong>Principal Investigator (UNIVE):</strong> Prof. Marco Salvatore Nobile</li>
        <li><strong>Research Team:</strong> Marco Salvatore Nobile, Sabina Rossi, Matteo Grazioso, Leone Bacciu</li>
        <li><strong>Duration:</strong> 01/09/2024 - 30/11/2025</li>
    </ul>
</div>

## Technical Highlights

<div class="row mt-4 mb-5">
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-microchip mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>CUDA & Multi-GPU</h5>
            <p class="small">Fully leverages NVIDIA GPU architectures to accelerate complex Monte Carlo integrations of Stochastic Differential Equations.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-network-wired mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Global Optimization</h5>
            <p class="small">Utilizes Swarm Intelligence and Evolutionary Algorithms to automatically calibrate and tune physical models without manual intervention.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-meteor mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Astrophysics Core</h5>
            <p class="small">Applied directly to predict cosmic radiation propagation within the heliosphere, turning chaotic high-energy data into insights.</p>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
<a href="https://github.com/ICSC-Spoke3/Cosmica-dev" class="btn btn-theme">View Code on GitHub</a>
<a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
<h3 class="mt-5">Core Publications</h3>
<div class="publication-list">
{% bibliography --query @*[key=dellatorre2026_role || key=bacciu2026_performance || key=bacciu2025massive || key=bacciu2025cosmica || key=bacciu2025_optimized || key=della2026validation] %}
</div>
</div>



<style>
.repository-badges img { margin-right: 5px; }
.btn-theme {
background-color: var(--global-theme-color);
color: white !important;
border-radius: 50px;
padding: 10px 30px;
font-weight: bold;
text-decoration: none;
}
.card {
border: 1px solid var(--global-divider-color);
background: var(--global-card-bg-color);
border-radius: 12px;
}
</style>