import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FlightRouting = () => {
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
              <h1 className="text-3xl font-bold mb-2">Flight Route Optimization with Weather & Traffic</h1>
              <p className="text-muted-foreground max-w-3xl">
                Intelligent path planning system combining OpenSky air traffic data with NOAA weather conditions for risk-aware drone routing and collision avoidance.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">A* Pathfinding</Badge>
              <Badge variant="secondary">OpenSky API</Badge>
              <Badge variant="secondary">NOAA CDO</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Route optimization performance and safety impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">34%</div>
                <div className="text-sm text-muted-foreground">Route Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-3">89.2%</div>
                <div className="text-sm text-muted-foreground">Collision Avoidance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-3">$3.8M</div>
                <div className="text-sm text-muted-foreground">Annual Fuel Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-3">96%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Links */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Project Resources</CardTitle>
            <CardDescription>Data sources, APIs, and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://openskynetwork.github.io/opensky-api" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">OpenSky Network API</div>
                    <div className="text-xs text-muted-foreground">Live and historical air traffic ADS-B data</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.ncei.noaa.gov/cdo-web" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">NOAA Climate Data Online</div>
                    <div className="text-xs text-muted-foreground">Weather data API with precipitation & wind</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/openskynetwork/osky-sample" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">OpenSky Sample Data</div>
                    <div className="text-xs text-muted-foreground">Sample datasets and API client examples</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/egehanyorulmaz/nasa-turbofan-engine-rul-prediction" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">NASA CMAPSS Dataset</div>
                    <div className="text-xs text-muted-foreground">Engine degradation for predictive maintenance</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://ntrs.nasa.gov/api/citations/20230017337/downloads" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">NASA UTM Traffic Analysis</div>
                    <div className="text-xs text-muted-foreground">Urban air mobility ConOps and tools</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Download Full Analysis</div>
                    <div className="text-xs text-muted-foreground">Technical report with simulations</div>
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

export default FlightRouting;
