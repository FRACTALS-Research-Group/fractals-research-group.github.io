---
layout: page
title: Collaborators
permalink: /collaborators/
description: A global network of excellence.
nav: true
nav_order: 5
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<div class="collaborators-impact-page">

  <div class="network-intro mb-5 mt-4">
    <h1 class="display-3" style="font-weight: 900; background: linear-gradient(90deg, var(--global-theme-color), #888); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -2px;">
      Global Synergy.
    </h1>
    <p class="lead">Select a marker on the map to explore our network of excellence and specific team members.</p>
  </div>

  <div class="map-wrapper shadow-lg mb-4">
      <div id="collaborationMap"></div>
  </div>

  <div class="map-legend mb-5 text-right">
    <span class="badge-total"><i class="fas fa-university"></i> {{ site.data.collaborators.institutions.size }} Partner Nodes</span>
  </div>

  <div id="active-institution-view" class="mt-5">
    <div class="empty-state text-center py-5">
        <i class="fas fa-fingerprint fa-3x mb-3" style="color: var(--global-theme-color); opacity: 0.3;"></i>
        <h3 style="font-weight: 800; opacity: 0.6;">Awaiting Selection</h3>
        <p style="opacity: 0.5;">Interacting with the map above will populate this section with institutional data.</p>
    </div>
  </div>

  <div id="hidden-collab-data" style="display: none;">
    {% for inst in site.data.collaborators.institutions %}
    <div id="data-inst-{{ forloop.index }}">
        <div class="inst-detail-header d-flex align-items-center justify-content-between mb-5">
            <div class="d-flex align-items-center">
                <div class="inst-mini-icon"><i class="{{ inst.logo }}"></i></div>
                <div class="ml-4">
                    <h2 class="inst-title m-0" style="color: var(--global-text-color); font-weight: 900;">{{ inst.name }}</h2>
                    <span class="inst-location" style="color: var(--global-theme-color); font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;">
                        <i class="fas fa-map-marker-alt"></i> {{ inst.location }}
                    </span>
                </div>
            </div>
            <div class="counter-badge">
                <span class="number">{{ inst.people.size }}</span>
                <span class="label">Collaborators</span>
            </div>
        </div>
        
        <div class="people-grid-impact">
            {% for person in inst.people %}
            <div class="collaborator-card">
                <div class="collab-header-row d-flex align-items-center mb-3">
                    <div class="collab-avatar">
                        {% if person.image %}<img src="{{ person.image | relative_url }}">
                        {% else %}<div class="avatar-placeholder">{{ person.name | slice: 0, 1 }}</div>{% endif %}
                    </div>
                    <div class="collab-identity">
                        <h4 style="color: var(--global-text-color);">{{ person.name }}</h4>
                        <p class="collab-role" style="color: var(--global-theme-color);">{{ person.role }}</p>
                    </div>
                </div>
                <div class="expertise-box"><p>{{ person.interests }}</p></div>
                <div class="collab-socials">
                    {% if person.linkedin %}<a href="https://linkedin.com/in/{{ person.linkedin }}" target="_blank"><i class="fab fa-linkedin"></i></a>{% endif %}
                    {% if person.scholar %}<a href="https://scholar.google.com/citations?user={{ person.scholar }}" target="_blank"><i class="fas fa-graduation-cap"></i></a>{% endif %}
                    {% if person.website %}<a href="{{ person.website }}" target="_blank"><i class="fas fa-globe"></i></a>{% endif %}
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
    {% endfor %}
  </div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
function displayInstitution(id) {
    const displayArea = document.getElementById('active-institution-view');
    const sourceData = document.getElementById('data-' + id);
    
    if (sourceData) {
        displayArea.style.opacity = '0';
        displayArea.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            displayArea.innerHTML = sourceData.innerHTML;
            displayArea.style.opacity = '1';
            displayArea.style.transform = 'translateY(0)';
            
            // Scroll to the new content area
            displayArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('collaborationMap', { 
        scrollWheelZoom: false,
        zoomControl: true 
    }).setView([20, 10], 2);
    
    // Light-aware tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB'
    }).addTo(map);

    // PULSE ICON using CSS variables
    var pulsingIcon = L.divIcon({
        className: 'map-pulse-icon',
        html: '<div class="pulse-ring"></div><div class="pulse-dot"></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6]
    });

    {% for inst in site.data.collaborators.institutions %}
        {% if inst.coordinates %}
            L.marker([{{ inst.coordinates.lat }}, {{ inst.coordinates.lon }}], {icon: pulsingIcon})
             .addTo(map)
             .bindPopup(`
                <div class="modern-popup">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="pop-count">{{ inst.people.size }} People</span>
                    </div>
                    <h5 style="color: var(--global-text-color); font-weight: 800;">{{ inst.name }}</h5>
                    <p style="font-size: 0.75rem; opacity: 0.7; margin-bottom: 12px;">{{ inst.location }}</p>
                    <button class="btn-explore-map" onclick="displayInstitution('inst-{{ forloop.index }}')">
                        View Team <i class="fas fa-arrow-right ml-1"></i>
                    </button>
                </div>
             `, { maxWidth: 220, className: 'custom-popup-box' });
        {% endif %}
    {% endfor %}
});
</script>

