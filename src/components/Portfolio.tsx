import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Luxe",
    category: "Développement & Design",
    description: "Plateforme e-commerce haut de gamme avec expérience utilisateur immersive",
  },
  {
    title: "Application SaaS",
    category: "Application Web",
    description: "Solution cloud complète pour la gestion d'entreprise moderne",
  },
  {
    title: "Site Vitrine Corporate",
    category: "Branding & Web",
    description: "Refonte complète de l'identité digitale d'une entreprise internationale",
  },
  {
    title: "Portfolio Créatif",
    category: "Design & Développement",
    description: "Site portfolio interactif pour un studio de création",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Réalisations
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Projets qui témoignent de notre excellence
          </p>
        </div>

        <div className="space-y-1">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border-t border-border last:border-b py-8 md:py-12 transition-smooth hover:bg-muted/20 px-6 md:px-8 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="text-3xl md:text-5xl font-display font-bold transition-smooth group-hover:translate-x-2">
                      {project.title}
                    </h3>
                    <span className="text-sm md:text-base text-muted-foreground font-light">
                      {project.category}
                    </span>
                  </div>
                  <p 
                    className={`text-lg text-muted-foreground transition-all duration-500 overflow-hidden ${
                      hoveredIndex === index ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
                
                <div className="text-6xl md:text-8xl font-display font-bold text-muted/30 transition-smooth group-hover:text-foreground">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
