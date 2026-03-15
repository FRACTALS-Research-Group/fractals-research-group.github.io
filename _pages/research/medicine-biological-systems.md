---
layout: page
title: Medicine & Biological Systems
permalink: /research/medicine-biological-systems/
description: Developing advanced clinical diagnostics while mastering the non-linear dynamics governing life, from cellular networks to systemic health interactions.
---

<div class="back-nav mb-5">
    <a href="/research/" class="back-link">
        <i class="fas fa-arrow-left"></i> Back to Research Pillars
    </a>
</div>

<div class="projects-list mb-5">
  {% assign projects = site.projects | where: "category", "bio-med" | sort: "importance" %}
  
  {% if projects.size > 0 %}
      {% for project in projects %}
      <div class="project-text-card">
          <div class="project-content">
              <h3 class="project-title">
                  <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
              </h3>
              <p class="project-desc">{{ project.description }}</p>
              
              <div class="project-actions">
                  <a href="{{ project.url | relative_url }}" class="read-more-btn">
                      Explore Project <i class="fas fa-chevron-right"></i>
                  </a>
              </div>
          </div>
      </div>
      {% endfor %}
  {% endif %}
</div>

<div class="project-wip-card">
    <div class="wip-visual">
        <i class="fas fa-flask main-worker-icon"></i>
    </div>

    <div class="wip-details">
        <div class="status-tag">
            <i class="fas fa-sync fa-spin"></i> Active Research Area
        </div>
        <p class="area-description">
            We are currently finalizing the digital portfolio for this research pillar. 
            More detailed project descriptions, datasets, and software repositories will be published here soon.
        </p>
        
        <div class="loading-skeleton">
            <div class="skeleton-line long"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line short"></div>
        </div>
    </div>
</div>

<style>
    /* Back Navigation */
    .back-nav {
        text-align: right;
    }
    .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--global-text-color) !important;
        font-weight: 600;
        text-decoration: none;
        padding: 8px 18px;
        background: var(--global-card-bg-color);
        border: 1px solid var(--global-divider-color);
        border-radius: 50px;
        transition: all 0.2s ease;
        font-size: 0.9rem;
    }
    .back-link:hover {
        border-color: var(--global-theme-color);
        color: var(--global-theme-color) !important;
        transform: translateX(-4px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }

    /* Text-Only Project Cards */
    .project-text-card {
        background: var(--global-card-bg-color);
        border: 1px solid var(--global-divider-color);
        border-left: 4px solid var(--global-theme-color);
        border-radius: 8px;
        padding: 25px 30px;
        margin-bottom: 20px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .project-text-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.05);
    }
    .project-title {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.4rem;
        font-weight: 700;
    }
    .project-title a {
        color: var(--global-text-color);
        text-decoration: none;
        transition: color 0.2s;
    }
    .project-title a:hover {
        color: var(--global-theme-color);
    }
    .project-desc {
        font-size: 1rem;
        line-height: 1.6;
        opacity: 0.8;
        margin-bottom: 15px;
    }
    .read-more-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--global-theme-color);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .read-more-btn:hover {
        color: var(--global-hover-color);
        text-decoration: none;
    }
    .read-more-btn i {
        font-size: 0.8rem;
        transition: transform 0.2s;
    }
    .read-more-btn:hover i {
        transform: translateX(3px);
    }

    /* WIP Card Redesign */
    .project-wip-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
        padding: 35px;
        background: var(--global-card-bg-color);
        border: 1px dashed var(--global-divider-color);
        border-radius: 16px;
        margin: 30px 0;
    }
    @media (max-width: 768px) {
        .project-wip-card { 
            flex-direction: column; 
            text-align: center; 
        }
        .loading-skeleton { margin: 0 auto; }
        .project-text-card { padding: 20px; }
    }
    .wip-visual {
        flex-shrink: 0;
        background: rgba(var(--global-theme-color-rgb), 0.05);
        height: 100px;
        width: 100px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main-worker-icon {
        font-size: 3rem;
        color: var(--global-theme-color);
    }
    .status-tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(var(--global-theme-color-rgb), 0.1);
        color: var(--global-theme-color);
        padding: 6px 14px;
        border-radius: 30px;
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 15px;
    }
    .area-description {
        font-size: 0.95rem;
        opacity: 0.7;
        margin-bottom: 20px;
        max-width: 600px;
        line-height: 1.6;
    }

    /* Skeleton Loading Animation */
    .loading-skeleton {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
    }
    .skeleton-line {
        height: 6px;
        background: linear-gradient(90deg, var(--global-divider-color) 25%, var(--global-code-bg-color) 50%, var(--global-divider-color) 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 4px;
    }
    .skeleton-line.long { width: 100%; }
    .skeleton-line.medium { width: 75%; }
    .skeleton-line.short { width: 40%; }

    @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
</style>
