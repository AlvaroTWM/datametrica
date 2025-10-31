import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 lg:p-16 shadow-card">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Contacta con nosotros
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            ¿Listo para Transformar tu{" "}
            <span className="gradient-text">Negocio con Datos?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda una sesión personalizada con nuestros expertos. Descubre cómo
            Business Intelligence puede impulsar tu crecimiento.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="text-lg group w-full sm:w-auto">
              Contacta con nosotros
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-glow" size="lg" className="text-lg w-full sm:w-auto">
              Hablar con un Experto
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Configuración en 24 horas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Soporte dedicado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
