export function About() {
  return (
    <section className="py-32 border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-3">
              <h3 className="text-base font-medium">Data Analysis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Statistical modeling and exploratory analysis to uncover patterns in complex datasets
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">Machine Learning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Predictive modeling and algorithm development for classification and forecasting
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">Data Visualization</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interactive dashboards and visual narratives that communicate insights clearly
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">Business Intelligence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategic recommendations backed by data-driven analysis and growth metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
