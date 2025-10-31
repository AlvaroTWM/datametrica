import { Database, TrendingUp, LineChart, Sparkles } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Database,
      title: "Inteligencia de Negocios",
      description:
        "Dashboards ejecutivos y operativos, forecasting y planeación, automatización de reporting para decisiones basadas en datos.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Analítico",
      description:
        "Comportamiento del consumidor y patrones de compra, segmentación de clientes, personalización de experiencia y análisis de social media.",
    },
    {
      icon: LineChart,
      title: "Estrategia y Crecimiento",
      description:
        "Growth analytics, palancas de adquisición, retención y monetización. Cohortes y customer journeys, puntos de fuga y fricción.",
    },
  ];

  return (
    <section id="soluciones" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nuestras <span className="gradient-text">Soluciones</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologías de punta que impulsan el crecimiento de tu negocio
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="border-gradient p-8 group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
