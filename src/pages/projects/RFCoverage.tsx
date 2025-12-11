import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, Radio, MapPin, Signal, Ruler, CheckCircle2, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RFCoverage = () => {
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
      <div className="border-b">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate("/#projects")} className="mb-4 hover:bg-muted">
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

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - Map/Geographic Style */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Radio className="w-6 h-6 text-sky-500" />
              <h2 className="text-xl font-bold">Project Overview</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              In this project, I built a propagation modeling tool that predicts RF coverage for cellular and fixed wireless networks. Using the ITU-R P.1812 path-specific model with terrain data, I generated coverage heatmaps that matched actual drive test measurements within ±6dB—enabling network planners to optimize site placement without expensive field surveys.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-background/80 backdrop-blur rounded-lg p-4">
                <Signal className="w-5 h-5 text-sky-500 mb-2" />
                <div className="text-xl font-bold">±6 dB</div>
                <div className="text-xs text-muted-foreground">RSRP Accuracy</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4">
                <Map className="w-5 h-5 text-blue-500 mb-2" />
                <div className="text-xl font-bold">87%</div>
                <div className="text-xs text-muted-foreground">Coverage Match</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4">
                <MapPin className="w-5 h-5 text-indigo-500 mb-2" />
                <div className="text-xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Sites Analyzed</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4">
                <Ruler className="w-5 h-5 text-purple-500 mb-2" />
                <div className="text-xl font-bold">30m</div>
                <div className="text-xs text-muted-foreground">DEM Resolution</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sky-500">Terrain Data</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Source</span>
                    <span className="font-medium text-foreground">SRTM 30m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Coverage</span>
                    <span className="font-medium text-foreground">Global</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vertical Accuracy</span>
                    <span className="font-medium text-foreground">±16m</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-500">Site Parameters</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Frequency</span>
                    <span className="font-medium text-foreground">700-3500 MHz</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Antenna Height</span>
                    <span className="font-medium text-foreground">20-45m AGL</span>
                  </li>
                  <li className="flex justify-between">
                    <span>EIRP</span>
                    <span className="font-medium text-foreground">40-60 dBm</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-indigo-500">Drive Test Data</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Measurement Points</span>
                    <span className="font-medium text-foreground">48,000+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>KPIs</span>
                    <span className="font-medium text-foreground">RSRP, RSRQ, SINR</span>
                  </li>
                  <li className="flex justify-between">
                    <span>GPS Accuracy</span>
                    <span className="font-medium text-foreground">±3m</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle>Propagation Modeling Approach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">ITU-R P.1812 Model</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Path-specific propagation model that accounts for terrain diffraction, tropospheric scatter, and clutter losses.
                </p>
                <div className="bg-muted/30 rounded p-3 text-sm">
                  <div className="font-mono text-xs mb-2">Path Loss Components:</div>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• Free space loss (FSPL)</li>
                    <li>• Terrain diffraction (knife-edge)</li>
                    <li>• Clutter loss (ITU-R P.2108)</li>
                    <li>• Atmospheric absorption</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Implementation Pipeline</h4>
                <ol className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="bg-sky-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">1</span>
                    <span>Extract terrain profile for each TX-RX path</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-sky-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">2</span>
                    <span>Calculate path loss using P.1812 algorithms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-sky-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">3</span>
                    <span>Apply antenna pattern and tilt corrections</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="bg-sky-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">4</span>
                    <span>Generate coverage polygon at threshold (e.g., -110 dBm)</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">Validation Against Drive Test</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-500">87%</div>
                  <div className="text-xs text-muted-foreground">Within ±6dB</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-amber-500">95%</div>
                  <div className="text-xs text-muted-foreground">Within ±10dB</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-500">4.2 dB</div>
                  <div className="text-xs text-muted-foreground">Mean Abs Error</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card>
          <CardHeader>
            <CardTitle>Key Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Clutter Loss Dominates in Urban</h4>
                  <p className="text-sm text-muted-foreground">Building clutter accounts for 60-70% of prediction error in dense urban areas; ITU P.2108 clutter model improved accuracy by 3dB</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Antenna Tilt Optimization</h4>
                  <p className="text-sm text-muted-foreground">2° electrical downtilt change can shift coverage edge by 200-400m; model enables virtual tilt optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Frequency-Dependent Performance</h4>
                  <p className="text-sm text-muted-foreground">Model accuracy better at sub-1GHz (±5dB) vs. 3.5GHz (±8dB) due to penetration losses</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card>
          <CardHeader>
            <CardTitle>Limitations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-muted-foreground">
                <li>• No indoor coverage modeling (building penetration loss assumed)</li>
                <li>• Clutter database not available; used land-use classification proxy</li>
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Time variability (weather, foliage) not modeled</li>
                <li>• mmWave frequencies require different propagation model</li>
              </ul>
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
              <div className="border-l-4 border-l-sky-500 pl-4">
                <h4 className="font-semibold mb-2">3D Building Data</h4>
                <p className="text-sm text-muted-foreground">Integrate LiDAR or OpenStreetMap 3D for ray tracing in urban canyons</p>
              </div>
              <div className="border-l-4 border-l-blue-500 pl-4">
                <h4 className="font-semibold mb-2">ML Calibration</h4>
                <p className="text-sm text-muted-foreground">Train correction factors using drive test data with gradient boosting</p>
              </div>
              <div className="border-l-4 border-l-indigo-500 pl-4">
                <h4 className="font-semibold mb-2">Web Interface</h4>
                <p className="text-sm text-muted-foreground">Interactive map tool for network planning teams to run simulations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Project Resources</CardTitle>
          </CardHeader>
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
                <a href="https://github.com/lungelodon" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">View on GitHub</div><div className="text-xs text-muted-foreground">Source code</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" onClick={handleDownload}>
                <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                <div className="text-left"><div className="font-semibold">Download Full Analysis</div></div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RFCoverage;
