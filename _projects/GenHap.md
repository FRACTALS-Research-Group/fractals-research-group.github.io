---
layout: page
title: GenHap
description: A novel computational method based on genetic algorithms for highly efficient haplotype assembly.
img: assets/img/projects/GenHap.png
importance: 4
category: [optimization]
related_publications: false
---

<div class="project-header mb-5">
    <div class="row align-items-center">
        <div class="col-md">
            <p class="lead">
                <strong>GenHap</strong> is a high-performance computational tool that leverages Genetic Algorithms (GAs) to solve the complex problem of haplotype assembly from high-throughput sequencing data.
            </p>
            <p>
                Fully characterizing an individual's genome requires reconstructing the two distinct copies of each chromosome (haplotypes). This process is computationally daunting and is formally known as the weighted Minimum Error Correction (wMEC) problem, which is NP-hard. GenHap tackles this by partitioning sequencing reads into two disjoint subsets with the least number of corrections to Single Nucleotide Polymorphism (SNP) values. Designed to handle the long, high-coverage reads of third-generation sequencing technologies (like PacBio RS II and Oxford Nanopore), GenHap yields optimal solutions through a globally distributed search process.
            </p>
            <div class="repository-badges">
                <a href="https://github.com/andrea-tango/GenHap" target="_blank"><img src="https://img.shields.io/github/stars/andrea-tango/GenHap?style=social" alt="GitHub stars"></a>
                <img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg" alt="License">
            </div>
            <div class="repository-badges">
                <span style="background: #00599C; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-code"></i> C++ / MPI
                </span>
                <span style="background: #9c27b0; color: white; padding: 5px 12px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; margin-left: 5px;">
                    <i class="fas fa-dna"></i> Genomics
                </span>
            </div>
        </div>
    </div>
</div>

## Technical Architecture & Distributed Computing

GenHap avoids the computational bottlenecks of traditional haplotyping tools by relying on a highly optimized **C++** backend and a **Master-Slave distributed programming paradigm** utilizing the Message Passing Interface (MPI).

Instead of attempting to solve the entire matrix of sequencing reads at once, GenHap employs a *divide-et-impera* (divide and conquer) strategy. The Master process detects haplotype blocks and splits the fragment matrix into smaller, manageable sub-matrices. These sub-problems are then distributed across multiple CPU cores (Slaves), where independent Genetic Algorithm instances optimize the partitions in parallel before the Master recombines them into a complete, highly accurate haplotype structure.

---

<div>
    <h3 class="mt-5">Research Highlights</h3>
    <div class="row mt-4 mb-5">
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-project-diagram mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Evolutionary Optimization</h5>
                <p class="small">Utilizes tournament selection, crossover, and mutation operators to iteratively evolve the optimal partition of sequence reads without falling into local optima traps.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-shipping-fast mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Unmatched Speed</h5>
                <p class="small">Proven to be up to 4× faster than state-of-the-art tools (like HapCol) on Roche/454 datasets, and up to 20× faster on PacBio RS II datasets.</p>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card p-3 text-center h-100 shadow-sm">
                <i class="fas fa-microscope mb-3" style="font-size: 2rem; color: var(--global-theme-color);"></i>
                <h5>Future-Gen Ready</h5>
                <p class="small">Specifically engineered to handle the high coverage and noisy read distributions characteristic of next-generation clinical sequencing technologies.</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-5 text-center">
    <a href="https://github.com/andrea-tango/GenHap" target="_blank" class="btn btn-theme">View Repository</a>
    <a href="/contacts/" class="btn btn-outline-secondary ml-2">Request Information</a>
</div>

<div class="publications">
    <h3 class="mt-5">Core Publication</h3>
    <div class="publication-list">
        {% bibliography --query @*[key=tangherloni2019genhap] --order descending --sort year %}
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