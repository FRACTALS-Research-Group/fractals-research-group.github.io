---
layout: page
title: Simpful
description: A user-friendly and lightweight Python library for fuzzy logic reasoning.
img: assets/img/projects/simpful_logo.png
importance: 2
category: optimization
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>Simpful</strong> is a Python library for fuzzy logic reasoning designed to provide a simple and lightweight API, as close as possible to natural language. 
            </p>
            <p>
                It serves as a robust engine for both <strong>Mamdani</strong> and <strong>Sugeno</strong> inference, supporting complex rule parsing with AND, OR, and NOT operators, and arbitrarily shaped fuzzy sets.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/simpful" target="_blank"><img src="https://img.shields.io/github/stars/aresio/simpful?style=social" alt="GitHub stars"></a>
                <a href="https://pypi.org/project/simpful/" target="_blank"><img src="https://img.shields.io/pypi/v/simpful?color=blue" alt="PyPI version"></a>
                <img src="https://img.shields.io/badge/License-AFL--3.0-orange.svg" alt="License">
            </div>
        </div>
        <div class="col-md-4 text-center">
            <!-- <i class="fas fa-brain fa-8x" style="color: var(--global-theme-color); opacity: 0.2;"></i> -->
            <img src="{{ site.baseurl }}/assets/img/projects/simpful_logo.png" alt="Simpful Logo" class="img-fluid">
        </div>
    </div>
</div>

## Why Simpful?

Most fuzzy logic libraries are either overly academic or computationally heavy. Simpful was built to be **developer-centric**:
- **Intuitive Syntax**: Define rules as strings (e.g., `"IF (OXI IS low_flow) THEN (POWER IS LOW_POWER)"`).
- **Flexible Inference**: Supports any order of Sugeno reasoning and classic Mamdani controllers.
- **Advanced Tools**: Includes `AutoTriangle` for rapid prototyping and `approximate_fs_labels` for automated linguistic labeling.



## Quick Start

#### Mamdani Tipping System
Simpful makes defining a controller as easy as writing a paragraph.

```python
pip install simpful
from simpful import *

FS = FuzzySystem()

# Define linguistic variables quickly with AutoTriangle
TLV = AutoTriangle(3, terms=['poor', 'average', 'good'], universe_of_discourse=[0,10])
FS.add_linguistic_variable("service", TLV)
FS.add_linguistic_variable("quality", TLV)

# Define custom output variables
O1 = TriangleFuzzySet(0,0,13,   term="low")
O2 = TriangleFuzzySet(0,13,25,  term="medium")
O3 = TriangleFuzzySet(13,25,25, term="high")
FS.add_linguistic_variable("tip", LinguisticVariable([O1, O2, O3], universe_of_discourse=[0,25]))

# Natural language rules
FS.add_rules([
	"IF (quality IS poor) OR (service IS poor) THEN (tip IS low)",
	"IF (service IS average) THEN (tip IS medium)",
	"IF (quality IS good) OR (service IS good) THEN (tip IS high)"
	])

# Perform inference
FS.set_variable("quality", 6.5) 
FS.set_variable("service", 9.8) 
print(FS.inference())
```
<p class="mt-3">More examples and use cases are available in the <a href="https://github.com/aresio/simpful/tree/master/examples" target="_blank">Simpful GitHub repository</a>.</p>

<div>
    <h3 class="mt-5">Technical Highlights</h3>
    <div class="row mt-4">
    <div class="col-sm-6 mb-3">
    <div class="card p-3 h-100 shadow-sm">
    <h5><i class="fas fa-language"></i> Rule Parsing</h5>
    <p class="small">Parses any complex fuzzy rules involving nested logic (AND, OR, NOT) and linguistic hedges without manual coding of logic gates.</p>
    </div>
    </div>
    <div class="col-sm-6 mb-3">
    <div class="card p-3 h-100 shadow-sm">
    <h5><i class="fas fa-chart-area"></i> Custom Sets</h5>
    <p class="small">Native support for Triangular, Gaussian, Trapezoidal, and custom points-based fuzzy sets for high-precision modeling.</p>
    </div>
    </div>
    <div class="col-sm-6 mb-3">
    <div class="card p-3 h-100 shadow-sm">
    <h5><i class="fas fa-cogs"></i> Hybrid Inference</h5>
    <p class="small">Seamlessly switch between Mamdani and Sugeno (of any order) within the same environment to suit different regression or control needs.</p>
    </div>
    </div>
    <div class="col-sm-6 mb-3">
    <div class="card p-3 h-100 shadow-sm">
    <h5><i class="fas fa-file-pdf"></i> Automated Reporting</h5>
    <p class="small">Generate PDF reports automatically with membership function graphs and rule summaries via the <code>cluster_labeling</code> module.</p>
    </div>
    </div>
    </div>
</div>

<div class="mt-5 text-center">
<a href="https://github.com/aresio/simpful" class="btn btn-theme">View on GitHub</a>
<a href="https://simpful.readthedocs.io/" class="btn btn-outline-secondary ml-2">Read Full Documentation</a>
</div>

<div class="publications">
<h3 class="mt-5">Core Publication</h3>
<div class="publication-list">
{% bibliography --query @*[key=spolaor2020simpful] %}
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
transition: transform 0.2s ease;
}
.card:hover {
transform: translateY(-5px);
}
.card i {
color: var(--global-theme-color);
margin-right: 10px;
}
</style>