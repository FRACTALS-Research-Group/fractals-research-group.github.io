---
layout: page
title: Collaborators
permalink: /collaborators/
description: A global network of excellence bridging computational intelligence and scientific discovery.
nav: true
nav_order: 5
---

<div class="collaborators-impact-page">

  <div class="network-intro mb-5 mt-4">
    <div class="row align-items-center">
      <div class="col-md-8">
        <h1 class="display-3" style="font-weight: 900; background: linear-gradient(90deg, var(--global-theme-color), #888); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -2px;">
          Global Synergy.
        </h1>
        <div style="border-left: 5px solid var(--global-theme-color); padding-left: 25px; margin-top: 20px;">
          <p class="lead" style="text-align: justify; font-size: 1.3rem; line-height: 1.6; font-weight: 500;">
            Our scientific impact is <span style="color: var(--global-theme-color); font-weight: 800;">amplified</span> by an extensive global network. We integrate diverse perspectives to tackle high-stakes problems in medicine, physics, and ethics.
          </p>
        </div>
      </div>

      <div class="col-md-4 d-none d-md-block">
        <div class="network-stats-container">
          <div class="stat-block mb-3">
            <span class="stat-number-big">{{ site.data.collaborators.institutions.size }}+</span>
            <span class="stat-label-big">Partner Institutions</span>
          </div>
          <div class="stat-hr"></div>
          <div class="stat-block mt-3">
            {% assign total_people = 0 %}
            {% for inst in site.data.collaborators.institutions %}
              {% assign total_people = total_people | plus: inst.people.size %}
            {% endfor %}
            <span class="stat-number-big">{{ total_people }}+</span>
            <span class="stat-label-big">Global Collaborators</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="wip-container">
      <div class="wip-content">
          <div class="wip-icon-wrapper">
              <i class="fas fa-person-digging wip-main-icon"></i>
              <i class="fas fa-gear fa-spin wip-gear-icon"></i>
          </div>
          <h2 class="wip-title">Building Our Network</h2>
          <p class="wip-text">We are currently documenting our global network. Detailed profiles appear below shortly.</p>
          <div class="wip-progress-bar"><div class="wip-progress-fill"></div></div>
      </div>
  </div>

  <hr class="mb-5">

  <div class="search-container mb-5">
  <div class="search-wrapper">
    <i class="fas fa-search search-icon"></i>
    <input type="text" id="collabSearch" placeholder="Search by name, institution, location, or research expertise..." onkeyup="filterCollaborators()">
  </div>
  
  <div id="noResults" class="text-center mt-5" style="display: none;">
    <div class="no-results-icon mb-3">
        <i class="fas fa-search-minus" style="font-size: 3rem; opacity: 0.3;"></i>
    </div>
      <h3 style="font-weight: 800; opacity: 0.8;">No collaborators found</h3>
      <p style="opacity: 0.6;">Try adjusting your search terms or keywords.</p>
      <button onclick="resetSearch()" class="btn btn-sm btn-outline-custom mt-3">Clear Search</button>
    </div>
  </div>

  <div id="collabList">
    {% assign sorted_institutions = site.data.collaborators.institutions | sort: "name" %}
    {% for inst in sorted_institutions %}
    <section class="institution-block mb-3" data-inst-name="{{ inst.name }}" data-inst-loc="{{ inst.location }}">
      
      <div class="inst-banner d-flex align-items-center justify-content-between" 
           onclick="toggleInstitution('inst-{{ forloop.index }}')">
        <div class="d-flex align-items-center">
          <div class="inst-icon-box mr-3">
            <i class="{{ inst.logo }}"></i>
          </div>
          <div>
            <h2 class="inst-title m-0">{{ inst.name }}</h2>
            <span class="inst-location"><i class="fas fa-map-marker-alt"></i> {{ inst.location }}</span>
          </div>
        </div>
        
        <div class="d-flex align-items-center">
            <span class="badge-count mr-3">
                {{ inst.people.size }} 
                {% if inst.people.size == 1 %}
                    Collaborator
                {% else %}
                    Collaborators
                {% endif %}
            </span>
            <i class="fas fa-chevron-down toggle-icon" id="icon-inst-{{ forloop.index }}"></i>
        </div>
      </div>

      <div class="people-collapsible" id="inst-{{ forloop.index }}" style="display: none;">
        <div class="people-grid-impact pt-4 pb-4">
          {% assign sorted_people = inst.people | sort: "name" %}
          {% for person in sorted_people %}
          <div class="collaborator-card" data-person-name="{{ person.name }}" data-person-expertise="{{ person.interests }}">
            <div class="card-inner">
                <div class="collab-header-row">
                    <div class="collab-avatar">
                      {% if person.image %}
                          <img src="{{ person.image | relative_url }}" alt="{{ person.name }}">
                      {% else %}
                          <div class="avatar-placeholder">{{ person.name | slice: 0, 1 }}</div>
                      {% endif %}
                    </div>
                    <div class="collab-identity">
                        <h4>{{ person.name }}</h4>
                        <p class="collab-role-title">{{ person.role }}</p>
                    </div>
                </div>
                <div class="interests-container">
                    <div class="interests-label">Research Expertise</div>
                    <div class="interests-text">{{ person.interests }}</div>
                </div>
                <div class="collab-socials">
                    {% if person.linkedin %}<a href="https://linkedin.com/in/{{ person.linkedin }}" target="_blank"><i class="fab fa-linkedin"></i></a>{% endif %}
                    {% if person.scholar %}<a href="https://scholar.google.com/citations?user={{ person.scholar }}" target="_blank"><i class="fas fa-graduation-cap"></i></a>{% endif %}
                    {% if person.website %}<a href="{{ person.website }}" target="_blank"><i class="fas fa-globe"></i></a>{% endif %}
                    {% if person.email %}<a href="mailto:{{ person.email }}"><i class="fas fa-envelope"></i></a>{% endif %}
                </div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </section>
    {% endfor %}
  </div>
