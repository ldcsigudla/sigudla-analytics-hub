import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Github } from "lucide-react";
import githubLogo from "/assets/github-logo.png";

const projects = [
  {
    id: 1,
    title: "Ecommerce RFM Customer Segmentation",
    description: "Advanced customer segmentation using RFM analysis to identify high-value customer segments and optimize marketing strategies.",
    github: "https://github.com/lungelodon/ecommerce-rfm-customer-segmentation",
    project: "https://lungelodon.github.io/ecommerce-rfm-customer-segmentation/",
    download: "https://github.com/lungelodon/ecommerce-rfm-customer-segmentation/archive/refs/heads/main.zip"
  },
  {
    id: 2,
    title: "Telecom Customer Churn Analysis",
    description: "Predictive analytics model to identify customers at risk of churning and develop retention strategies.",
    github: "https://github.com/lungelodon/telecom-customer-churn-analysis",
    project: "https://lungelodon.github.io/telecom-customer-churn-analysis/",
    download: "https://github.com/lungelodon/telecom-customer-churn-analysis/archive/refs/heads/main.zip"
  },
  {
    id: 3,
    title: "Global Sales Performance Analysis",
    description: "Comprehensive analysis of global sales performance with interactive dashboards and trend analysis.",
    github: "https://github.com/lungelodon/global-sales-performance-analysis",
    project: "https://lungelodon.github.io/global-sales-performance-analysis/",
    download: "https://github.com/lungelodon/global-sales-performance-analysis/archive/refs/heads/main.zip"
  },
  {
    id: 4,
    title: "API-Driven Weather Sales Correlation",
    description: "Real-time weather data integration to analyze correlations between weather patterns and sales performance.",
    github: "https://github.com/lungelodon/api-driven-weather-sales-correlation",
    project: "https://lungelodon.github.io/api-driven-weather-sales-correlation/",
    download: "https://github.com/lungelodon/api-driven-weather-sales-correlation/archive/refs/heads/main.zip"
  },
  {
    id: 5,
    title: "HR Analytics Employee Attrition",
    description: "Machine learning model to predict employee attrition and identify key factors affecting retention.",
    github: "https://github.com/lungelodon/hr-analytics-employee-attrition",
    project: "https://lungelodon.github.io/hr-analytics-employee-attrition/",
    download: "https://github.com/lungelodon/hr-analytics-employee-attrition/archive/refs/heads/main.zip"
  },
  {
    id: 6,
    title: "US Airline On-Time Performance",
    description: "Statistical analysis of airline performance metrics with predictive models for delay patterns.",
    github: "https://github.com/lungelodon/us-airline-on-time-performance",
    project: "https://lungelodon.github.io/us-airline-on-time-performance/",
    download: "https://github.com/lungelodon/us-airline-on-time-performance/archive/refs/heads/main.zip"
  }
];

export function Projects() {
  const openInSameTab = (url: string) => {
    window.location.href = url;
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Data Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of data science projects showcasing machine learning, analytics, and visualization expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className={`group hover:shadow-lg transition-all duration-300 border-2 border-project-${project.id}/20 hover:border-project-${project.id}/60`}
            >
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={githubLogo}
                    alt="GitHub"
                    className="w-24 h-24 opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter>
                <div className="flex flex-col w-full gap-2">
                  <Button
                    onClick={() => openInSameTab(project.github)}
                    variant="outline"
                    size="sm"
                    className={`w-full bg-project-${project.id}/10 border-project-${project.id}/30 hover:bg-project-${project.id}/20`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  
                  <Button
                    onClick={() => openInSameTab(project.project)}
                    variant="outline"
                    size="sm"
                    className={`w-full bg-project-${project.id}/5 border-project-${project.id}/20 hover:bg-project-${project.id}/15`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  
                  <Button
                    onClick={() => window.open(project.download, '_blank')}
                    variant="outline"
                    size="sm"
                    className={`w-full bg-project-${project.id}/15 border-project-${project.id}/40 hover:bg-project-${project.id}/25`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}