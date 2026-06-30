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
            },},{id: "news-convegno-l-39-intelligenza-artificiale-nelle-decisioni-cliniche-in-medicina-e-chirurgia",
          title: 'Convegno: L&amp;#39;Intelligenza Artificiale nelle Decisioni Cliniche in Medicina e Chirurgia',
          description: "Un punto di incontro tra chirurghi, clinici, esperti di informatica e giuristi per tracciare il futuro della sanità digitale, tra opportunità rivoluzionarie e sfide etico-legali.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-09-convegno-AIMed-Surgery/";
            },},{id: "projects-genhap",
          title: 'GenHap',
          description: "A novel computational method based on genetic algorithms for highly efficient haplotype assembly.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/GenHap/";
            },},{id: "projects-hyperbeta",
          title: 'HyperBeta',
          description: "Characterizing the structural dynamics of proteins and self-assembling peptides.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HyperBeta/";
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
            },},{id: "projects-sdegno",
          title: 'SDEGnO',
          description: "Optimization and performance testing of CUDA-(multi)GPU-accelerated codes for the automatic parameterization of physical models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SDEGNO/";
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
            },},{id: "projects-alliance",
          title: 'ALLIANCE',
          description: "Computational development and characterization of cyclic peptide binders for the precision delivery of RNA/DNA therapeutics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alliance/";
            },},{id: "projects-assessing-cardiac-functionality-via-interpretable-ai",
          title: 'Assessing Cardiac Functionality via Interpretable AI',
          description: "A fully interpretable, rule-based machine learning model using myocardial strain data to accurately estimate Left Ventricular Ejection Fraction (LVEF).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cmrIAI/";
            },},{id: "projects-automated-cardiac-mr-ischemic-scar-assessment",
          title: 'Automated Cardiac MR Ischemic Scar Assessment',
          description: "A deep learning-based system for the accurate, time-efficient segmentation and clinical reporting of left ventricular myocardial infarction scar.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cmrischemic/";
            },},{id: "projects-cutauleaping",
          title: 'cuTauLeaping',
          description: "A GPU-powered tau-leaping stochastic simulator for massive parallel analyses of mass-action kinetics models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cuTauLeaping/";
            },},{id: "projects-cupsoda",
          title: 'cupSODA',
          description: "A CUDA-powered, coarse-grain deterministic simulator for mass-action kinetics models in systems biology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cupSODA/";
            },},{id: "projects-fanfair",
          title: 'FanFAIR',
          description: "Semi-automatic assessment of dataset fairness using fuzzy logic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fanfair/";
            },},{id: "projects-fourier-surrogate-models-of-dilated-fitness-landscapes",
          title: 'Fourier Surrogate Models of Dilated Fitness Landscapes',
          description: "A novel approach combining dilation functions and Fourier surrogate modeling to smooth noisy, multi-modal fitness landscapes in systems biology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fouriersurrogate/";
            },},{id: "projects-fst-pso",
          title: 'FST-PSO',
          description: "Fuzzy Self-Tuning Particle Swarm Optimization - A settings-free global optimization method.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fstpso/";
            },},{id: "projects-ginsoda",
          title: 'ginSODA',
          description: "A Python API for the massively parallel, GPU-powered simulation of stiff Ordinary Differential Equation (ODE) models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ginSODA/";
            },},{id: "projects-heresy",
          title: 'HERESY',
          description: "A Highly Efficient REaction SYstem simulator equipped with a graphical user interface and GPU-accelerated computation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heresy/";
            },},{id: "projects-drug-metabolism-prediction-with-molecular-transformers",
          title: 'Drug Metabolism Prediction with Molecular Transformers',
          description: "Optimizing deep learning architectures for accurate and efficient prediction of drug metabolism using SMILES-based sequence-to-sequence models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/molecular-transformers/";
            },},{id: "projects-muscle-mr-characterization-using-unsupervised-learning",
          title: 'Muscle MR Characterization using Unsupervised Learning',
          description: "Applying Self-Organizing Maps to radiomic data to automate the identification of fatty replacement and edema in STIM1 tubular aggregate myopathy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/musclemr/";
            },},{id: "projects-nutshell",
          title: 'NUTSHELL',
          description: "A deep learning model for the multiclass segmentation of nuclei to differentiate follicular thyroid lesions and streamline digital pathology workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nutshell/";
            },},{id: "projects-procell",
          title: 'ProCell',
          description: "An award-winning stochastic modeling and simulation framework to investigate cell proliferation dynamics using flow cytometry data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/procell/";
            },},{id: "projects-spatial-proteomics-amp-maldi-msi",
          title: 'Spatial Proteomics &amp;amp; MALDI-MSI',
          description: "Advancing digital pathology and biomarker discovery through Matrix-Assisted Laser Desorption Ionization Mass Spectrometry Imaging (MALDI-MSI) and machine learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proteomics/";
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
