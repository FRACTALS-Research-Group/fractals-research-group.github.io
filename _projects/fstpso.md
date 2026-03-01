---
layout: page
title: FST-PSO
description: Fuzzy Self-Tuning Particle Swarm Optimization - A settings-free global optimization method.
img: assets/img/projects/fst-pso.png
importance: 2
category: [optimization]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>FST-PSO</strong> (Fuzzy Self-Tuning Particle Swarm Optimization) is a swarm intelligence global optimization method based on Particle Swarm Optimization, designed for the optimization of real- or discrete-valued multi-dimensional minimization problems.
            </p>
            <p>
                FST-PSO is a <strong>settings-free</strong> version of PSO which exploits <strong>fuzzy logic</strong> to dynamically assign functioning parameters to each particle in the swarm. Specifically, during each generation, FST-PSO determines the optimal choice for the cognitive factor, the social factor, the inertia value, and velocity boundaries.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/fst-pso" target="_blank"><img src="https://img.shields.io/github/stars/aresio/fst-pso?style=social" alt="GitHub stars"></a>
                <a href="https://pypi.org/project/fst-pso/" target="_blank"><img src="https://img.shields.io/pypi/v/fst-pso?color=blue" alt="PyPI version"></a>
                <img src="https://img.shields.io/badge/License-LGPL--3.0-blue.svg" alt="License">
            </div>
        </div>
        <div class="col-md-4 text-center">
            <!-- <i class="fas fa-project-diagram fa-8x" style="color: var(--global-theme-color); opacity: 0.2;"></i> -->
            <img src="{{ site.baseurl }}/assets/img/projects/fst-pso.png" alt="FST-PSO Logo" class="img-fluid">
        </div>
    </div>
</div>

## Key Features

- **Settings-Free**: Uses fuzzy logic to determine optimal functioning parameters and heuristics to choose swarm size, removing the need for user-defined settings.
- **Dynamic Tuning**: Adjusts particle behavior in real-time based on the evolution of the swarm.
- **Hybrid Support**: Optimized for both continuous and discrete optimization landscapes, returning probability distributions for discrete problems.
- **FFT-PSO Variant**: Includes Fuzzy Time Travel PSO for backtracking and escaping local minima.



## Quick Start

#### 1. Basic FST-PSO Minimization
To use FST-PSO, the programmer must implement a custom fitness function and specify the boundaries of the search space for each dimension.

```python
pip install fst-pso
from fstpso import FuzzyPSO 

# Define the custom fitness function
def example_fitness(particle):
    return sum(map(lambda x: x**2, particle))
    
if __name__ == '__main__':
    dims = 10
    FP = FuzzyPSO()
    # Set search space for each dimension
    FP.set_search_space([[-10, 10]]*dims)   
    FP.set_fitness(example_fitness)
    # Solve
    result = FP.solve_with_fstpso()
    print("Best solution:", result[0])
    print("Fitness:", result[1])
```

#### 2. Fuzzy Time Travel PSO (FFT-PSO)
Fuzzy Time Travel PSO (FFT-PSO) is a variant that prevents premature convergence by backtracking to the beginning of an optimization and removing the particle responsible for a stalling condition.

```python
from fstpso import FFTPSO   

def example_fitness(particle):
    return sum(map(lambda x: x**2, particle))
    
if __name__ == '__main__':
    dims = 10
    FP = FFTPSO()
    FP.set_search_space([[-10, 10]]*dims)   
    FP.set_fitness(example_fitness)
    # Solve with 'alpha' parameter (int for iterations, float for percentage)
    # to specify when to rewind the swarm and re-initialize the stalling particle.
    result = FP.solve_with_fstpso(max_iter=200)
    print("Best solution:", result[0])
    print("Fitness:", result[1])
```
<div>
    <h3 class="mt-5">Technical Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-brain mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Fuzzy Self-Tuning</h5>
                <p class="small">Uses fuzzy logic to dynamically adjust cognitive/social factors and inertia for each particle.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-balance-scale mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Settings-Free</h5>
                <p class="small">Automates swarm size selection and parameter tuning based on problem dimensionality.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-history mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Time Travel (FFT)</h5>
                <p class="small">Backtracks to initial states to prevent premature convergence and escape local minima.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
<a href="https://github.com/aresio/fst-pso" class="btn btn-theme">View GitHub Repo</a>
<a href="https://www.google.com/search?q=https://fst-pso.readthedocs.io/" class="btn btn-outline-secondary ml-2">Read the Docs</a>
</div>

<div class="publications">
<h3 class="mt-5">Key Publications</h3>
<div class="publication-list">
{% bibliography --query @*[key=nobile2018fuzzy || key=cazzaniga2015impact || key=nobile2020fuzzy || key=grazioso2025survey || key=papetti2025we] --order descending --sort year %}
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