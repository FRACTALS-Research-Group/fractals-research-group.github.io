---
layout: page
title: USE-Net
description: Incorporating Squeeze-and-Excitation blocks into U-Net for multi-institutional prostate zonal segmentation.
img: assets/img/projects/USE-Net.png
importance: 4
category: [bio-med]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>USE-Net</strong> is a novel Deep Learning architecture that enhances the classic U-Net by incorporating <strong>Squeeze-and-Excitation (SE)</strong> blocks to tackle the challenges of multi-institutional medical imaging.
            </p>
            <p>
                The project focuses on the precise <strong>zonal segmentation of the prostate</strong>—differentiating between the Central Gland (CG) and the Peripheral Zone (PZ). By using <i>adaptive feature recalibration</i>, USE-Net effectively handles the heterogeneous characteristics of MRI datasets collected across different clinical institutions, achieving superior generalization.
            </p>
            <div class="repository-badges">
                <span style="background: #673ab7; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-brain"></i> Feature Recalibration
                </span>
                <span style="background: #00bcd4; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-hospital"></i> Multi-Institutional
                </span>
            </div>
        </div>
        <!-- <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/USE-Net.png" alt="USE-Net Architecture" class="img-fluid" style="border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        </div> -->
    </div>
</div>

## Beyond Whole Gland Segmentation

While many tools focus on the whole prostate, USE-Net addresses the **zonal compartment system** (Central Gland vs. Peripheral Zone). This is clinically vital because:
- **PCa Localization**: Roughly 70% of prostate cancers originate in the Peripheral Zone.
- **Diagnostic Refinement**: Zonal volume ratios are key indicators for monitoring hyperplasia and refining biopsies.
- **Heterogeneity**: MRI appearance varies wildly between scanners and institutions; USE-Net uses channel-wise relationships to normalize these differences.

## Key Architectures

We proposed two main variants of the network:
* **Enc USE-Net**: SE blocks are integrated only within the Encoder path. This variant shows excellent overall generalization across various training conditions.
* **Enc-Dec USE-Net**: SE blocks are integrated into both Encoder and Decoder blocks. This model remarkably outperforms state-of-the-art methods when trained on multi-institutional datasets simultaneously.

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-adjust mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Adaptive Mechanisms</h5>
                <p class="small">Leverages Squeeze-and-Excitation to recalibrate feature maps, focusing on the most relevant anatomical signals.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-globe-americas mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Cross-Dataset Generalization</h5>
                <p class="small">The first study to evaluate prostate zonal segmentation across multiple institutional datasets (T2w MRI).</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-vials mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Benchmarked Performance</h5>
                <p class="small">Outperforms U-Net, pix2pix, and Mixed-Scale Dense Networks in complex multi-dataset scenarios.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <!-- <a href="https://doi.org/10.1016/j.neucom.2019.07.006" class="btn btn-theme">View Publication</a> -->
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=rundo2019use] --order descending --sort year %}
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