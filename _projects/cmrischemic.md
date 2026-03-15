---
layout: page
title: Automated Cardiac MR Ischemic Scar Assessment
description: A deep learning-based system for the accurate, time-efficient segmentation and clinical reporting of left ventricular myocardial infarction scar.
img: assets/img/projects/CardiacMR-Scar.png
importance: 4
category: [bio-med]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                Assessing myocardial infarction scar (MIS) through Cardiovascular Magnetic Resonance (CMR) provides critical prognostic information and guides clinical management. However, manual MIS segmentation is highly time-consuming and prone to reproducibility issues.
            </p>
            <p>
                To address this bottleneck, we developed a <strong>deep learning-based computational workflow</strong> that automates the segmentation of the left ventricle (LV) and MIS. For the first time, this model was trained and deployed on state-of-the-art <strong>Dark Blood Late Gadolinium Enhancement (DB-LGE)</strong> images. The system not only performs highly accurate segmentations but also automatically generates a quantitative clinical report calculating MIS extent and transmurality.
            </p>
            <div class="repository-badges">
                <span style="background: #e91e63; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-heartbeat"></i> Cardiology
                </span>
                <span style="background: #3f51b5; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-layer-group"></i> U-Net CNN
                </span>
                <span style="background: #ff9800; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-stopwatch"></i> Clinical Automation
                </span>
            </div>
        </div>
    </div>
</div>

## The Clinical Challenge

The presence, location, and extent of MIS correlate strongly with arrhythmia risk and the likelihood of functional recovery following revascularization. While CMR LGE imaging is the gold standard for detecting these scars, clinical adoption is limited by the lack of an optimal, standardized quantification method.

* **Manual contouring:** Lacks reproducibility and is operator-dependent.
* **Semi-automated techniques:** (e.g., n-Standard Deviation thresholds) improve reproducibility but still require significant manual intervention and take an average of 7±3 minutes per patient.
* **Previous AI attempts:** Mostly relied on conventional Bright Blood (BB) LGE images, where low contrast between the blood pool and the scar complicates the identification of thin, subendocardial scars.

---

## A Novel Deep Learning Approach

Our solution utilizes state-of-the-art **Dark Blood (DB) LGE** sequences, which suppress the signal from the blood pool to maximize contrast and sensitivity for detecting subendocardial MIS.

We designed a sequential pipeline utilizing two Convolutional Neural Networks (CNNs) based on the U-Net architecture:
1.  **Left Ventricle Segmentation:** The first model accurately delineates the LV endocardial and epicardial borders.
2.  **MIS Segmentation:** The second model isolates the specific regions of myocardial infarction scar within the identified LV myocardium.

### Performance & Clinical Impact

The system was trained and validated on a robust, bi-centric dataset comprising 1,355 DB-LGE short-axis images from 144 patients.

* **High Accuracy:** The models achieved strong performance metrics.
* **Time Efficiency:** Compared to the semi-automated 4-Standard Deviation technique, our deep learning system was **five times faster** (completing the analysis in under 1 minute) and required minimal user interaction.
* **Automated Reporting:** The workflow automatically computes clinically vital metrics—MIS extent (relative infarcted mass) and transmurality—and formats them into a ready-to-use clinical report.

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-adjust mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Dark Blood LGE</h5>
                <p class="small">Pioneering the use of deep learning on DB-LGE sequences to maximize contrast and detect thin subendocardial scars.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-tachometer-alt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>5x Faster Workflow</h5>
                <p class="small">Reduces image processing and segmentation time from ~7 minutes to under 1 minute per patient.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-file-medical-alt mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Automated Reporting</h5>
                <p class="small">Calculates transmurality and relative infarcted mass, directly generating a quantitative clinical report.</p>
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
        {% bibliography --query @*[key=papetti2023accurate] --order descending --sort year %}
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