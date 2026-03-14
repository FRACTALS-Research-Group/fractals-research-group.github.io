---
layout: page
title: MedGA
description: A novel evolutionary method for image enhancement in medical imaging systems based on Genetic Algorithms.
img: assets/img/projects/MedGA.png
importance: 5
category: [bio-med, optimization]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>MedGA</strong> is an intelligent medical image enhancement method that leverages the global optimization capabilities of <strong>Genetic Algorithms (GAs)</strong> to improve the visual quality and interpretability of clinical scans.
            </p>
            <p>
                Specifically tailored for images characterized by nearly bimodal gray level histograms (e.g., contrasting a lesion against healthy tissue), MedGA uses a specialized fitness function to strengthen the two underlying intensity distributions. This approach not only assists physicians in visual diagnosis but also significantly improves the performance of downstream automated processing tasks, such as threshold-based segmentation.
            </p>
            <div class="repository-badges">
                <span style="background: #ffc107; color: black; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-dna"></i> Evolutionary Computation
                </span>
                <span style="background: #2196f3; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-adjust"></i> Image Enhancement
                </span>
            </div>
        </div>
        <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/MedGA.png" alt="MedGA Concept" class="img-fluid" style="border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        </div>
    </div>
</div>

## The Challenge: Bimodal Intensity Overlap

Many clinical scenarios, such as Contrast-Enhanced MRI analysis for oncology, rely on distinguishing between two primary tissue classes (e.g., foreground lesion vs. background tissue). These images ideally have a bimodal histogram, but noise, artifacts, and partial volume effects often cause these distributions to overlap.

Traditional enhancement techniques (like histogram equalization) attempt to improve contrast globally but often fail to resolve these overlapping intensities, sometimes even impairing the structural information necessary for accurate diagnosis or automated binarization.

## The MedGA Solution

MedGA tackles this as a global optimization problem. It uses a Genetic Algorithm to discover the optimal gray level mapping that adaptively enhances a specific input image.

* **Targeted Enhancement**: Explicitly focuses on strengthening the sub-distributions of bimodal images.
* **Optimal Pre-processing**: Acts as an intelligent pre-processing step to facilitate efficient threshold-based image segmentation.
* **Interpretable Model**: Unlike "black-box" ML methods, MedGA’s results are interpretable as the resulting gray level histogram is easily readable and understandable by the end-user (radiologist).

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-star mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Superior Performance</h5>
                <p class="small">Considerably outperforms conventional state-of-the-art techniques (histogram equalization, Gamma, sigmoid transforms) in signal and perceived quality metrics.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-sun mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Brightness Preservation</h5>
                <p class="small">Effectively enhances contrast and details while strictly preserving the input image's mean brightness.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-user-md mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Clinical Case Study</h5>
                <p class="small">Validated on Contrast-Enhanced MRI data from patients undergoing MRgFUS therapy for uterine fibroids.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <!-- <a href="https://doi.org/10.1016/j.eswa.2018.11.013" class="btn btn-theme">View Publication</a> -->
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=rundo2019medga || key=rundo2019novel] --order descending --sort year %}
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