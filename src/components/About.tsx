export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Focused on Data Science and Analysis</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            I specialize in transforming raw data into meaningful insights that drive business growth.
            With expertise in machine learning, statistical analysis, and data visualization, I help organizations 
            make smarter decisions through data-driven insights.
          </p>

          {/* Core Competencies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Data Analysis</h3>
              <p className="text-sm text-muted-foreground">Statistical modeling and exploratory data analysis</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">Predictive modeling and algorithm development</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Data Visualization</h3>
              <p className="text-sm text-muted-foreground">Interactive dashboards and compelling narratives</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-muted/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-semibold mb-2">Business Intelligence</h3>
              <p className="text-sm text-muted-foreground">Strategic recommendations and growth insights</p>
            </div>
          </div>

          {/* Career Journey Summary */}
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">My Journey</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-lg">Data Science and Data Engineering Bootcamp</h4>
                <p className="text-muted-foreground text-sm mb-2">Umuzi.org</p>
                <p className="text-sm">Intensive program covering data science, analysis, big data technologies and machine learning.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-lg">Data Analyst</h4>
                <p className="text-muted-foreground text-sm mb-2">Previous Role</p>
                <p className="text-sm">Developed predictive models and created executive dashboards for strategic decision-making.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-lg">Business Intelligence Specialist</h4>
                <p className="text-muted-foreground text-sm mb-2">Consulting Projects</p>
                <p className="text-sm">Led data transformation initiatives and implemented analytics solutions for various clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
