import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, Plane, Wind, AlertTriangle, Clock, CheckCircle2, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const FlightRouting = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    toast.loading("Preparing download...", { id: "download" });
    setTimeout(() => {
      toast.success("Download complete!", { id: "download" });
      window.open("/assets/Lungelo_Don_Sigudla_CV.pdf", "_blank");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/#projects")}
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

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - Timeline Style */}
        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-cyan-500" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              In this project, I developed a real-time flight route optimization system that integrates live air traffic data from OpenSky Network with weather conditions from NOAA. The system uses A* pathfinding with dynamic cost functions to generate safe, efficient routes for drone operations while avoiding congested airspace and adverse weather conditions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-cyan-500/10 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-cyan-500" />
                <div className="text-2xl font-bold">34%</div>
                <div className="text-xs text-muted-foreground">Faster Routes</div>
              </div>
              <div className="bg-green-500/10 rounded-lg p-4 text-center">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold">Zero</div>
                <div className="text-xs text-muted-foreground">Collision Events</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-4 text-center">
                <Wind className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                <div className="text-2xl font-bold">6hr</div>
                <div className="text-xs text-muted-foreground">Weather Lookahead</div>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-4 text-center">
                <Target className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                <div className="text-2xl font-bold">96%</div>
                <div className="text-xs text-muted-foreground">On-Time Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Data Sources & Integration</CardTitle>
            <CardDescription>Multi-source data fusion for route planning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Plane className="w-4 h-4" /> Air Traffic Data (OpenSky)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Coverage Area</span>
                    <span>Global ADS-B network</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Update Frequency</span>
                    <span>Every 5 seconds</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Aircraft Tracked</span>
                    <span>~180,000 daily</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Data Points</span>
                    <span>Position, altitude, velocity, heading</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Wind className="w-4 h-4" /> Weather Data (NOAA CDO)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Forecast Horizon</span>
                    <span>6 hours ahead</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Resolution</span>
                    <span>3km x 3km grid</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Parameters</span>
                    <span>Wind, precipitation, visibility</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Update Cycle</span>
                    <span>Hourly</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle>Methodology: Dynamic A* Pathfinding</CardTitle>
            <CardDescription>How the routing algorithm adapts in real-time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <div className="text-lg font-semibold text-cyan-500 mb-2">Step 1</div>
                <h4 className="font-medium mb-2">Environment Modeling</h4>
                <p className="text-sm text-muted-foreground">
                  Construct 3D grid representation of airspace with traffic density and weather hazard layers updated in real-time.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-lg font-semibold text-cyan-500 mb-2">Step 2</div>
                <h4 className="font-medium mb-2">Cost Function Design</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-objective cost combining distance, fuel consumption, collision risk, and weather severity with configurable weights.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-lg font-semibold text-cyan-500 mb-2">Step 3</div>
                <h4 className="font-medium mb-2">Path Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  A* search with dynamic replanning triggered by traffic updates or weather changes exceeding thresholds.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Cost Function Components</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Distance Cost (35%)</span>
                    <span>Euclidean + altitude changes</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Collision Risk (30%)</span>
                    <span>Proximity to traffic × velocity</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Weather Penalty (25%)</span>
                    <span>Wind + precipitation severity</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Airspace Restrictions (10%)</span>
                    <span>No-fly zones + TFRs</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-500 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Improvements Over Baseline
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Route efficiency improved by 34% compared to direct-path planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Zero near-miss incidents in 10,000+ simulated flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Weather-related delays reduced by 67%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Fuel consumption optimized with altitude-aware routing</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-amber-500 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Challenges Encountered
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">API rate limits required implementing request caching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Weather forecast uncertainty increases beyond 3-hour horizon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Real-time replanning adds computational overhead</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card>
          <CardHeader>
            <CardTitle>Limitations & Constraints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Data Limitations</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• OpenSky coverage gaps in remote areas</li>
                  <li>• Weather forecast accuracy degrades after 3 hours</li>
                  <li>• No real-time turbulence data integration</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Model Assumptions</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Aircraft follow predicted trajectories</li>
                  <li>• Weather conditions remain within forecast bounds</li>
                  <li>• No sudden airspace closures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What I Would Do Next */}
        <Card>
          <CardHeader>
            <CardTitle>What I Would Do Next</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-l-2 border-l-cyan-500 pl-4">
                <h4 className="font-semibold mb-2">Short Term</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Add turbulence prediction layer</li>
                  <li>• Implement multi-drone coordination</li>
                  <li>• Build real-time monitoring dashboard</li>
                </ul>
              </div>
              <div className="border-l-2 border-l-amber-500 pl-4">
                <h4 className="font-semibold mb-2">Medium Term</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Integrate with UTM systems</li>
                  <li>• Add machine learning for traffic prediction</li>
                  <li>• Battery/fuel optimization modeling</li>
                </ul>
              </div>
              <div className="border-l-2 border-l-purple-500 pl-4">
                <h4 className="font-semibold mb-2">Long Term</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Deploy as microservice API</li>
                  <li>• Regulatory compliance automation</li>
                  <li>• Integration with delivery fleet management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
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
                <a href="https://github.com/lungelodon" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">View on GitHub</div>
                    <div className="text-xs text-muted-foreground">Source code and documentation</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" onClick={handleDownload}>
                <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">Download Full Analysis</div>
                  <div className="text-xs text-muted-foreground">Technical report with simulations</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlightRouting;
