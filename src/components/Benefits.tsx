import { CheckCircle2, Target, Rocket, Shield, Users, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Líderes en Analítica",
      description: "Ser líderes en analítica avanzada, transformando el panorama empresarial con soluciones innovadoras.",
    },
    {
      icon: Users,
      title: "Cultura de Datos",
      description: "Lograr que los directores y gerentes puedan tomar sus decisiones basadas en sus datos de forma efectiva.",
    },
    {
      icon: CheckCircle2,
      title: "Partners Estratégicos",
      description: "Convertirnos en aliados estratégicos de nuestros clientes, acompañándolos en su transformación digital.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nuestros <span className="gradient-text">Objetivos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprometidos con tu éxito y transformación digital
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="space-y-4 p-6 rounded-lg hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
