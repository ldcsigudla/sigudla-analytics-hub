import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MicrogridDispatch = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4 hover:bg-muted">
            <ArrowLeft className="w-4 h-4 mr-2" />Back to Portfolio
          </Button>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Microgrid Energy Dispatch & Demand Optimization</h1>
              <p className="text-muted-foreground max-w-3xl">Battery storage optimization forecasting building load and optimizing charge/discharge cycles to reduce demand charges with ROI calculator.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">PyPSA</Badge>
              <Badge variant="secondary">Prophet</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <Card className="mb-8">
          <CardHeader><CardTitle>Executive Summary</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center"><div className="text-3xl font-bold text-primary">32%</div><div className="text-sm text-muted-foreground">Cost Reduction</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-5">$2.4M</div><div className="text-sm text-muted-foreground">Annual Savings</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-5">18mo</div><div className="text-sm text-muted-foreground">ROI Period</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-5">94.2%</div><div className="text-sm text-muted-foreground">Forecast Accuracy</div></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Project Resources</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/pypsa-meets-earth/pypsa-earth" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">PyPSA-Earth</div><div className="text-xs text-muted-foreground">Grid optimization framework</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/robikscube/hourly-energy-consumption" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">PJM Energy Data</div><div className="text-xs text-muted-foreground">Hourly consumption datasets</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://akkudoktor-eos.readthedocs.io" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Akkudoktor EOS</div><div className="text-xs text-muted-foreground">Energy system simulator</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Download Full Analysis</div></div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MicrogridDispatch;
