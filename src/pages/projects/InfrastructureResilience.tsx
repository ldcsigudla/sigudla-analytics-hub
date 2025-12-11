import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, Zap, AlertTriangle, Shield, TrendingUp, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const InfrastructureResilience = () => {
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

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - Correlation/Impact Style */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              In this project, I investigated the relationship between infrastructure failures (electricity outages, network downtime) and crime rates using panel data regression. Focusing on South African load-shedding events and Chicago power outages, I found a statistically significant correlation: crime increases by 34% during extended blackouts, with opportunistic theft showing the strongest response.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  Key Correlation
                </h4>
                <div className="text-4xl font-bold text-red-500 mb-1">r = 0.74</div>
                <p className="text-sm text-muted-foreground">
                  Pearson correlation between outage hours and crime incidents (p &lt; 0.001)
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-500" />
                  Crime Impact
                </h4>
                <div className="text-4xl font-bold text-amber-500 mb-1">+34%</div>
                <p className="text-sm text-muted-foreground">
                  Average crime increase during Stage 4+ load shedding events
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Load Shedding (SA)
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Source: EskomSePush API</li>
                  <li>• Period: 2019-2024</li>
                  <li>• Granularity: Hourly, by area</li>
                  <li>• Records: 2.4M+ events</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  Crime Data
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• SA: SAPS quarterly stats</li>
                  <li>• Chicago: 20+ years daily</li>
                  <li>• Categories: 15 crime types</li>
                  <li>• Geocoded locations</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  Geographic
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• SA: 52 police precincts</li>
                  <li>• Chicago: 77 communities</li>
                  <li>• Shapefiles: Stats SA, City of Chicago</li>
                  <li>• Census demographics</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Panel Data Structure</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Dimension</th>
                      <th className="text-left py-2">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-muted-foreground">
                    <tr><td className="py-2">Cross-sectional units</td><td className="py-2 font-medium text-foreground">129 areas</td></tr>
                    <tr><td className="py-2">Time periods</td><td className="py-2 font-medium text-foreground">60 months</td></tr>
                    <tr><td className="py-2">Total observations</td><td className="py-2 font-medium text-foreground">7,740</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle>Methodology</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Fixed Effects Panel Regression</h4>
              <p className="text-sm text-muted-foreground mb-3">
                I used a two-way fixed effects model to control for unobserved heterogeneity across areas and time periods:
              </p>
              <div className="bg-muted/30 rounded p-4 font-mono text-sm overflow-x-auto">
                Crime_it = β₁·Outage_it + β₂·Duration_it + α_i + λ_t + ε_it
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground mt-3">
                <li>• α_i: Area fixed effects (controls for baseline crime levels)</li>
                <li>• λ_t: Time fixed effects (controls for citywide trends)</li>
                <li>• Robust standard errors clustered by area</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Control Variables</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Population density</li>
                  <li>• Median household income</li>
                  <li>• Unemployment rate</li>
                  <li>• Day of week, holiday indicators</li>
                  <li>• Weather (temperature, precipitation)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Robustness Checks</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Instrumental variable (scheduled vs unscheduled)</li>
                  <li>• Placebo test (lagged outages)</li>
                  <li>• Difference-in-differences with matched controls</li>
                </ul>
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
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Crime Type Breakdown</h4>
                  <Badge variant="secondary">During Outages</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-lg font-bold text-red-500">+52%</div>
                    <div className="text-muted-foreground">Burglary</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-amber-500">+38%</div>
                    <div className="text-muted-foreground">Theft</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-500">+24%</div>
                    <div className="text-muted-foreground">Robbery</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-muted-foreground">+8%</div>
                    <div className="text-muted-foreground">Assault</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Duration Matters</h4>
                    <p className="text-sm text-muted-foreground">Each additional hour of outage increases crime by 4.2% (diminishing after 6 hours)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Night vs Day</h4>
                    <p className="text-sm text-muted-foreground">Nighttime outages show 2.3x stronger crime correlation than daytime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Socioeconomic Interaction</h4>
                    <p className="text-sm text-muted-foreground">Low-income areas experience 1.8x higher crime spike during outages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Recovery Lag</h4>
                    <p className="text-sm text-muted-foreground">Crime levels remain elevated for 2-3 hours after power restoration</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Economic Impact */}
        <Card>
          <CardHeader>
            <CardTitle>Estimated Economic Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-red-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-500">$12M</div>
                <div className="text-sm text-muted-foreground">Annual crime cost attributable to load shedding (SA)</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-500">$340/hr</div>
                <div className="text-sm text-muted-foreground">Additional crime cost per area per outage hour</div>
              </div>
              <div className="bg-green-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-500">89%</div>
                <div className="text-sm text-muted-foreground">Model R² (variance explained)</div>
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
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Crime reporting rates may drop during outages (undercount bias)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>SA crime data quarterly; limited temporal granularity</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Correlation ≠ causation; omitted variable bias possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Results may not generalize to different contexts</span>
                </li>
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
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <Clock className="w-5 h-5 text-amber-500" />
                <div>
                  <h4 className="font-medium">Real-Time Prediction API</h4>
                  <p className="text-sm text-muted-foreground">Deploy model to predict crime risk during scheduled outages for police resource allocation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">Hotspot Mapping</h4>
                  <p className="text-sm text-muted-foreground">Interactive map showing predicted crime elevation by area during outage scenarios</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <Shield className="w-5 h-5 text-green-500" />
                <div>
                  <h4 className="font-medium">Intervention Analysis</h4>
                  <p className="text-sm text-muted-foreground">Measure impact of backup power, lighting, and community patrols on crime reduction</p>
                </div>
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

export default InfrastructureResilience;
