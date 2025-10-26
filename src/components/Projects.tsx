import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import project1Image from "@/assets/project-1.png";
import project2Image from "@/assets/project-2.png";
import project3Image from "@/assets/project-3.png";
import project4Image from "@/assets/project-4.png";
import project5Image from "@/assets/project-5.png";
import project6Image from "@/assets/project-6.png";

const projects = [
  {
    id: 1,
    title: "Ecommerce RFM Customer Segmentation",
    description: "Advanced customer segmentation using RFM analysis to identify high-value customer segments and optimize marketing strategies.",
    github: "https://github.com/lungelodon/ecommerce-rfm-customer-segmentation",
    image: project1Image,
  },
  {
    id: 2,
    title: "Telecom Customer Churn Analysis",
    description: "Predictive analytics model to identify customers at risk of churning and develop retention strategies.",
    github: "https://github.com/lungelodon/telecom-customer-churn-analysis",
    image: project2Image,
  },
  {
    id: 3,
    title: "Global Sales Performance Analysis",
    description: "Comprehensive analysis of global sales performance with interactive dashboards and trend analysis.",
    github: "https://github.com/lungelodon/global-sales-performance-analysis",
    image: project3Image,
  },
  {
    id: 4,
    title: "API-Driven Weather Sales Correlation",
    description: "Real-time weather data integration to analyze correlations between weather patterns and sales performance.",
    github: "https://github.com/lungelodon/api-driven-weather-sales-correlation",
    image: project4Image,
  },
  {
    id: 5,
    title: "HR Analytics Employee Attrition",
    description: "Machine learning model to predict employee attrition and identify key factors affecting retention.",
    github: "https://github.com/lungelodon/hr-analytics-employee-attrition",
    image: project5Image,
  },
  {
    id: 6,
    title: "US Airline On-Time Performance",
    description: "Statistical analysis of airline performance metrics with predictive models for delay patterns.",
    github: "https://github.com/lungelodon/us-airline-on-time-performance",
    image: project6Image,
  }
];

export function Projects() {
  const openInSameTab = (url: string) => {
    window.location.href = url;
  };

  const openProjectPage = (projectId: number) => {
    const routes = {
      1: "/projects/ecommerce-rfm",
      2: "/projects/telecom-churn", 
      3: "/projects/global-sales",
      4: "/projects/weather-sales",
      5: "/projects/hr-analytics",
      6: "/projects/airline-performance"
    };
    window.location.href = routes[projectId as keyof typeof routes];
  };

  return (
    <section id="projects" className="py-32 border-t">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Selected Work</h2>
          <p className="text-sm text-muted-foreground">
            Projects demonstrating end-to-end data analysis, modeling, and visualization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group border hover:shadow-sm transition-all duration-200"
            >
              <CardHeader className="space-y-4">
                <div className="w-full aspect-video bg-muted/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg font-medium">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardFooter className="gap-2">
                <Button
                  onClick={() => openProjectPage(project.id)}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  View Report
                </Button>
                
                <Button
                  onClick={() => openInSameTab(project.github)}
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                >
                  <Github className="w-3 h-3 mr-1.5" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}