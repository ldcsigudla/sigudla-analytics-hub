import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TelecomQoS = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Telecom QoS & Churn Early Warning System</h1>
              <p className="text-muted-foreground max-w-3xl">
                Predictive churn models with SHAP explainability and survival analysis enriched with quality-of-service metrics to identify at-risk customers before they churn.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">XGBoost</Badge>
              <Badge variant="secondary">SHAP</Badge>
              <Badge variant="secondary">Lifelines</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Churn prediction model and retention impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">92.4%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-4">85.3%</div>
                <div className="text-sm text-muted-foreground">Churn Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-4">$5.6M</div>
                <div className="text-sm text-muted-foreground">Annual Retention Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-4">28%</div>
                <div className="text-sm text-muted-foreground">Churn Reduction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Links */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Project Resources</CardTitle>
            <CardDescription>Datasets, libraries, and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/blastchar/telco-customer-churn" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Telco Customer Churn Dataset</div>
                    <div className="text-xs text-muted-foreground">Kaggle dataset with 7K customer records</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/jedisam/Telecom-Data-Analysis" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Telecom Data Analysis</div>
                    <div className="text-xs text-muted-foreground">Customer metrics and usage analysis project</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/Davidelvis/Telecommunication-Project" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Telecommunication Project</div>
                    <div className="text-xs text-muted-foreground">Customer behavior & network analytics</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/ravens/awesome-telco" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Awesome Telco Resources</div>
                    <div className="text-xs text-muted-foreground">Curated list of telecom tools & projects</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://lifelines.readthedocs.io" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Lifelines Library</div>
                    <div className="text-xs text-muted-foreground">Survival analysis in Python</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Download Full Analysis</div>
                    <div className="text-xs text-muted-foreground">Complete churn analysis report</div>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TelecomQoS;
