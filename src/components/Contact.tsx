import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
              Créons ensemble
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Transformons votre vision en réalité digitale exceptionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto transition-smooth group-hover:scale-110">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">Email</h3>
                <p className="text-muted-foreground">contact@alfan.fr</p>
              </div>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto transition-smooth group-hover:scale-110">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">Téléphone</h3>
                <p className="text-muted-foreground">+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto transition-smooth group-hover:scale-110">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">Adresse</h3>
                <p className="text-muted-foreground">Paris, France</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-12 py-7 transition-smooth hover:shadow-hover"
            >
              Discutons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
