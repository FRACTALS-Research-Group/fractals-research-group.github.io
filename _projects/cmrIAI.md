---
layout: page
title: Assessing Cardiac Functionality via Interpretable AI
description: A fully interpretable, rule-based machine learning model using myocardial strain data to accurately estimate Left Ventricular Ejection Fraction (LVEF).
img: assets/img/projects/CardiacInterpretable.png
importance: 4
category: [bio-med, interpretable-ai]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>Cardiac Imaging</strong> is a powerful methodology for assessing heart health, but translating raw imaging data into actionable clinical insights requires robust—and transparent—predictive models.
            </p>
            <p>
                The most important metric for evaluating heart function is the Left Ventricular Ejection Fraction (LVEF), which measures the percentage of oxygen-rich blood pumped out of the left ventricle with each heartbeat (typically 55% to 70% in a healthy individual). By tracking the movement and deformation of the myocardium during the cardiac cycle (Myocardial Strain) via Cardiac Magnetic Resonance, we developed a predictive machine learning model to estimate LVEF. 
            </p>
            <p>
                Crucially, to ensure clinical trust and applicability, we moved away from "black-box" neural networks. Instead, we engineered a <strong>fully interpretable model</strong> based on a rule-based Fuzzy Inference System, coupled with a novel methodology (RuDe) to disambiguate the rules, providing physicians with clear, readable insights into how strain features affect cardiac functionality.
            </p>
            <div class="repository-badges">
                <span style="background: #e91e63; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-brain"></i> Interpretable AI 
                </span>
                <span style="background: #00bcd4; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-heartbeat"></i> Cardiac Imaging
                </span>
                <span style="background: #ff9800; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-project-diagram"></i> Fuzzy Logic
                </span>
            </div>
        </div>
    </div>
</div>

## Methodological Approach

Estimating LVEF accurately is critical, but understanding *why* a model predicts a certain value is just as important for medical professionals. Our approach tackles this by bridging high-accuracy machine learning with human-readable logic:

* **Myocardial Strain Analysis:** We utilize high-fidelity strain data, which captures the mechanical deformation of the heart muscle, offering deeper insights than simple volumetric measurements.
* **Fuzzy Inference Systems (FIS):** Instead of hidden layers, the model's core relies on fuzzy logic rules that map directly to human reasoning (e.g., "IF strain is X AND volume is Y, THEN LVEF is Z").
* **Rule Disambiguation (RuDe):** To prevent overlapping or contradictory rules from confusing the output, we introduced a novel disambiguation methodology that streamlines the rule base, ensuring the model remains strictly interpretable without sacrificing predictive power.

---

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-search-plus mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Transparent AI</h5>
                <p class="small">Replaces opaque algorithms with a transparent Fuzzy Inference System, allowing clinicians to trace exact decision pathways.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-heart mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Strain-Based LVEF</h5>
                <p class="small">Accurately predicts Left Ventricular Ejection Fraction purely from the physical deformation metrics of the myocardium.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-filter mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>RuDe Methodology</h5>
                <p class="small">Introduces a novel approach to automatically clean and disambiguate logical rules, improving both model accuracy and readability.</p>
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
        {% bibliography --query @*[key=nobile2025assessing] --order descending --sort year %}
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