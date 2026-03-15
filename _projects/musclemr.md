---
layout: page
title: Muscle MR Characterization using Unsupervised Learning
description: Applying Self-Organizing Maps to radiomic data to automate the identification of fatty replacement and edema in STIM1 tubular aggregate myopathy.
img: assets/img/projects/MuscleMR-SOM.png
importance: 4
category: [bio-med, machine-learning, medical-imaging]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                Congenital myopathies are highly variable, making standardized diagnosis difficult. This project leverages <strong>unsupervised machine learning</strong> to identify patterns of muscular degeneration directly from Magnetic Resonance Imaging (MRI) data.
            </p>
            <p>
                Focusing on a family affected by Tubular Aggregates Myopathy (TAM) due to a STIM1 gene mutation, we extracted comprehensive radiomic features from T1-weighted and STIR MRI sequences. By utilizing <strong>Self-Organizing Maps (SOMs)</strong>, we successfully clustered muscles based on the presence of fatty replacement and edema, demonstrating that an unsupervised AI model can closely replicate expert radiological assessments and track disease progression over time.
            </p>
            <div class="repository-badges">
                <span style="background: #2196f3; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-brain"></i> Unsupervised Learning
                </span>
                <span style="background: #9c27b0; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-x-ray"></i> Radiomics
                </span>
                <span style="background: #009688; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-dna"></i> Rare Diseases
                </span>
            </div>
        </div>
    </div>
</div>

## The Clinical Challenge

Tubular Aggregates Myopathy (TAM) is a rare congenital condition clinically characterized by muscle weakness, myalgias, and cramps. Tracking the progression of the disease relies heavily on muscle MRI to detect two key pathophysiological changes:

* **Fatty Replacement:** Evaluated via T1-weighted images, representing the chronic stage of myopathy where muscle tissue is replaced by fibro-adipose tissue.
* **Muscle Edema:** Evaluated via STIR sequences, indicating acute phases of muscle involvement.

Standardizing these assessments is challenging due to the subjective nature of human radiological evaluation. To assist the diagnostic process, we turned to radiomics—converting standard medical images into minable, quantitative data.

---

## Unsupervised Learning Methodology

Instead of relying on heavily annotated training sets (which are difficult to obtain for rare genetic disorders), we utilized an unsupervised learning approach to see if the data naturally segregated into clinically relevant categories.

1. **Radiomic Feature Extraction:** Using 3DSlicer, we extracted 60 radiomic features (including first-order statistics, GLRLM, and GLCM) from 53 muscles per patient across two MRI assessments conducted 5 years apart ($t_0$ and $t_1$).
2. **Self-Organizing Maps (SOM):** We trained a Kohonen map using the MiniSom Python library. The SOM reduced the high-dimensional radiomic data into a lower-dimensional map, allowing us to group the muscles into clusters based on shared textural characteristics.
3. **Clustering & Validation:** The SOM's topological weights were grouped using agglomerative clustering. The resulting clusters were then compared against the established Mercuri staging and edema scores assigned by an expert radiologist.

### Key Findings

The SOM proved highly effective at discerning muscle states without prior human labeling. It successfully differentiated healthy muscles from those exhibiting pathological MRI alterations. Furthermore, longitudinal analysis between baseline and the 5-year follow-up allowed the SOM to independently identify disease progression, closely mirroring the clinical and radiological worsening observed in the patients.

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-cubes mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Radiomic Pipelines</h5>
                <p class="small">Transformed qualitative MRI scans into robust quantitative datasets using 3DSlicer for advanced texture analysis.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-project-diagram mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Self-Organizing Maps</h5>
                <p class="small">Implemented a Kohonen neural network to achieve unsupervised clustering of healthy, edematous, and fatty muscles.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-clock mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Longitudinal Tracking</h5>
                <p class="small">Successfully mapped the natural progression of STIM1 TAM over a 5-year period using purely data-driven methods.</p>
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
        {% bibliography --query @*[key=lupi2023muscle] --order descending --sort year %}
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