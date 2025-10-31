import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MarketplaceFraud = () => {
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
              <h1 className="text-3xl font-bold mb-2">Marketplace Fraud Detection & Dynamic Pricing</h1>
              <p className="text-muted-foreground max-w-3xl">Fraud detection with anomaly models and dynamic pricing simulation for marketplace credit usage optimization.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Isolation Forest</Badge>
              <Badge variant="secondary">PaySim</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <Card className="mb-8">
          <CardHeader><CardTitle>Executive Summary</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center"><div className="text-3xl font-bold text-primary">96.8%</div><div className="text-sm text-muted-foreground">Fraud Detection Rate</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-1">0.3%</div><div className="text-sm text-muted-foreground">False Positive Rate</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-1">$4.7M</div><div className="text-sm text-muted-foreground">Fraud Prevented</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-1">18%</div><div className="text-sm text-muted-foreground">Revenue Uplift</div></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Project Resources</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/ealaxi/paysim1" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">PaySim Dataset</div><div className="text-xs text-muted-foreground">Mobile money fraud simulation</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/code/kartik2112/fraud-detection-on-paysim-dataset" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">PaySim Notebooks</div><div className="text-xs text-muted-foreground">Fraud detection examples</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/vagifa/ethereum-frauddetection-dataset" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Ethereum Fraud Dataset</div><div className="text-xs text-muted-foreground">Blockchain transaction fraud</div></div>
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

export default MarketplaceFraud;