</div>

<script>
function toggleInstitution(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById('icon-' + id);
  const banner = content.previousElementSibling;
  
  if (content.style.display === "none") {
    content.style.display = "block";
    icon.style.transform = "rotate(180deg)";
    banner.classList.add('active-banner');
  } else {
    content.style.display = "none";
    icon.style.transform = "rotate(0deg)";
    banner.classList.remove('active-banner');
  }
}

function resetSearch() {
    document.getElementById('collabSearch').value = "";
    filterCollaborators();
    document.getElementById('collabSearch').focus();
}

function filterCollaborators() {
  const input = document.getElementById('collabSearch').value.toLowerCase();
  const sections = document.querySelectorAll('.institution-block');
  const noResultsDiv = document.getElementById('noResults');
  let anyGlobalMatch = false;

  sections.forEach(section => {
    const instName = section.getAttribute('data-inst-name').toLowerCase();
    const instLoc = section.getAttribute('data-inst-loc').toLowerCase();
    const cards = section.querySelectorAll('.collaborator-card');
    
    // Check if the institution header matches
    let instHasMatch = instName.includes(input) || instLoc.includes(input);
    let peopleMatchCount = 0;

    cards.forEach(card => {
      const personName = card.getAttribute('data-person-name').toLowerCase();
      const personExpertise = card.getAttribute('data-person-expertise').toLowerCase();
      
      // A card matches if the person matches OR if the institution header matches
      if (personName.includes(input) || personExpertise.includes(input) || instHasMatch) {
        card.style.display = "block";
        peopleMatchCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (input !== "") {
      if (peopleMatchCount > 0 || instHasMatch) {
        section.style.display = "block";
        anyGlobalMatch = true;
        
        // Expand section automatically during search
        const collapsible = section.querySelector('.people-collapsible');
        collapsible.style.display = "block";
        section.querySelector('.toggle-icon').style.transform = "rotate(180deg)";
        section.querySelector('.inst-banner').classList.add('active-banner');
      } else {
        section.style.display = "none";
      }
    } else {
      // RESET: Hide all content and reset icons when search is cleared
      section.style.display = "block";
      const collapsible = section.querySelector('.people-collapsible');
      collapsible.style.display = "none";
      section.querySelector('.toggle-icon').style.transform = "rotate(0deg)";
      section.querySelector('.inst-banner').classList.remove('active-banner');
      cards.forEach(card => card.style.display = "block");
      anyGlobalMatch = true;
    }
  });

  // Toggle "No Results" message
  noResultsDiv.style.display = anyGlobalMatch ? "none" : "block";
}
</script>

<style>
  /* SEARCH BAR STYLES */
  .search-container {
    max-width: 800px;
    margin: 0 auto;
  }
  .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  .search-icon {
    position: absolute;
    left: 20px;
    color: var(--global-theme-color);
    font-size: 1.2rem;
  }
  #collabSearch {
    width: 100%;
    padding: 15px 15px 15px 55px;
    border-radius: 50px;
    border: 2px solid var(--global-divider-color);
    background: var(--global-code-bg-color);
    color: var(--global-text-color);
    font-size: 1.1rem;
    transition: all 0.3s ease;
    outline: none;
  }
  #collabSearch:focus {
    border-color: var(--global-theme-color);
    box-shadow: 0 0 15px rgba(var(--global-theme-color-rgb), 0.1);
  }
  .btn-outline-custom {
    border: 1px solid var(--global-theme-color);
    color: var(--global-theme-color);
    border-radius: 20px;
    padding: 5px 20px;
    font-weight: 700;
    transition: 0.3s;
  }
  .btn-outline-custom:hover {
    background: var(--global-theme-color);
    color: white;
  }

  /* REUSE PREVIOUS STYLES */
  .network-stats-container { background: var(--global-code-bg-color); padding: 30px; border-radius: 20px; border: 1px solid var(--global-divider-color); text-align: center; }
  .stat-block { display: flex; flex-direction: column; align-items: center; }
  .stat-number-big { font-size: 3.2rem; font-weight: 900; color: var(--global-theme-color); line-height: 1; }
  .stat-label-big { font-size: 0.8rem; text-transform: uppercase; font-weight: 800; letter-spacing: 1.5px; opacity: 0.7; margin-top: 5px; }
  .stat-hr { height: 1px; width: 60%; background: var(--global-divider-color); margin: 0 auto; opacity: 0.5; }
  .inst-banner { border-bottom: 1px solid var(--global-divider-color); padding: 12px 0; cursor: pointer; transition: all 0.2s ease; }
  .inst-banner:hover { padding-left: 5px; border-bottom-color: var(--global-theme-color); }
  .active-banner { border-bottom: 2px solid var(--global-theme-color); }
  .inst-icon-box { width: 35px; height: 35px; background: var(--global-theme-color); color: white; border-radius: 6px; display: flex; justify-content: center; align-items: center; font-size: 0.9rem; }
  .inst-title { font-weight: 800; font-size: 1.25rem; color: var(--global-text-color); }
  .inst-location { font-size: 0.75rem; font-weight: 600; opacity: 0.5; text-transform: uppercase; }
  .badge-count { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--global-theme-color); background: rgba(var(--global-theme-color-rgb), 0.1); padding: 4px 10px; border-radius: 20px; }
  .toggle-icon { transition: transform 0.3s ease; opacity: 0.4; font-size: 0.8rem; }
  .people-grid-impact { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 20px; }
  .collaborator-card { background: var(--global-card-bg-color); border-radius: 12px; border: 1px solid var(--global-divider-color); padding: 20px; transition: 0.3s; }
  .collaborator-card:hover { border-color: var(--global-theme-color); transform: translateY(-3px); }
  .interests-container { background: var(--global-code-bg-color); border-left: 3px solid var(--global-theme-color); padding: 10px; border-radius: 4px; margin: 15px 0; min-height: 75px; }
  .interests-label { font-size: 0.6rem; font-weight: 800; color: var(--global-theme-color); text-transform: uppercase; margin-bottom: 3px; }
  .interests-text { font-size: 0.85rem; line-height: 1.4; opacity: 0.8; }
  .collab-header-row { display: flex; align-items: center; }
  .collab-avatar { width: 55px; height: 55px; margin-right: 12px; flex-shrink: 0; }
  .collab-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
  .avatar-placeholder { width: 100%; height: 100%; background: var(--global-code-bg-color); border-radius: 8px; display: flex; justify-content: center; align-items: center; font-weight: 800; color: var(--global-theme-color); }
  .collab-identity h4 { font-weight: 800; margin: 0; font-size: 1.05rem; }
  .collab-role-title { font-weight: 700; font-size: 0.7rem; color: var(--global-theme-color); text-transform: uppercase; margin: 2px 0 0 0; }
  .collab-socials a { color: var(--global-text-color); margin-right: 12px; font-size: 1rem; opacity: 0.3; transition: 0.2s; }
  .collab-socials a:hover { color: var(--global-theme-color); opacity: 1; }

  /* WIP STYLES */
  .wip-container { display: flex; justify-content: center; align-items: center; padding: 40px 20px; margin: 30px 0; background: var(--global-code-bg-color); border-radius: 20px; border: 1px dashed var(--global-theme-color); }
  .wip-content { text-align: center; max-width: 600px; }
  .wip-main-icon { font-size: 4rem; color: var(--global-theme-color); opacity: 0.8; }
  .wip-title { font-weight: 800; font-size: 1.5rem; margin-top: 10px; color: var(--global-text-color); }
  .wip-text { font-size: 1rem; opacity: 0.7; }
  .wip-progress-bar { width: 100%; height: 6px; background: var(--global-divider-color); border-radius: 10px; overflow: hidden; margin-top: 15px; }
  .wip-progress-fill { width: 40%; height: 100%; background: var(--global-theme-color); animation: progressMove 2s infinite ease-in-out; }
  @keyframes progressMove { 0% { transform: translateX(-100%); } 100% { transform: translateX(250%); } }
</style>