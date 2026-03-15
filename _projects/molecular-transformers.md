---
layout: page
title: Drug Metabolism Prediction with Molecular Transformers
description: Optimizing deep learning architectures for accurate and efficient prediction of drug metabolism using SMILES-based sequence-to-sequence models.
img: assets/img/projects/drugmeta.png
importance: 1
category: [therapeutics]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>Drug Metabolism Prediction with Molecular Transformers</strong> introduces an optimized sequence-to-sequence architecture designed to predict drug metabolism with high accuracy and low computational overhead.
            </p>
            <p>
                By framing xenobiotic biotransformations as a machine translation task using <strong>SMILES</strong> strings, this project integrates pre-training, transfer learning, and selective fine-tuning to overcome the traditional limitations of rule-based models and standard Transformers.
            </p>
            <!-- <div class="repository-badges">
                <img src="https://img.shields.io/badge/Domain-Drug%20Discovery-0d47a1.svg" alt="Drug Discovery">
                <img src="https://img.shields.io/badge/Framework-TensorFlow-ff6f00.svg?logo=tensorflow" alt="TensorFlow">
            </div> -->
            <div class="repository-badges">
                <span style="background: #ffc107; color: black; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-pills"></i> Drug Discovery
                </span>
                <span style="background: #2196f3; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-language"></i> Sequence-to-Sequence
                </span>
                <span style="background: #4caf50; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-stopwatch"></i> Optimized Efficiency
                </span>
            </div>
        </div>
        <!-- <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/drugmeta.png" alt="Drug Metabolism Prediction Concept" class="img-fluid" style="border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        </div> -->
    </div>
</div>

## The Challenge of Metabolism Prediction

Metabolism dictates the efficacy and toxicity of potential drugs. While traditional computational methods rely on rigid rules to predict Sites of Metabolism (SoMs), they often fail to generalize across diverse enzymatic classes (such as CYP450 phase I reactions versus phase II transferases). 

Deep Learning models offer a data-driven alternative by "translating" a substrate's SMILES string directly into its metabolite. However, standard Molecular Transformers face two major hurdles:
1. **Low Validity:** A tendency to generate syntactically invalid SMILES strings that do not represent real chemical molecules.
2. **High Computational Cost:** Training massive attention-based architectures from scratch is extremely resource-intensive.

## Key Innovations

This project solves these bottlenecks by separating the learning of SMILES syntax from the actual metabolism prediction task:

- **SMILES Canonicalization Pre-training:** The model is first pre-trained on a massive dataset (ZINC20) to translate randomized SMILES into canonical SMILES. This forces the encoder to learn the underlying molecular geometry rather than just memorizing character sequences.
- **Frozen-Decoder Fine-Tuning:** During the primary metabolic training phase, the decoder is frozen. Only 4.5 million out of 13.5 million parameters are updated, drastically reducing training time and preventing catastrophic forgetting of the SMILES syntax.
- **Dual-Input Strategy:** Combines the structural SMILES input with a specific Reaction Class (RC) token to provide vital chemical context, improving predictive accuracy.

<div class="row mt-4 mb-5">
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-pills mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Drug Discovery</h5>
            <p class="small">Accelerates early-stage drug development by rapidly profiling the metabolic viability and potential toxicity of candidate molecules.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-language mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Sequence-to-Sequence</h5>
            <p class="small">Treats complex biochemical reactions as a machine translation problem, converting substrate SMILES into metabolite SMILES.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-stopwatch mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Optimized Efficiency</h5>
            <p class="small">Uses strategic Transfer Learning and learning rate decay to maximize chemical validity while minimizing GPU compute time.</p>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="/contacts/" class="btn btn-theme">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=bacciu2025improving || key=multari2024predicting] %}
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