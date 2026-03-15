---
layout: page
title: NUTSHELL
description: A deep learning model for the multiclass segmentation of nuclei to differentiate follicular thyroid lesions and streamline digital pathology workflows.
# img: assets/img/projects/NUTSHELL.png
importance: 4
category: [bio-med]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>NUTSHELL</strong> (NUclei from Thyroid tumors Segmentation to Highlight Encapsulated Low-malignant Lesions) is an AI-powered digital pathology tool designed to unmask key nuclear characteristics and reduce diagnostic variability in borderline thyroid cases.
            </p>
            <p>
                The diagnostic assessment of thyroid nodules is frequently complicated by the morphological overlap between noninvasive follicular tumors with papillary-like nuclear features (NIFTP), aggressive papillary thyroid carcinomas (PTC), and benign hyperplastic nodules (HP). NUTSHELL leverages a Convolutional Neural Network (CNN) to perform pixel-based multiclass segmentation of whole-slide images (WSIs), readily highlighting microfoci of carcinoma or distinct NIFTP areas within extensive glandular samples.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/Vsc0/nutshell" target="_blank"><img src="https://img.shields.io/github/stars/Vsc0/nutshell?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/License-AFL--3.0-blue.svg" alt="License">
            </div>
            <br/>
            <div class="repository-badges">
                <span style="background: #e91e63; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-brain"></i> Deep Learning
                </span>
                <span style="background: #4caf50; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-microscope"></i> WSInfer / QuPath
                </span>
                <span style="background: #2196f3; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-stethoscope"></i> Computational Pathology
                </span>
            </div>
        </div>
    </div>
</div>

## Uncovering Human-Interpretable Features

Before training the deep learning model, we wanted to ensure the morphometric differences driving the classification could be understood by pathologists. By analyzing over 1 million extracted nuclei using machine learning (Random Forest and Decision Trees), we identified **15 distinct morphometric features** related to nuclear shape, clarification, and texture. 

These features translated into clinically understandable alterations:
* **Hyperplastic Nodules (HP):** Displayed remarkable internuclear homogeneity and regular, finely granular chromatin.
* **NIFTP:** Nuclei were generally larger, rounder, and less elongated than PTC, showing higher chromatin texture complexity and significant brightness variation.
* **PTC:** Exhibited distinct internuclear texture variability, setting it apart from the more homogeneous benign lesions.

---

## The CNN Model & Clinical Integration

The NUTSHELL model was trained on tiled Whole-Slide Images to perform precise, pixel-level multiclass segmentation. 

* **High Performance:** The CNN successfully detected and classified the majority of nuclei across all WSI tiles.
* **Pathologist Agreement:** When WSI-level predictions were compared with established nuclear scores assigned by expert thyroid pathologists, NUTSHELL demonstrated strong agreement.
* **Democratizing AI:** To ensure the tool can actually be used in routine practice, NUTSHELL was packaged to run inside **WSInfer**, allowing for easy, click-and-play rendering and attention-map generation directly within the open-source **QuPath** software.

<div>
    <h3 class="mt-5">Project Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-shapes mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Morphometric Analysis</h5>
                <p class="small">Extracted and validated 15 human-interpretable nuclear features distinguishing NIFTP, PTC, and HP.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-layer-group mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Multiclass Segmentation</h5>
                <p class="small">A highly accurate CNN pipeline utilizing data augmentation, tiling, and pixel-based prediction.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-laptop-medical mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Clinical Accessibility</h5>
                <p class="small">Fully integrated with QuPath via WSInfer to provide an immediate visual overview of NIFTP and PTC microfoci.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/Vsc0/nutshell" target="_blank" class="btn btn-theme">View GitHub Repo</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=l2024machine] --order descending --sort year %}
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