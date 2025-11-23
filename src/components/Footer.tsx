const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-4xl font-display font-bold mb-2">Alfan</h3>
            <p className="text-background/70">Agence Web Premium</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h4 className="font-display font-bold mb-3">Navigation</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-smooth">Services</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Portfolio</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">À propos</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-3">Réseaux</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-smooth">LinkedIn</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Instagram</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Behance</a></li>
                <li><a href="#" className="hover:text-background transition-smooth">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} Alfan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
