---
layout: page
title: MiThyCA
description: Microscopic foci of papillary Thyroid Carcinoma-like nuclear features identification with AI in Whole-Slide Images.
img: assets/img/projects/MiThyCA.png
importance: 3
category: [bio-med]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>MiThyCA</strong> is an advanced computational pathology pipeline designed to assist pathologists in the rapid and automated detection of subcentimeter <strong>Papillary Thyroid Carcinoma (PTC)</strong> foci within Whole-Slide Images (WSIs).
            </p>
            <p>
                By utilizing a tandem deep-learning architecture, MiThyCA identifies neoplastic areas and detects "sprinkling" areas—tiny, abrupt nuclear alterations that are often time-consuming to find manually. This tool significantly reduces turnaround times, processing a full slide in as little as <strong>11 seconds</strong>.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/MonzaComputationalMedicine/MiThyCA" target="_blank"><img src="https://img.shields.io/github/stars/MonzaComputationalMedicine/MiThyCA?style=social" alt="GitHub stars"></a>
            </div>
            <div class="mt-4">
                <span style="background: #e91e63; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-microscope"></i> Computational Pathology
                </span>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/MiThyCA.png" alt="MiThyCA Pipeline" class="img-fluid" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        </div>
    </div>
</div>

## Tandem AI Architecture

MiThyCA employs a sequential "two-step" approach to maximize both sensitivity and computational efficiency:

1.  **Model 1 (Neoplasm Finder)**: A **Convolutional Neural Network (CNN)** that screens the entire WSI to identify neoplastic or abnormal tissue regions.
2.  **Model 2 (PTC-like Feature Detector)**: A **Vision Transformer (TinyViT)** that performs a high-resolution analysis only on the areas identified by Model 1, specifically searching for PTC-like nuclear features (e.g., nuclear clearing, grooves, and pseudoinclusions).



## Key Results & Performance

The pipeline was validated on a multi-institutional cohort, demonstrating high reliability across various thyroid lesions including NIFTP, PTC, and metastatic lymph nodes.
* **Clinical Value**: Effectively detects the "sprinkling sign" in NIFTP and identifies metastatic micro-foci in lymph nodes that might be overlooked during routine manual screening.

<div>
    <h3 class="mt-5">Technical Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-layer-group mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Tandem Strategy</h5>
                <p class="small">Combines the efficiency of CNNs with the high-context attention of Vision Transformers (ViT).</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-laptop-code mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Hardware Agnostic</h5>
                <p class="small">Optimized to run on standard hospital workstations even without high-end dedicated GPUs.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-search-plus mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Explainable Heatmaps</h5>
                <p class="small">Integrated with QuPath to provide visual heatmaps, keeping the pathologist "in-the-loop."</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/MonzaComputationalMedicine/MiThyCA" class="btn btn-theme">View GitHub Repo</a>
    <a href="/contact/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publications</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=bacciu2025mithyca] --order descending --sort year %}
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
}
.card {
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    border-radius: 12px;
}
</style>