<style>
  /* GLOBAL THEME INTEGRATION */
  #active-institution-view { transition: all 0.4s ease; scroll-margin-top: 100px; }
  .map-wrapper { border-radius: 24px; overflow: hidden; border: 1px solid var(--global-divider-color); height: 500px; }
  #collaborationMap { height: 100%; background: var(--global-bg-color); }
  
  .badge-total { background: var(--global-code-bg-color); color: var(--global-text-color); padding: 8px 16px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; border: 1px solid var(--global-divider-color); }

  /* PULSE MARKER */
  .pulse-dot { width: 10px; height: 10px; background: var(--global-theme-color); border-radius: 50%; position: absolute; border: 2px solid var(--global-bg-color); box-shadow: 0 0 5px rgba(0,0,0,0.2); }
  .pulse-ring { border: 3px solid var(--global-theme-color); border-radius: 50%; height: 30px; width: 30px; position: absolute; left: -10px; top: -10px; animation: pulsate 2s infinite; }
  @keyframes pulsate { 0% { transform: scale(0.1); opacity: 0; } 50% { opacity: 0.4; } 100% { transform: scale(1.3); opacity: 0; } }

  /* POPUP STYLING */
  .custom-popup-box .leaflet-popup-content-wrapper { background: var(--global-bg-color); color: var(--global-text-color); border-radius: 12px; border: 1px solid var(--global-divider-color); }
  .pop-count { font-size: 0.6rem; font-weight: 900; background: var(--global-theme-color); color: white; padding: 2px 8px; border-radius: 10px; text-transform: uppercase; }
  .btn-explore-map { background: var(--global-theme-color); color: white; border: none; padding: 8px 0; width: 100%; border-radius: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
  .btn-explore-map:hover { transform: translateY(-2px); filter: brightness(1.1); }

  /* DETAIL VIEW STYLING */
  .inst-mini-icon { width: 60px; height: 60px; background: var(--global-theme-color); color: white; border-radius: 16px; display: flex; justify-content: center; align-items: center; font-size: 1.8rem; box-shadow: 0 10px 20px rgba(var(--global-theme-color-rgb), 0.2); }
  
  .counter-badge { text-align: right; }
  .counter-badge .number { display: block; font-size: 2rem; font-weight: 900; line-height: 1; color: var(--global-theme-color); }
  .counter-badge .label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; opacity: 0.5; }

  /* PERSON CARDS */
  .people-grid-impact { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
  .collaborator-card { background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); border-radius: 20px; padding: 24px; transition: 0.3s; }
  .collaborator-card:hover { border-color: var(--global-theme-color); transform: translateY(-5px); }
  
  .collab-avatar { width: 55px; height: 55px; border-radius: 12px; overflow: hidden; margin-right: 15px; border: 2px solid var(--global-divider-color); }
  .collab-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .avatar-placeholder { width: 100%; height: 100%; background: var(--global-code-bg-color); display: flex; justify-content: center; align-items: center; font-weight: 800; color: var(--global-theme-color); }
  
  .collab-identity h4 { margin: 0; font-size: 1.1rem; font-weight: 800; }
  .collab-role { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0; }
  
  .expertise-box { background: var(--global-code-bg-color); padding: 15px; border-radius: 12px; margin: 20px 0; border-left: 3px solid var(--global-theme-color); }
  .expertise-box p { font-size: 0.85rem; line-height: 1.6; opacity: 0.8; margin: 0; }
  
  .collab-socials a { color: var(--global-text-color); opacity: 0.3; margin-right: 15px; font-size: 1.1rem; transition: 0.2s; }
  .collab-socials a:hover { color: var(--global-theme-color); opacity: 1; }
  
  .empty-state { border: 2px dashed var(--global-divider-color); border-radius: 30px; }
</style>