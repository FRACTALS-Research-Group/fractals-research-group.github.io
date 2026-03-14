// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "Meet the members of the FRACTALS Research Group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Research output of the FRACTALS Research Group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Discover the areas of Research Interest and the innovative projects undertaken by the Fractals Research Group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-network",
          title: "Network",
          description: "Explore our global network of collaborators and institutions driving innovation across disciplines.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/network/";
          },
        },{id: "nav-contact-us",
          title: "Contact Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contacts/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-special-session-wcci-2026",
          title: 'Special Session @ WCCI 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-wcci2026-special-session/";
            },},{id: "news-special-session-ieee-cibcb-2026",
          title: 'Special Session @ IEEE CIBCB 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-cibcb2026-special-session/";
            },},{id: "news-tutorial-ieee-cibcb-2026",
          title: 'Tutorial @ IEEE CIBCB 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-cibcb2026-tutorial/";
            },},{id: "projects-medga",
          title: 'MedGA',
          description: "A novel evolutionary method for image enhancement in medical imaging systems based on Genetic Algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MedGA/";
            },},{id: "projects-mithyca",
          title: 'MiThyCA',
          description: "Microscopic foci of papillary Thyroid Carcinoma-like nuclear features identification with AI in Whole-Slide Images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MiThyCA/";
            },},{id: "projects-thaiti",
          title: 'THAITI',
          description: "TrustwortHy Artificial Intelligence for Inversion Time - Patented AI for Cardiac MRI optimization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/THAITI/";
            },},{id: "projects-use-net",
          title: 'USE-Net',
          description: "Incorporating Squeeze-and-Excitation blocks into U-Net for multi-institutional prostate zonal segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/USE-Net/";
            },},{id: "projects-fanfair",
          title: 'FanFAIR',
          description: "Semi-automatic assessment of dataset fairness using fuzzy logic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fanfair/";
            },},{id: "projects-fst-pso",
          title: 'FST-PSO',
          description: "Fuzzy Self-Tuning Particle Swarm Optimization - A settings-free global optimization method.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fstpso/";
            },},{id: "projects-pyfume",
          title: 'pyFUME',
          description: "A Python package for automatic Fuzzy Model Estimation from data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pyfume/";
            },},{id: "projects-simpful",
          title: 'Simpful',
          description: "A user-friendly and lightweight Python library for fuzzy logic reasoning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/simpful/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
