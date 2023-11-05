import {
    kine1,
    kine2,
    kine3,
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
  
  const experiences = [
    {
      title: "Kinésithérapie",
      company_name: "Matthias Kupper & Dorian Poisson",
      icon: icon_expertise,
      iconBg: "#ffff",
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
      iconBg: "#ffff",
      points: [
        "Les ostéopathes utilisent leur connaissance des relations entre la structure et la fonction pour optimiser les capacités du corps à s’auto-réguler et à s’auto-guérir.",
        "Cette approche holistique de la prise en charge du patient est fondée sur le concept que l’être humain constitue une unité fonctionnelle dynamique, dans laquelle toutes les parties sont reliées entre elles.",
      ],
    },
    {
      title: "Moneyron",
      company_name: "Thomas Spetebroot",
      icon: icon_expertise,
      iconBg: "#ffff",
      points: [
        "La méthode Jean Moneyron se singularise par son apparente simplicité, sa rapidité et sa profonde efficacité.", 
        "C'est une méthode manuelle de réharmonisation réflexe des articulations rachidiennes et des membres entraînant une répercussion à distance sur tout l'équilibre du corps.",
        "L'action thérapeutique s'applique sur des points cibles réflexogènes normalisateurs de l'étage intéressé.",
      ],
    },
    {
      title: "Méthode McKenzie",
      company_name: "Dorian Poisson",
      icon: icon_expertise,
      iconBg: "#ffff",
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
      name: "Matthias KUPPER",
      description:
        "FLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: kine3,
    },
    {
      name: "Dorian POISSON",
      description:
        "FLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: kine2,
    },
    {
      name: "Thomas SPETEBROOT",
      description:
        "FLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: kine1,
    },
  ];
  
  export { services, experiences, projects };