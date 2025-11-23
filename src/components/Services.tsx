import { Code, Palette, Rocket, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Interfaces modernes et intuitives qui captivent vos utilisateurs et renforcent votre marque.",
  },
  {
    icon: Code,
    title: "Développement Web",
    description: "Sites et applications performants, évolutifs et optimisés pour tous les appareils.",
  },
  {
    icon: Rocket,
    title: "Stratégie Digitale",
    description: "Accompagnement complet pour positionner votre entreprise avec impact sur le web.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description: "Identité visuelle unique qui reflète vos valeurs et démarque votre entreprise.",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Notre expertise
          </h2>
          <p className="text-xl md:text-2xl text-background/70 font-light">
            Des solutions complètes pour propulser votre présence digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group space-y-6 transition-smooth hover:translate-x-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-background text-foreground flex items-center justify-center transition-smooth group-hover:scale-110">
                <service.icon className="w-8 h-8" />
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-background/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
