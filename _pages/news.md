---
layout: page
title: News
permalink: /news/
description: Updates, announcements, and highlights from the FRACTALS Research Group.
---

<div class="news-timeline">
  {% assign news = site.news | reverse %}
  {% for item in news %}
  <div class="timeline-item">
    <div class="timeline-date">
      <span class="day">{{ item.date | date: "%d" }}</span>
      <span class="month">{{ item.date | date: "%b" }}</span>
      <span class="year">{{ item.date | date: "%Y" }}</span>
    </div>
    
    <div class="timeline-card">
      {% if item.inline %}
        <div class="news-content-inline">
          {{ item.content }}
        </div>
      {% else %}
        <h4 class="news-title">
          <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
        </h4>
        <p class="news-excerpt">{{ item.content | strip_html | truncate: 100 }}</p>
        <a href="{{ item.url | relative_url }}" class="read-more">Read Full Announcement <i class="fas fa-chevron-right"></i></a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<style>
  .news-timeline {
    position: relative;
    max-width: 900px;
    margin: 40px auto;
    padding: 20px 0;
  }

  /* La linea verticale della timeline */
  .news-timeline::before {
    content: '';
    position: absolute;
    left: 120px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--global-divider-color);
  }

  .timeline-item {
    display: flex;
    margin-bottom: 50px;
    position: relative;
  }

  /* Data sulla sinistra */
  .timeline-date {
    width: 100px;
    text-align: right;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--global-text-color);
  }

  .timeline-date .day { font-size: 1.8rem; font-weight: 900; line-height: 1; }
  .timeline-date .month { font-size: 0.9rem; text-transform: uppercase; font-weight: 600; color: var(--global-theme-color); }
  .timeline-date .year { font-size: 0.8rem; opacity: 0.5; font-family: monospace; }

  /* Card sulla destra */
  .timeline-card {
    flex: 1;
    margin-left: 40px;
    padding: 25px;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    position: relative;
    transition: all 0.3s ease;
  }

  /* Il pallino sulla linea */
  .timeline-card::before {
    content: '';
    position: absolute;
    left: -46px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: var(--global-bg-color);
    border: 3px solid var(--global-theme-color);
    border-radius: 50%;
    z-index: 2;
  }

  .timeline-card:hover {
    transform: translateX(10px);
    border-color: var(--global-theme-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  .news-title { margin-bottom: 10px; font-weight: 800; }
  .news-title a { color: var(--global-text-color) !important; text-decoration: none !important; }
  .news-excerpt { font-size: 0.95rem; opacity: 0.8; line-height: 1.6; }
  
  .read-more {
    display: inline-block;
    margin-top: 15px;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--global-theme-color) !important;
    letter-spacing: 1px;
  }

  /* Responsive per mobile */
  @media (max-width: 768px) {
    .news-timeline::before { left: 20px; }
    .timeline-date { width: 60px; padding-right: 15px; text-align: left; }
    .timeline-date .day { font-size: 1.2rem; }
    .timeline-card { margin-left: 30px; padding: 15px; }
    .timeline-card::before { left: -36px; }
  }
</style>