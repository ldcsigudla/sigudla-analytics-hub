import { ProjectCarousel3D } from "@/components/ProjectCarousel3D";
import project1Image from "@/assets/project-1.png";
import project2Image from "@/assets/project-2.png";
import project3Image from "@/assets/project-3.png";
import project4Image from "@/assets/project-4.png";
import project5Image from "@/assets/project-5.png";
import project6Image from "@/assets/project-6.png";
import projectRFMImage from "@/assets/project-rfm.png";
import projectChurnImage from "@/assets/project-churn.png";
import projectSalesImage from "@/assets/project-sales.png";
import projectWeatherImage from "@/assets/project-weather.png";
import projectHRImage from "@/assets/project-hr.png";
import projectAirlineImage from "@/assets/project-airline.png";

const projects = [
  {
    id: 1,
    title: "Battery RUL & Warranty Risk Modeling",
    description: "Machine learning models predicting remaining useful life and warranty risk curves for Li-ion batteries using NASA cycling data with uncertainty quantification.",
    github: "#",
    image: project1Image,
    borderColor: "border-project-1",
    githubBg: "bg-project-1/10 hover:bg-project-1/20 border-project-1/30",
    projectBg: "bg-project-1/5 hover:bg-project-1/15 border-project-1/20", 
    downloadBg: "bg-project-1/15 hover:bg-project-1/25 border-project-1/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Network Coverage Gap Analysis & Relay Optimization",
    description: "Geospatial analysis combining speed test data, tower locations, and population density to optimize network relay placement for underserved areas.",
    github: "#",
    image: project2Image,
    borderColor: "border-project-2",
    githubBg: "bg-project-2/10 hover:bg-project-2/20 border-project-2/30",
    projectBg: "bg-project-2/5 hover:bg-project-2/15 border-project-2/20",
    downloadBg: "bg-project-2/15 hover:bg-project-2/25 border-project-2/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Flight Route Optimization with Weather & Traffic",
    description: "Path planning system integrating real-time weather data and air traffic to optimize routes with risk scoring and collision avoidance.",
    github: "#",
    image: project3Image,
    borderColor: "border-project-3",
    githubBg: "bg-project-3/10 hover:bg-project-3/20 border-project-3/30",
    projectBg: "bg-project-3/5 hover:bg-project-3/15 border-project-3/20",
    downloadBg: "bg-project-3/15 hover:bg-project-3/25 border-project-3/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Telecom QoS & Churn Early Warning System",
    description: "Predictive churn models with SHAP explainability and survival analysis, enriched with quality-of-service metrics to identify at-risk customers.",
    github: "#",
    image: project4Image,
    borderColor: "border-project-4",
    githubBg: "bg-project-4/10 hover:bg-project-4/20 border-project-4/30",
    projectBg: "bg-project-4/5 hover:bg-project-4/15 border-project-4/20",
    downloadBg: "bg-project-4/15 hover:bg-project-4/25 border-project-4/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Microgrid Energy Dispatch & Demand Optimization",
    description: "Battery storage optimization system forecasting building load and optimizing charge/discharge cycles to reduce demand charges with ROI calculator.",
    github: "#",
    image: project5Image,
    borderColor: "border-project-5",
    githubBg: "bg-project-5/10 hover:bg-project-5/20 border-project-5/30",
    projectBg: "bg-project-5/5 hover:bg-project-5/15 border-project-5/20",
    downloadBg: "bg-project-5/15 hover:bg-project-5/25 border-project-5/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Patent Landscape & Innovation White-Space Analysis",
    description: "Patent clustering and trend analysis using Google Patents BigQuery to identify technology gaps and innovation opportunities in RF and emerging tech.",
    github: "#",
    image: project6Image,
    borderColor: "border-project-6",
    githubBg: "bg-project-6/10 hover:bg-project-6/20 border-project-6/30",
    projectBg: "bg-project-6/5 hover:bg-project-6/15 border-project-6/20",
    downloadBg: "bg-project-6/15 hover:bg-project-6/25 border-project-6/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Marketplace Fraud Detection & Dynamic Pricing",
    description: "Anomaly detection and fraud prediction models for financial transactions with dynamic pricing simulation for credit-based marketplaces.",
    github: "#",
    image: project1Image,
    borderColor: "border-project-1",
    githubBg: "bg-project-1/10 hover:bg-project-1/20 border-project-1/30",
    projectBg: "bg-project-1/5 hover:bg-project-1/15 border-project-1/20",
    downloadBg: "bg-project-1/15 hover:bg-project-1/25 border-project-1/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "RF Link Budget & Coverage Heatmap Modeling",
    description: "Radio frequency propagation modeling using ITU standards to generate predicted coverage heatmaps compared with real-world signal measurements.",
    github: "#",
    image: project2Image,
    borderColor: "border-project-2",
    githubBg: "bg-project-2/10 hover:bg-project-2/20 border-project-2/30",
    projectBg: "bg-project-2/5 hover:bg-project-2/15 border-project-2/20",
    downloadBg: "bg-project-2/15 hover:bg-project-2/25 border-project-2/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 9,
    title: "Infrastructure Resilience & Crime Correlation Analysis",
    description: "Cross-sectional analysis correlating power outages and network connectivity with crime patterns to quantify infrastructure resilience impact.",
    github: "#",
    image: project3Image,
    borderColor: "border-project-3",
    githubBg: "bg-project-3/10 hover:bg-project-3/20 border-project-3/30",
    projectBg: "bg-project-3/5 hover:bg-project-3/15 border-project-3/20",
    downloadBg: "bg-project-3/15 hover:bg-project-3/25 border-project-3/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 10,
    title: "Ecommerce RFM Customer Segmentation",
    description: "Advanced customer segmentation using RFM analysis to identify high-value customer segments and optimize marketing strategies.",
    github: "https://github.com/lungelodon/ecommerce-rfm-customer-segmentation",
    project: "https://lungelodon.github.io/ecommerce-rfm-customer-segmentation/",
    download: "https://github.com/lungelodon/ecommerce-rfm-customer-segmentation/archive/refs/heads/main.zip",
    image: projectRFMImage,
    borderColor: "border-project-1",
    githubBg: "bg-project-1/10 hover:bg-project-1/20 border-project-1/30",
    projectBg: "bg-project-1/5 hover:bg-project-1/15 border-project-1/20", 
    downloadBg: "bg-project-1/15 hover:bg-project-1/25 border-project-1/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 11,
    title: "Telecom Customer Churn Analysis",
    description: "Predictive analytics model to identify customers at risk of churning and develop retention strategies.",
    github: "https://github.com/lungelodon/telecom-customer-churn-analysis",
    project: "https://lungelodon.github.io/telecom-customer-churn-analysis/",
    download: "https://github.com/lungelodon/telecom-customer-churn-analysis/archive/refs/heads/main.zip",
    image: projectChurnImage,
    borderColor: "border-project-2",
    githubBg: "bg-project-2/10 hover:bg-project-2/20 border-project-2/30",
    projectBg: "bg-project-2/5 hover:bg-project-2/15 border-project-2/20",
    downloadBg: "bg-project-2/15 hover:bg-project-2/25 border-project-2/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 12,
    title: "Global Sales Performance Analysis",
    description: "Comprehensive analysis of global sales performance with interactive dashboards and trend analysis.",
    github: "https://github.com/lungelodon/global-sales-performance-analysis",
    project: "https://lungelodon.github.io/global-sales-performance-analysis/",
    download: "https://github.com/lungelodon/global-sales-performance-analysis/archive/refs/heads/main.zip",
    image: projectSalesImage,
    borderColor: "border-project-3",
    githubBg: "bg-project-3/10 hover:bg-project-3/20 border-project-3/30",
    projectBg: "bg-project-3/5 hover:bg-project-3/15 border-project-3/20",
    downloadBg: "bg-project-3/15 hover:bg-project-3/25 border-project-3/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 13,
    title: "API-Driven Weather Sales Correlation",
    description: "Real-time weather data integration to analyze correlations between weather patterns and sales performance.",
    github: "https://github.com/lungelodon/api-driven-weather-sales-correlation",
    project: "https://lungelodon.github.io/api-driven-weather-sales-correlation/",
    download: "https://github.com/lungelodon/api-driven-weather-sales-correlation/archive/refs/heads/main.zip",
    image: projectWeatherImage,
    borderColor: "border-project-4",
    githubBg: "bg-project-4/10 hover:bg-project-4/20 border-project-4/30",
    projectBg: "bg-project-4/5 hover:bg-project-4/15 border-project-4/20",
    downloadBg: "bg-project-4/15 hover:bg-project-4/25 border-project-4/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 14,
    title: "HR Analytics Employee Attrition",
    description: "Machine learning model to predict employee attrition and identify key factors affecting retention.",
    github: "https://github.com/lungelodon/hr-analytics-employee-attrition",
    project: "https://lungelodon.github.io/hr-analytics-employee-attrition/",
    download: "https://github.com/lungelodon/hr-analytics-employee-attrition/archive/refs/heads/main.zip",
    image: projectHRImage,
    borderColor: "border-project-5",
    githubBg: "bg-project-5/10 hover:bg-project-5/20 border-project-5/30",
    projectBg: "bg-project-5/5 hover:bg-project-5/15 border-project-5/20",
    downloadBg: "bg-project-5/15 hover:bg-project-5/25 border-project-5/40",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: 15,
    title: "US Airline On-Time Performance",
    description: "Statistical analysis of airline performance metrics with predictive models for delay patterns.",
    github: "https://github.com/lungelodon/us-airline-on-time-performance",
    project: "https://lungelodon.github.io/us-airline-on-time-performance/",
    download: "https://github.com/lungelodon/us-airline-on-time-performance/archive/refs/heads/main.zip",
    image: projectAirlineImage,
    borderColor: "border-project-6",
    githubBg: "bg-project-6/10 hover:bg-project-6/20 border-project-6/30",
    projectBg: "bg-project-6/5 hover:bg-project-6/15 border-project-6/20",
    downloadBg: "bg-project-6/15 hover:bg-project-6/25 border-project-6/40",
    videoId: "dQw4w9WgXcQ"
  }
];

export function Projects() {
  const openInSameTab = (url: string) => {
    window.location.href = url;
  };

  const openProjectPage = (projectId: number) => {
    const routes: { [key: number]: string } = {
      1: "/projects/battery-rul",
      2: "/projects/network-coverage",
      3: "/projects/flight-routing",
      4: "/projects/telecom-qos",
      5: "/projects/microgrid-dispatch",
      6: "/projects/patent-analysis",
      7: "/projects/marketplace-fraud",
      8: "/projects/rf-coverage",
      9: "/projects/infrastructure-resilience",
      10: "/projects/ecommerce-rfm",
      11: "/projects/telecom-churn", 
      12: "/projects/global-sales",
      13: "/projects/weather-sales",
      14: "/projects/hr-analytics",
      15: "/projects/airline-performance"
    };
    window.location.href = routes[projectId];
  };

  return (
    <section id="projects" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Data Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of data science projects showcasing machine learning, analytics, and visualization expertise
          </p>
        </div>

        <ProjectCarousel3D 
          projects={projects}
          onProjectClick={openProjectPage}
          onGithubClick={openInSameTab}
        />
      </div>
    </section>
  );
}