import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BatteryRUL = () => {
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
              <h1 className="text-3xl font-bold mb-2">Battery RUL & Warranty Risk Modeling</h1>
              <p className="text-muted-foreground max-w-3xl">
                Advanced predictive analytics for lithium-ion battery degradation, remaining useful life prediction, and warranty risk assessment using NASA battery cycling datasets.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">LSTM</Badge>
              <Badge variant="secondary">XGBoost</Badge>
              <Badge variant="secondary">Conformal Prediction</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Predictive model performance and business impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">96.3%</div>
                <div className="text-sm text-muted-foreground">RUL Accuracy (±5%)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-1">89.7%</div>
                <div className="text-sm text-muted-foreground">EOL Prediction Precision</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-1">$4.2M</div>
                <div className="text-sm text-muted-foreground">Warranty Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-1">15-25%</div>
                <div className="text-sm text-muted-foreground">Second-Life Value Uplift</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Links */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Project Resources</CardTitle>
            <CardDescription>Code repositories, datasets, and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/nasa/battery-data-repository" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">NASA Battery Dataset</div>
                    <div className="text-xs text-muted-foreground">PCoE Li-ion aging data, multiple chemistries</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.batteryarchive.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Battery Archive</div>
                    <div className="text-xs text-muted-foreground">Public repository of battery cycling datasets</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/microsoft/batteryml" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">BatteryML Platform</div>
                    <div className="text-xs text-muted-foreground">Microsoft's open-source ML framework for batteries</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/shiyunliu-battery/Iontech" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Iontech Battery Tools</div>
                    <div className="text-xs text-muted-foreground">Monitoring, modeling datasets and tools</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://arxiv.org/abs/2310.14714" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">BatteryML Paper (arXiv)</div>
                    <div className="text-xs text-muted-foreground">Research paper on ML for battery degradation</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Download Full Analysis</div>
                    <div className="text-xs text-muted-foreground">Complete technical report and methodology</div>
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

export default BatteryRUL;
