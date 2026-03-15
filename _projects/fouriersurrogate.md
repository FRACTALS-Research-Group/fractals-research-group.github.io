---
layout: page
title: Fourier Surrogate Models of Dilated Fitness Landscapes
description: A novel approach combining dilation functions and Fourier surrogate modeling to smooth noisy, multi-modal fitness landscapes in systems biology.
img: assets/img/projects/FourierSurrogate.png
importance: 4
category: [optimization, astrophysics-complex-systems]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <em>"Or how we learned to torture optimization problems until they confess."</em>
            </p>
            <p>
                Parameter Estimation (PE) is one of the most notoriously complex problems in Systems Biology. When inferring the kinetic parameters of biochemical systems—especially when species exist in very low amounts—the intrinsic noise of molecular collisions makes the system highly stochastic. This project introduces a novel computational approach to tame these wild, rugged fitness landscapes.
            </p>
            <p>
                By combining dilation functions with Fourier surrogate modeling and filtering, we effectively "squash and smooth" the optimization landscape, allowing metaheuristics to find global optima that would otherwise remain hidden in the noise.
            </p>
            <div class="repository-badges">
                <span style="background: #e91e63; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-chart-area"></i> Optimization
                </span>
                <span style="background: #3f51b5; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-wave-square"></i> Fourier Modeling
                </span>
                <span style="background: #ff9800; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-network-wired"></i> Systems Biology
                </span>
            </div>
        </div>
    </div>
</div>

## The Parameter Estimation Bottleneck

Finding an accurate parameterization to reproduce observed experimental behavior is critical for building predictive biochemical models. However, the Parameter Estimation (PE) problem is fraught with computational hurdles:

* **Stochastic Noise:** Random fluctuations in low-molecule-count systems mean that evaluating the exact same candidate parameterization can yield radically different fitness values.
* **Rugged & Multi-modal:** The fitness landscape is non-convex and non-separable, filled with local optima that cause standard optimization algorithms to converge prematurely.
* **Log-uniform Distributions:** Kinetic parameters naturally follow a log-uniform distribution, meaning the global optima tend to hide in the lowest orders of magnitude within the search space, making them incredibly difficult to locate.

---

## Torturing the Landscape

To simultaneously tackle all these issues, we developed a methodology to manipulate the fitness landscape itself before attempting to optimize it. 

1. **Dilation Functions:** We apply a dilation function to "squash" the search space, stretching out the lower orders of magnitude where the global optima are most likely to reside.
2. **Fourier Surrogate Modeling & Filtering:** To deal with the high-frequency noise introduced by stochastic simulations, we utilize a Fourier surrogate model. By applying a low-pass filter in the frequency domain, we smooth out the chaotic, high-frequency stochastic fluctuations, leaving behind a clean, navigable gradient.

This combination of spatial distortion and frequency filtering significantly simplifies low-dimensional PE instances, allowing optimization algorithms to efficiently lock onto the true parameters.

<div>
    <h3 class="mt-5">Project Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-compress-arrows-alt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Space Dilation</h5>
                <p class="small">Strategically distorts the parameter search space to expose hidden global optima in the lowest orders of magnitude.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-filter mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Fourier Filtering</h5>
                <p class="small">Builds a surrogate model in the frequency domain to filter out the high-frequency noise inherent in stochastic biochemical simulations.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-unlock-alt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Robust Optimization</h5>
                <p class="small">Transforms non-convex, multi-modal, and non-separable problems into smoothed landscapes that computational intelligence methods can easily solve.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=nobile2020fourier] --order descending --sort year %}
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