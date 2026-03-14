---
layout: page
title: HyperBeta
description: Characterizing the structural dynamics of proteins and self-assembling peptides.
img: assets/img/projects/HyperBETA.png
importance: 5
category: [therapeutics]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md-8">
            <p class="lead">
                <strong>HyperBeta</strong> is a novel, open-source computational tool designed to analyze and visualize the formation dynamics of β-sheets in <strong>Coarse-Grained Molecular Dynamics (CG-MD)</strong> simulations.
            </p>
            <p>
                By employing an innovative <strong>hyper-graph-based algorithm</strong>, HyperBeta overcomes the limitations of traditional analytical tools. It directly manipulates data from GROMACS/MARTINI force fields to provide a real-time, quantitative, and visually intuitive representation of supra-molecular self-assembly processes at the nanoscale.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/aresio/hyperbeta" target="_blank"><img src="https://img.shields.io/github/stars/aresio/hyperbeta?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/Platform-C++-00599C.svg?logo=c%2B%2B" alt="C++">
                <img src="https://img.shields.io/badge/Platform-python-3776AB.svg?logo=python" alt="Python">
            </div>
        </div>
        <div class="col-md-4 text-center">
            <img src="{{ site.baseurl }}/assets/img/projects/HyperBETA.png" alt="HyperBeta Logo" class="img-fluid" style="border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        </div>
    </div>
</div>

## The Challenge of Coarse-Grained Modeling

Supra-molecular self-assembly, driven by non-covalent interactions, is fundamental to processes like protein folding and the creation of novel biomaterials. To simulate these complex systems over realistic timescales, researchers use **Coarse-Grained (CG) modeling** (like the MARTINI force field), which groups atoms into individual "beads" to reduce computational cost.

However, because hydrogen bonds are not explicitly defined in CG models, traditional secondary structure assignment tools (like DSSP or STRIDE) cannot be used. Until now, there has been a lack of efficient analytical tools to quantitatively track and visualize the self-assembling patterns (specifically β-sheets) directly from CG-MD trajectory data.

## The HyperBeta Solution

HyperBeta fills this gap by utilizing a novel mathematical approach rather than relying on molecular connectivity or intra-chain dihedral angles:

- **Hyper-Graph Topology:** The algorithm identifies all potential β-sheets by finding ordered "triples" of grains (across different peptides) that meet specific distance ($$\varepsilon$$) and angular ($$\alpha$$) thresholds. 
- **Connected Components:** It then builds an undirected graph where overlapping triples are "glued" together into connected components, successfully isolating complex β-sheet structures from random-coils or α-helices.
- **High-Performance 3D Engine:** HyperBeta features a proprietary, real-time 3D renderer. It utilizes advanced visual cues, such as simulated depth-of-field, frustum culling, and level-of-detail balancing, to make the complex spatial relationships of massive molecular aggregates easily interpretable.

<div class="row mt-4 mb-5">
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-project-diagram mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Algorithmic Discovery</h5>
            <p class="small">Replaces implicit hydrogen bond tracking with a robust $O(n^6)$ worst-case geometric hyper-graph algorithm to accurately map β-sheet formations in CG models.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-vr-cardboard mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Advanced Visualization</h5>
            <p class="small">Real-time rendering engine providing dynamic depth-of-field and statistical overlays, eliminating the need for complex, custom <code>*tcl</code> scripting in VMD.</p>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="card p-3 text-center h-100 shadow-sm">
            <i class="fas fa-microscope mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
            <h5>Biomedical Impact</h5>
            <p class="small">Enables the investigation of self-assembling peptides (SAPs) crucial for tissue engineering and understanding amyloid plaque formation in Alzheimer's disease.</p>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/aresio/hyperbeta" target="_blank" class="btn btn-theme">View on GitHub</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Key Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=nobile2021hyperbeta] %}
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