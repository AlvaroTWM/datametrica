const LogoCloud = () => {
  // Placeholder company names - in production, these would be actual client logos
  const companies = [
    "TechCorp",
    "DataFlow",
    "InnovateX",
    "GlobalBank",
    "RetailMax",
    "LogiChain",
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-secondary/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-12 font-semibold">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
