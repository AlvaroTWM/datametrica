import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Soluciones",
      links: [
        { name: "Inteligencia de Negocios", href: "#" },
        { name: "Marketing Analítico", href: "#" },
        { name: "Estrategia y Crecimiento", href: "#" },
      ],
    },
    {
      title: "Industrias",
      links: [
        { name: "Retail", href: "#" },
        { name: "Banca y Finanzas", href: "#" },
        { name: "Logística", href: "#" },
        { name: "Manufactura", href: "#" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Blog", href: "#" },
        { name: "Casos de Éxito", href: "#" },
        { name: "Whitepapers", href: "#" },
        { name: "Webinars", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Nosotros", href: "#" },
        { name: "Equipo", href: "#" },
        { name: "Carreras", href: "#" },
        { name: "Contacto", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">DM</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Lo que no se mide, no se mejora. Convertimos datos en decisiones que impulsan crecimiento.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-accent" />
              <span>123 data metrica zone</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-accent" />
              <span>+595994568500</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-accent" />
              <span>contacto@datametrica.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DATA METRICA. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
