---
layout: page
title: Spatial Proteomics & MALDI-MSI
description: Advancing digital pathology and biomarker discovery through Matrix-Assisted Laser Desorption Ionization Mass Spectrometry Imaging (MALDI-MSI) and machine learning.
# img: assets/img/projects/MALDI-Proteomics.png
importance: 3
category: [bio-med]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>Spatial Proteomics</strong> combined with <strong>MALDI-MSI</strong> offers an unprecedented, label-free approach to mapping molecular distributions directly within intact tissue architectures.
            </p>
            <p>
                Our research leverages high-resolution mass spectrometry imaging to extract complex molecular fingerprints from tissue samples. By coupling these massive proteomic datasets with advanced <i>computational pathology and machine learning algorithms</i>, we identify novel biomarkers, distinguish challenging tumor histologies, and uncover the distinct pathogenic pathways driving disease progression.
            </p>
            <div class="repository-badges">
                <span style="background: #673ab7; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-dna"></i> Spatial Proteomics
                </span>
                <span style="background: #00bcd4; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-microscope"></i> MALDI-MSI
                </span>
                <span style="background: #ff9800; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-project-diagram"></i> Computational Pathology
                </span>
            </div>
        </div>
    </div>
</div>

## The Power of Mass Spectrometry Imaging

Traditional histology relies heavily on morphology, which can sometimes result in ambiguous diagnoses for borderline or highly heterogeneous lesions. MALDI-MSI bridges the gap between molecular biology and morphology by maintaining the spatial context of proteins, peptides, and metabolites. 

The core advantages of our approach include:
* **Untargeted Discovery**: Unlike immunohistochemistry, MALDI-MSI does not require a priori knowledge of the target. We can analyze hundreds of molecules simultaneously in a single tissue section.
* **Morphological Correlation**: Extracted mass spectra are directly mapped to specific regions of interest (ROIs) annotated by expert pathologists, linking pure molecular data to histological ground truth.
* **Diagnostic Precision**: By identifying unique spatial proteomic signatures, we can stratify tumor subtypes, assess mutational statuses (e.g., NRAS mutations), and minimize diagnostic uncertainty.

---

## Our Research Focus & Methodologies

Across multiple ongoing studies, our group develops and applies robust statistical and machine learning frameworks to handle the high dimensionality of MALDI-MSI data. 

* **Feature Selection & Classification**: We employ supervised and unsupervised machine learning models to sift through thousands of signals. This allows us to isolate the most impactful proteomic features responsible for disease classification.
* **Translational Biomarker Identification**: Once key spatial signals are isolated, we utilize nanoscale liquid chromatography electrospray ionization tandem mass spectrometry (nLC-ESI-MS/MS) to confidently identify the underlying proteins, translating raw signals into actionable biological insights.
* **Multi-Tissue Applications**: While we have extensively applied these pipelines to indeterminate thyroid neoplasms, our computational workflows are designed to be scalable and adaptable to a wide range of oncological and pathological challenges.

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-layer-group mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>High-Throughput MSI</h5>
                <p class="small">Utilizing state-of-the-art MALDI-TOF/TOF systems to extract spatially resolved molecular features directly from tissue microarrays and whole slides.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-chart-area mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>AI-Driven Discovery</h5>
                <p class="small">Applying dimensionality reduction and classification algorithms to decode complex molecular spectra into reliable diagnostic models.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-notes-medical mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Clinical Translation</h5>
                <p class="small">Bridging the gap between untargeted omics and digital pathology to provide reliable ancillary tools for personalized medicine.</p>
            </div>
        </div>
    </div>
</div>



<div class="mt-5 text-center">
    <a href="/contacts/" class="btn btn-theme">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=capitoli2025machine || key=coelho2026improving ||key=capitoli2025biomarker || key=piga2020molecular || key=capitoli2020analysis ||key=smith2019molecular || key=merelli2026spatial || key=piga2019feasibility || key=merelli2026spatial ||key=nobile2023unsupervised || key=capitoli2025well || key=pagni2024maldi || key=bindi2024spatial || key=denti2023segmenting || key=denti2021lipidomic] %}
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