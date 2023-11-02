import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    analyse,
    gym,
    sport,
    massage,
    icon_expertise,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "à_propos",
      title: "à propos",
    },
    {
      id: "Expertise",
      title: "Expertise",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Analyse & bilan",
      icon: analyse,
    },
    {
      title: "Rééducation & Réadaptation",
      icon: gym,
    },
    {
      title: "Renforcement musculaire",
      icon: sport,
    },
    {
      title: "Soins & Récupération",
      icon: massage,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Kinésithérapie",
      company_name: "Matthias Kupper & Dorian Poisson",
      icon: icon_expertise,
      iconBg: "#383E56",
      points: [
        "La kinésithérapie est une discipline paramédicale qui repose sur diverses techniques : massages, mouvements de gymnastique avec ou sans instrument, physiothérapie, etc.",
        "Ce professionnel de santé travaille en étroite collaboration avec l’équipe médicale. ",
        "Il exerce aussi bien à l’hôpital qu’en clinique, en maison de retraite ou en cabinet de ville, et intervient à tous les âges de la vie.",
      ],
    },
    {
      title: "Ostéopathie",
      company_name: "Matthias Kupper",
      icon: icon_expertise,
      iconBg: "#E6DEDD",
      points: [
        "Les ostéopathes utilisent leur connaissance des relations entre la structure et la fonction pour optimiser les capacités du corps à s’auto-réguler et à s’auto-guérir.",
        "Cette approche holistique de la prise en charge du patient est fondée sur le concept que l’être humain constitue une unité fonctionnelle dynamique, dans laquelle toutes les parties sont reliées entre elles.",
      ],
    },
    {
      title: "Niromathé",
      company_name: "Thomas Spetebroot",
      icon: icon_expertise,
      iconBg: "#383E56",
      points: [
        "Créée en 1997, la méthode Niromathé® fut une véritable révélation. La méthode trouve son originalité en ce sens qu'elle associe les points d'acupuncture et une traction cutanée. Tout le travail se passe au niveau de la peau: une lésion entraine une déprogrammation des points cutanés et sous cutanés pouvant durer des années, et générant des douleurs. La reprogrammation de ces points par un toucher vibratoire amène à une disparition de la lésion et donc de la douleur.",
        "Les domaines d’application de la méthode Niromathé sont très variés : elle s'adresse à tous les âges et à toutes les lésions ostéopathiques sans exception.",
      ],
    },
    {
      title: "Méthode McKenzie",
      company_name: "Dorian Poisson",
      icon: icon_expertise,
      iconBg: "#E6DEDD",
      points: [
        "Cette méthode de traitement, centrée sur la participation active du patient, a convaincu de nombreux praticiens dans le monde entier",
        "Elle peut être utilisée pour l’évaluation, le traitement, l’éducation et l’accession à l’autonomie des patients souffrant de douleurs au niveau du dos, du cou et des membres.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };