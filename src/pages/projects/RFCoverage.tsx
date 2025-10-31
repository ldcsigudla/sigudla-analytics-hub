import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RFCoverage = () => {
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
              <h1 className="text-3xl font-bold mb-2">RF Link Budget & Coverage Heatmap Modeling</h1>
              <p className="text-muted-foreground max-w-3xl">Radio frequency propagation modeling using ITU standards to generate predicted coverage heatmaps compared with real-world signal measurements.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">ITU P.1812</Badge>
              <Badge variant="secondary">GeoPandas</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <Card className="mb-8">
          <CardHeader><CardTitle>Executive Summary</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center"><div className="text-3xl font-bold text-primary">±6dB</div><div className="text-sm text-muted-foreground">RSRP Prediction Accuracy</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-2">87%</div><div className="text-sm text-muted-foreground">Coverage Match Rate</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-2">$1.2M</div><div className="text-sm text-muted-foreground">Site Survey Savings</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-2">40%</div><div className="text-sm text-muted-foreground">Planning Time Reduction</div></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Project Resources</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.itu.int/rec/R-REC-P.1812" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">ITU P.1812 Standard</div><div className="text-xs text-muted-foreground">Path-specific propagation prediction</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/igorauad/link-budget" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Link Budget Calculator</div><div className="text-xs text-muted-foreground">Open-source RF tools</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/zamojski/TowerCollector" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">TowerCollector</div><div className="text-xs text-muted-foreground">Collect drive test data</div></div>
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

export default RFCoverage;
