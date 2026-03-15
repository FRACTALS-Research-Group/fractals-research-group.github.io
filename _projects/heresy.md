---
layout: page
title: HERESY
description: A Highly Efficient REaction SYstem simulator equipped with a graphical user interface and GPU-accelerated computation.
img: assets/img/projects/HERESY.png
importance: 4
category: [astrophysics-complex-systems, hpc]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>HERESY</strong> (Highly Efficient REaction SYstem simulator) is a computational tool designed to simplify and accelerate the simulation of Reaction Systems (RS), a formal model of computation inspired by biochemical reactions taking place in living cells.
            </p>
            <p>
                While the theoretical framework of Reaction Systems is powerful, simulating complex environments with numerous interacting entities can be computationally taxing. HERESY solves this by bridging an intuitive, Python-based Graphical User Interface (GUI) with a highly optimized C++ and CUDA backend. This architecture allows researchers to easily define reactants, inhibitors, and products, and then offload the heavy computational lifting directly onto the GPU for massive parallelization.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/HERESY" target="_blank"><img src="https://img.shields.io/github/stars/aresio/HERESY?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/License-BSD--2--Clause-green.svg" alt="License">
            </div>
            <br/>
            <div class="repository-badges">
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

## Streamlined Simulation Workflow

HERESY was built with usability in mind. Instead of writing complex scripts to define models, researchers can launch the GUI (`python heresy.py`) and input their systems using a clean, simplified syntax. 

* **Reactions Format:** Defined simply as Reactants, Inhibitors, and Products. For example, a reaction with reactants `r1 r2`, inhibitor `i1`, and products `p1 p2 p3` is written elegantly as: `r1 r2, i1, p1 p2 p3`
* **Context Format:** The chemical context for each iteration is provided as a space-separated list (e.g., `s1 s2 s3`).

Once the system and context are defined, HERESY leverages the GPU to compute the state transitions, handling large-scale combinatorial checks with high efficiency.

---

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-window-maximize mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Intuitive GUI</h5>
                <p class="small">A dedicated graphical interface built in Python ensures that setting up and running complex reaction systems is accessible to all researchers.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-tachometer-alt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>GPU Accelerated</h5>
                <p class="small">Offloads the combinatorial burden of reaction calculations to NVIDIA GPUs via a robust C++/CUDA engine.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-keyboard mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Simplified Syntax</h5>
                <p class="small">Replaces boilerplate code with a streamlined, text-based input format for defining reactants, inhibitors, and products.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/aresio/HERESY" target="_blank" class="btn btn-theme">View Repository</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=nobile2017efficient] --order descending --sort year %}
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