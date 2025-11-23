const stats = [
  { value: "8+", label: "Années d'expérience" },
  { value: "150+", label: "Projets réalisés" },
  { value: "50+", label: "Clients satisfaits" },
  { value: "100%", label: "Dédication" },
];

const About = () => {
  return (
    <section className="py-32 px-6 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold">
              Excellence & Innovation
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-background/80 leading-relaxed font-light">
              <p>
                Alfan est une agence web premium qui repousse les limites du design et de la technologie pour créer des expériences digitales mémorables.
              </p>
              <p>
                Notre philosophie repose sur l'excellence, l'innovation et l'attention portée aux détails. Chaque projet est une opportunité de créer quelque chose d'exceptionnel.
              </p>
              <p>
                Nous collaborons avec des marques visionnaires qui partagent notre passion pour la qualité et l'innovation digitale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="space-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-background/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
