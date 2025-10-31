import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NetworkCoverage = () => {
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
              <h1 className="text-3xl font-bold mb-2">Network Coverage Gap Analysis & Relay Optimization</h1>
              <p className="text-muted-foreground max-w-3xl">
                Geospatial optimization platform combining OpenCelliD tower data, Ookla speed measurements, and population density to identify coverage gaps and optimize drone relay placement for underserved areas.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">GeoPandas</Badge>
              <Badge variant="secondary">k-medoids</Badge>
              <Badge variant="secondary">QGIS</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Coverage analysis and optimization impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24.3%</div>
                <div className="text-sm text-muted-foreground">Population Underserved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-2">42</div>
                <div className="text-sm text-muted-foreground">Optimal Relay Sites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-2">187K</div>
                <div className="text-sm text-muted-foreground">People Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-2">$8.2M</div>
                <div className="text-sm text-muted-foreground">vs Traditional Towers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Links */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Project Resources</CardTitle>
            <CardDescription>Open datasets, tools, and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://opencellid.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">OpenCelliD Database</div>
                    <div className="text-xs text-muted-foreground">1.2M+ cell tower locations worldwide</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/teamookla/ookla-open-data" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Ookla Open Data</div>
                    <div className="text-xs text-muted-foreground">Speed test tiles, fixed & mobile networks</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.worldpop.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">WorldPop</div>
                    <div className="text-xs text-muted-foreground">High-resolution population density datasets</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/edwardoughton/pytal" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">pytal (Python Telecom Library)</div>
                    <div className="text-xs text-muted-foreground">Quantify digital infrastructure metrics</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.itu.int/rec/R-REC-P.1812" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">ITU P.1812 Propagation Model</div>
                    <div className="text-xs text-muted-foreground">Path-specific prediction method standard</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Download Full Analysis</div>
                    <div className="text-xs text-muted-foreground">Complete technical report & GIS maps</div>
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

export default NetworkCoverage;
