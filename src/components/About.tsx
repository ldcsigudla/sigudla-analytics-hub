import { BarChart3, Brain, LineChart, Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react";

const competencies = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Statistical modeling and exploratory data analysis",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Predictive modeling and algorithm development",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    description: "Interactive dashboards and compelling narratives",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Briefcase,
    title: "Business Intelligence",
    description: "Strategic recommendations and growth insights",
    gradient: "from-emerald-500 to-teal-500"
  }
];

const journeyItems = [
  {
    icon: GraduationCap,
    title: "Data Science and Data Engineering Bootcamp",
    organization: "Umuzi.org",
    description: "Intensive program covering data science, analysis, big data technologies and machine learning.",
    color: "bg-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Data Analyst",
    organization: "Previous Role",
    description: "Developed predictive models and created executive dashboards for strategic decision-making.",
    color: "bg-purple-500"
  },
  {
    icon: Users,
    title: "Business Intelligence Specialist",
    organization: "Consulting Projects",
    description: "Led data transformation initiatives and implemented analytics solutions for various clients.",
    color: "bg-emerald-500"
  }
];

export function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Focused on{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Data Science
              </span>{" "}
              and Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I specialize in transforming raw data into meaningful insights that drive business growth.
              With expertise in machine learning, statistical analysis, and data visualization, I help organizations 
              make smarter decisions through data-driven insights.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {competencies.map((comp, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${comp.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <comp.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{comp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{comp.description}</p>
              </div>
            ))}
          </div>

          {/* Career Journey */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Experience
              </span>
              <h3 className="text-3xl font-bold">My Journey</h3>
            </div>
            
            <div className="space-y-6">
              {journeyItems.map((item, index) => (
                <div 
                  key={index}
                  className="group relative flex gap-6 p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg"
                >
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    {index < journeyItems.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{item.organization}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
