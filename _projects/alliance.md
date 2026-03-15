---
layout: page
title: ALLIANCE
description: Computational development and characterization of cyclic peptide binders for the precision delivery of RNA/DNA therapeutics.
img: assets/img/projects/alliance.png
importance: 4
category: therapeutics
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>ALLIANCE</strong> (A novel integrated cyclic peptide-based platform for precision delivery of nucleic acid-based therapeutics) addresses the critical challenge of delivering DNA and RNA therapies precisely to target tissues.
            </p>
            <p>
                While nucleic acid-based therapeutics offer potentially curative effects for genetic, oncological, and infectious diseases, their clinical translation is hindered by poor transmission into desired cells. To overcome this, we are developing a novel class of nanocarriers based on <strong>cyclic peptides</strong>—acting as "miniaturized antibodies" to ferry therapeutics with high affinity and selectivity.
            </p>
            <!-- <div class="repository-badges">
                <img src="https://img.shields.io/badge/Domain-Gene%20Therapy-0d47a1.svg" alt="Gene Therapy">
                <img src="https://img.shields.io/badge/Focus-Computational%20Biochemistry-ff6f00.svg" alt="Computational Biochemistry">
            </div> -->
            <div class="repository-badges">
                <span style="background: #ffc107; color: black; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">
                    <i class="fas fa-dna"></i> Gene Therapy
                </span>
                <span style="background: #2196f3; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-adjust"></i> Computational Biochemistry
                </span>
            </div>
        </div>
        <!-- <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/alliance.png" alt="ALLIANCE Logo" class="img-fluid" style="border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        </div> -->
    </div>
</div>

## Work Package 2: Computational Development

Our research team is involved in **Work Package 2: Computational development and characterization of cyclic peptide binders**. 

By integrating advanced computational modeling with biophysics and chemistry, our goal is to design and simulate cyclic peptides capable of binding to tissue-specific cell surface receptors that have historically resisted conventional targeting modalities. 

Through molecular dynamics, structural bioinformatics, and optimization algorithms, we digitally prototype these "miniaturized antibodies" before experimental synthesis, ensuring they possess the optimal geometrical and physicochemical properties required for efficient nucleic acid delivery.

## Why Cyclic Peptides?

To overcome the barriers of traditional small molecules and biologic drugs, cyclic peptides offer a unique blend of chemical and biological advantages:
* **High Binding Affinity & Exquisite Specificity**: Enabling highly targeted, tissue-specific drug delivery.
* **Exceptional Stability**: High thermal and proteolytic resistance compared to linear peptides.
* **Favorable Bio-profile**: Low immunogenicity, excellent biocompatibility, and high biodegradability.
* **Manufacturing Efficiency**: Small size and ease of chemical synthesis.

<div class="mt-4 mb-4 p-4" style="background-color: var(--global-code-bg-color); border-left: 4px solid var(--global-theme-color); border-radius: 8px;">
    <h5 style="font-weight: 800; text-transform: uppercase; font-size: 1rem; color: var(--global-theme-color);">Project & Funding Details</h5>
    <ul style="list-style-type: none; padding-left: 0; font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">
        <li><strong>Project Title:</strong> ALLIANCE (A novel integrated cyclic peptide-based platform for precision delivery of nucleic acid-based therapeutics)</li>
        <li><strong>Funder:</strong> National Center for Gene Therapy and Drugs based on RNA Technology (CN RNA & Gene Therapy)</li>
        <li><strong>Funding Amount:</strong> > €700,000</li>
        <li><strong>Partners:</strong> Ca’ Foscari University of Venice, European Centre for Living Technologies (ECLT)</li>
        <li><strong>Our Role:</strong> Member of Work Package 2 (Computational Design)</li>
    </ul>
</div>

<div class="row mt-5 mb-5">
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-dna mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Precision Gene Therapy</h5>
            <p class="small">Unlocking the full potential of DNA and RNA agents by solving the fundamental bottleneck of safe, targeted cellular delivery.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-laptop-medical mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Computational Design</h5>
            <p class="small">Utilizing in silico methods to rationally design, screen, and characterize novel cyclic peptide binders prior to synthesis.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-bullseye mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Miniaturized Antibodies</h5>
            <p class="small">Creating synthetic nanocarriers that combine the specificity of large biologics with the stability and scalability of small molecules.</p>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
<a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
<h3 class="mt-5">Core Publications</h3>
<div class="publication-list">
{% bibliography --query @*[key=fregonese2025_cyclic] %}
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