import metricsPlaceholder from "@/assets/metrics-placeholder.jpg";

const MetricsPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dashboards y <span className="gradient-text">Métricas en Tiempo Real</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Visualiza el poder de tus datos con nuestras soluciones de Business Intelligence
          </p>
        </div>

        {/* Metrics Preview Card */}
        <div className="max-w-6xl mx-auto relative group">
          <div className="border-gradient p-1 rounded-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-card">
              {/* Blurred Background Image */}
              <img
                src={metricsPlaceholder}
                alt="Dashboards de Business Intelligence"
                className="w-full h-full object-cover blur-md scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
              
              {/* Coming Soon Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 p-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-foreground"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                    Próximamente
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Estamos preparando dashboards interactivos y visualizaciones de datos de última generación para transformar tu negocio
                  </p>
                </div>

                {/* Animated Pulse Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-primary/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsPreview;
