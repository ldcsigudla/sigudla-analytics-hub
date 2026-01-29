import { BarChart3, Brain, LineChart, Briefcase } from "lucide-react";

const competencies = [
  {
    icon: BarChart3,
    number: "01",
    title: "Data Analysis",
    description: "Statistical modeling, exploratory analysis, and data-driven insights that inform strategic decisions."
  },
  {
    icon: Brain,
    number: "02",
    title: "Machine Learning",
    description: "Predictive modeling, algorithm development, and AI solutions that deliver measurable results."
  },
  {
    icon: LineChart,
    number: "03",
    title: "Data Visualization",
    description: "Interactive dashboards and compelling visual narratives that communicate complex insights."
  },
  {
    icon: Briefcase,
    number: "04",
    title: "Business Intelligence",
    description: "Strategic recommendations and actionable intelligence that accelerate business growth."
  }
];

const journey = [
  {
    year: "2023",
    title: "Business Intelligence Specialist",
    org: "Consulting Projects",
    desc: "Led data transformation initiatives and implemented analytics solutions for enterprise clients."
  },
  {
    year: "2022",
    title: "Data Analyst",
    org: "Previous Role",
    desc: "Developed predictive models and created executive dashboards for strategic decision-making."
  },
  {
    year: "2021",
    title: "Data Science Bootcamp",
    org: "Umuzi.org",
    desc: "Intensive program covering data science, analysis, big data technologies and machine learning."
  }
];

export function About() {
  return (
    <section className="py-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">
              About
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-8">
            Turning Data Into
            <span className="text-primary"> Strategic Value</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in transforming raw data into meaningful insights that drive business growth.
            With expertise in machine learning, statistical analysis, and data visualization, I help 
            organizations make smarter decisions through data-driven intelligence.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border mb-32">
          {competencies.map((comp, index) => (
            <div 
              key={index}
              className="bg-background p-8 lg:p-12 group hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl lg:text-6xl font-bold text-border group-hover:text-primary/30 transition-colors">
                  {comp.number}
                </span>
                <comp.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-4">{comp.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{comp.description}</p>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">
              Experience
            </span>
          </div>
          
          <div className="space-y-0">
            {journey.map((item, index) => (
              <div 
                key={index}
                className="group grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-8 border-b border-border last:border-0 hover:bg-card/50 transition-colors px-4 -mx-4"
              >
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  {item.year}
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-primary text-sm font-medium mb-3">{item.org}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
