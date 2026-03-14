---
layout: page
title: THAITI
description: TrustwortHy Artificial Intelligence for Inversion Time - Patented AI for Cardiac MRI optimization
img: assets/img/projects/THAITI.png
importance: 1
category: [bio-med]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>THAITI</strong> is a patented AI-based methodology (IT102022000017907) designed for the <strong>automatic estimation of Inversion Time (TI)</strong> in Cardiac Magnetic Resonance (CMR).
            </p>
            <p>
                In CMR with late-gadolinium enhancement, selecting the correct TI is critical: it ensures that healthy myocardium appears black, providing the <strong>maximum contrast</strong> against scar tissue. THAITI replaces manual, error-prone estimation with a precision-medicine approach, reducing costs and preventing the need for repeated exams.
            </p>
            <div class="repository-badges">
                <a href="/patents/" style="text-decoration: none;">
                    <span style="background: #e91e63; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                        <i class="fas fa-certificate"></i> Patented Technology
                    </span>
                </a>
                <span style="background: #2196f3; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-trophy"></i> Shark Tank Award Winner
                </span>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/thaiti.png" alt="THAITI Logo" class="img-fluid" style="max-height: 200px; border-radius: 15px;">
        </div>
    </div>
</div>

## The Challenge: Precision in CMR

Inversion Time is the interval between two RF pulses that directly influences image contrast. 
- **The Problem**: Usually manually estimated or requiring multiple "scout" acquisitions, leading to wasted time and inconsistent image quality.
- **The Risk**: Poor TI selection results in non-diagnostic images, potentially leading to inaccurate diagnoses or expensive re-scans.
- **The Solution**: THAITI leverages a model trained to estimate the **optimal patient-specific TI interval**, enabling true precision medicine in the radiology suite.

## International Recognition

THAITI has been recognized by both the medical and technical communities for its high **Technology Readiness Level (TRL)** and translational value:
* **Best Abstract Award**: Italian Society of Cardiology (SIC).
* **"Shark Tank" Award**: Global CMR 2024 Conference (London, UK).

<div>
    <h3 class="mt-5">Project Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-microscope mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Translational AI</h5>
                <p class="small">Developed by a multidisciplinary team from <i>Istituto Auxologico Italiano</i>, <i>UNIMIB</i>, and <i>Ca’ Foscari</i>.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-bolt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Workflow Efficiency</h5>
                <p class="small">Eliminates the need for manual TI scouting, saving valuable scanner time and resources.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-chart-line mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Market Ready</h5>
                <p class="small">International PCT application filed. Currently looking for investors to bring THAITI to the clinical market. See our <a href="/patents/">patent details</a>.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
<a href="mailto:marco.nobile@unive.it?subject=Inquiry: THAITI Project" class="btn btn-theme">Contact for Partnerships</a>
<!-- <a href="/publications/" class="btn btn-outline-secondary ml-2">Related Research</a> -->
</div>

<div class="publications">
<h3 class="mt-5">Core Publication</h3>
<div class="publication-list">
{% bibliography --query @*[key=torlasco2022506 || key=torlasco2023use] --order descending --sort year %}
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