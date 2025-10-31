import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Business Intelligence Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-glow animate-pulse"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <br></br>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Lo que no se mide,{" "}
            <span className="gradient-text">no se mejora</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Convertimos datos en decisiones que impulsan crecimiento. 
            Líderes en analítica avanzada, transformando el panorama empresarial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="outline-glow" size="lg" className="text-lg">
              Ver Casos de Éxito
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <BarChart3 className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold gradient-text">500+</span>
              </div>
              <p className="text-muted-foreground">Proyectos Completados</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Brain className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold gradient-text">95%</span>
              </div>
              <p className="text-muted-foreground">Precisión en Predicciones</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold gradient-text">50+</span>
              </div>
              <p className="text-muted-foreground">Empresas Confían en Nosotros</p>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
