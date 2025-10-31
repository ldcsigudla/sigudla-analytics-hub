import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InfrastructureResilience = () => {
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
              <h1 className="text-3xl font-bold mb-2">Infrastructure Resilience & Crime Correlation Analysis</h1>
              <p className="text-muted-foreground max-w-3xl">Panel model correlating load-shedding, connectivity loss, and crime patterns to quantify infrastructure resilience impact on public safety.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Panel Data</Badge>
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
              <div className="text-center"><div className="text-3xl font-bold text-primary">0.74</div><div className="text-sm text-muted-foreground">Correlation Coefficient</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-3">34%</div><div className="text-sm text-muted-foreground">Crime Increase During Outages</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-3">$12M</div><div className="text-sm text-muted-foreground">Economic Impact</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-3">89%</div><div className="text-sm text-muted-foreground">Model Accuracy</div></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Project Resources</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/wangca01/datathon" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Load Shedding History (SA)</div><div className="text-xs text-muted-foreground">Eskom outage data</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/currie32/crimes-in-chicago" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Chicago Crime Data</div><div className="text-xs text-muted-foreground">20+ years of crime records</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.saps.gov.za/services/downloads" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">SAPS Crime Statistics</div><div className="text-xs text-muted-foreground">South African crime data</div></div>
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

export default InfrastructureResilience;
