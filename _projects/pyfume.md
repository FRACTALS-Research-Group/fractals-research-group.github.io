---
layout: page
title: pyFUME
description: A Python package for automatic Fuzzy Model Estimation from data.
img: assets/img/projects/pyfume.png
importance: 1
category: interpretable-ai
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>pyFUME</strong> is a comprehensive Python library designed to automate the estimation of 
                Takagi-Sugeno fuzzy models directly from data. By integrating seamless model building with the 
                Simpful library, it enables 
                researchers to transform raw datasets into interpretable, executable fuzzy systems.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/CaroFuchs/pyFUME" target="_blank"><img src="https://img.shields.io/github/stars/CaroFuchs/pyFUME?style=social" alt="GitHub stars"></a>
                <a href="https://pypi.org/project/pyfume/" target="_blank"><img src="https://img.shields.io/pypi/v/pyfume?color=blue" alt="PyPI version"></a>
                <img src="https://img.shields.io/badge/License-GPL--3.0-green.svg" alt="License">
            </div>
        </div>
        <div class="col-md-4 text-center">
            <!-- <i class="fas fa-microchip fa-8x" style="color: var(--global-theme-color); opacity: 0.2;"></i> -->
            <img src="{{ site.baseurl }}/assets/img/projects/pyfume.png" alt="pyFUME Logo" class="img-fluid">
        </div>
    </div>
</div>

## Key Features

- **Automated Estimation**: Determine antecedent sets and consequent parameters of Takagi-Sugeno models.
- **Feature Selection**: Built-in support for advanced wrappers like `fst-pso` (Particle Swarm Optimization).
- **Interpretability**: Bridges the gap between raw data and human-understandable fuzzy rules.
- **Simpful Integration**: Automatically generates executable Python code for fuzzy inference.
- **Performance Evaluation**: Facilities for error calculation (MAE, MSE) and visualization.



## Quick Start

Getting started with `pyFUME` is as simple as:

```bash
pip install pyfume
from pyfume import pyFUME

# Generate the Takagi-Sugeno Fuzzy Inference System (FIS)
# using 3 clusters and PSO-based feature selection
FIS = pyFUME(datapath='./data.csv', nr_clus=3, feature_selection='fst-pso')

# Evaluate accuracy
MAE = FIS.calculate_error(method="MAE")
print(f"Model Error: {MAE}")

# Use the model for prediction
model = FIS.get_model()
model.set_variable('Cement', 300.0)
print(model.Sugeno_inference(['OUTPUT']))
```

<div class="row mt-4">
    <div class="col-sm-4">
    <div class="card p-3 text-center h-100">
    <i class="fas fa-project-diagram mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
    <h5>Clustering</h5>
    <p class="small">Uses Fuzzy C-Means (FCM) to identify data structures in input-output space.</p>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card p-3 text-center h-100">
    <i class="fas fa-sliders-h mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
    <h5>Estimation</h5>
    <p class="small">Automatically determines membership function shapes (Gaussian/Triangular).</p>
    </div>
    </div>
    <div class="col-sm-4">
    <div class="card p-3 text-center h-100">
    <i class="fas fa-code-branch mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
    <h5>Synthesis</h5>
    <p class="small">Generates 'Simpful_code.py' for immediate deployment in production.</p>
    </div>
    </div>
</div>
<div class="publications">
  <h3 class="mt-5">Related Publications</h3>
  <div class="publication-list">
    {% bibliography --query @*[key=fuchs2020pyfume || key=bacciu2024our || key=papetti2023estimation] --order descending --sort year %}
  </div>
</div>

<div class="mt-5 text-center">
<a href="https://github.com/CaroFuchs/pyFUME" class="btn btn-theme">View on GitHub</a>
<a href="https://pyfume.readthedocs.io/" class="btn btn-outline-secondary ml-2">Full Documentation</a>
</div>

<style>
.repository-badges img { margin-right: 5px; }
.btn-theme {
background-color: var(--global-theme-color);
color: white !important;
border-radius: 50px;
padding: 10px 30px;
font-weight: bold;
}
.card {
border: 1px solid var(--global-divider-color);
background: var(--global-card-bg-color);
border-radius: 12px;
}
</style>