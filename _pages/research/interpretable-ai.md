---
layout: page
title: Interpretable AI, Fairness & Ethics
permalink: /research/interpretable-ai-fairness-ethics/
description: Opening the "black box" of complex models to provide human-understandable insights while ensuring equitable outcomes and robust digital ethics.
---
<div class="project-wip-card">
    <div class="wip-visual">
        <div class="icon-stack">
            <i class="fas fa-person-digging main-worker-icon"></i>
            <i class="fas fa-microscope secondary-icon"></i>
        </div>
    </div>

    <div class="wip-details">
        <div class="status-tag">
            <i class="fas fa-sync fa-spin"></i> Under Documentation
        </div>
        <p class="area-description">
            We are currently finalizing the portfolio for this research pillar. 
            Detailed project descriptions, publications, and software repositories will be available here soon.
        </p>
        
        <div class="loading-skeleton">
            <div class="skeleton-line long"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line short"></div>
        </div>
    </div>
</div>

<div class="projects">
  {% assign projects = site.projects | where: "category", "interpretable-ai" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in projects %}{% include projects.liquid %}{% endfor %}
  </div>
</div>

<style>
    .project-wip-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;
        padding: 40px;
        background: var(--global-card-bg-color);
        border: 1px solid var(--global-divider-color);
        border-radius: 24px;
        margin: 30px 0;
        position: relative;
        overflow: hidden;
    }

    /* Responsive for mobile */
    @media (max-width: 768px) {
        .project-wip-card { flex-direction: column; text-align: center; }
        .loading-skeleton { margin: 0 auto; }
    }

    .icon-stack {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-worker-icon {
        font-size: 5.5rem;
        color: var(--global-theme-color);
        filter: drop-shadow(0 0 10px rgba(var(--global-theme-color-rgb), 0.2));
    }

    .secondary-icon {
        position: absolute;
        top: -10px;
        right: -10px;
        font-size: 2rem;
        background: var(--global-bg-color);
        padding: 5px;
        border-radius: 50%;
        color: var(--global-text-color);
        opacity: 0.6;
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

    .area-title {
        font-weight: 900;
        margin-bottom: 10px;
        font-size: 1.6rem;
    }

    .area-description {
        font-size: 1.05rem;
        opacity: 0.7;
        margin-bottom: 25px;
        max-width: 500px;
    }

    /* Skeleton Loading Animation */
    .loading-skeleton {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .skeleton-line {
        height: 8px;
        background: linear-gradient(90deg, var(--global-divider-color) 25%, var(--global-code-bg-color) 50%, var(--global-divider-color) 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 4px;
    }