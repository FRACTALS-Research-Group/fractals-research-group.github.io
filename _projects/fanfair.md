---
layout: page
title: FanFAIR
description: Semi-automatic assessment of dataset fairness using fuzzy logic.
img: assets/img/projects/fanfair.png
importance: 4
category: interpretable-ai
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>FanFAIR</strong> is a rule-based approach leveraging <strong>fuzzy logic</strong> to calculate fairness metrics over a dataset and combine them into a single, comprehensive score.
            </p>
            <p>
                It enables a semi-automatic evaluation of datasets, bridging the gap between raw data and interpretable fairness metrics in algorithmic fairness research.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/FanFAIR" target="_blank"><img src="https://img.shields.io/github/stars/aresio/FanFAIR?style=social" alt="GitHub stars"></a>
                <a href="https://pypi.org/project/fanfair/" target="_blank"><img src="https://img.shields.io/pypi/v/fanfair?color=blue" alt="PyPI version"></a>
                <img src="https://img.shields.io/badge/License-AFL--3.0-orange.svg" alt="License">
            </div>
        </div>
        <div class="col-md-4 text-center">
            <!-- <i class="fas fa-balance-scale fa-8x" style="color: var(--global-theme-color); opacity: 0.2;"></i> -->
            <img src="{{ site.baseurl }}/assets/img/projects/fanfair.png" alt="FanFAIR Logo" class="img-fluid">
        </div>
    </div>
</div>

## Key Features
- **Fuzzy Metric Fusion**: Combines disparate fairness metrics into a single, comprehensive fairness score.
- **Semi-Automatic Analysis**: Leverages automation for data analysis while allowing for expert qualitative input (<i> e.g.</i>, legal compliance).
- **Interpretable Results**: Provides visualization of linguistic variables to explain how the overall score is reached.
- **Automated Reporting**: Generates graphical reports, including gauge charts for overall fairness.


## Quick Start

FanFAIR is designed to be as automatic as possible. However, the system allows for human intervention to define qualitative aspects like data protection laws and general data quality.

```python
pip install fanfair
from fanfair import FanFAIR

# Initialize FanFAIR with dataset and output column
FF = FanFAIR(dataset="myfile.csv", output_column="output")

# Set qualitative metrics requiring human intervention
FF.set_compliance( {"data_protection_law": True,
                    "copyright_law": True,
                    "medical_law": True,
                    "non_discrimination_law": False,
                    "ethics": False})

# Set quantitative data quality score (0.0 to 1.0)
FF.set_quality(0.9)

# Automatically perform analysis and generate report
FF.produce_report()
```
## Technical Highlights

<div class="row mt-4 mb-5">
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-brain mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Fuzzy Metric Fusion</h5>
            <p class="small">Combines multiple disparate fairness metrics into a single, interpretable overall score using fuzzy logic rules.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-user-edit mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Human-in-the-Loop</h5>
            <p class="small">Integrates critical qualitative metrics like legal compliance and ethical assessments via expert input.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-chart-pie mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Automated Reporting</h5>
            <p class="small">Generates comprehensive reports, including gauge charts and linguistic variable plots for analysis.</p>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
<a href="https://github.com/aresio/FanFAIR" class="btn btn-theme">View on GitHub</a>
<!-- <a href="https://www.google.com/search?q=https://fanfair.readthedocs.io/" class="btn btn-outline-secondary ml-2">Read Full Documentation</a> -->
</div>

<div class="publications">
<h3 class="mt-5">Key Publication</h3>
<div class="publication-list">
{% bibliography --query @*[key=gallese2023investigating || key=rispoli2025investigating || key=gallese2025fanfair] %}
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