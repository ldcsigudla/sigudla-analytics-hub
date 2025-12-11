import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, Battery, Zap, Clock, TrendingUp, Sun, Moon, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const MicrogridDispatch = () => {
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

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - Text-First Narrative Style */}
        <Card className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              In this project, I developed an energy dispatch optimization system for commercial microgrids. The core challenge was minimizing demand charges—the expensive peak-usage fees that can constitute 30-50% of a commercial building's electricity bill. By forecasting load patterns with Facebook Prophet and optimizing battery charge/discharge schedules with linear programming, I achieved a 32% reduction in monthly energy costs.
            </p>
            <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-500/5 py-3 rounded-r">
              <p className="text-sm font-medium">
                The system pays for itself in 18 months through demand charge reduction alone, with additional revenue potential from grid services.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics - Horizontal Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Battery className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
              <div className="text-3xl font-bold">500</div>
              <div className="text-sm text-muted-foreground">kWh Battery Capacity</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <div className="text-3xl font-bold">32%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 mx-auto mb-2 text-amber-500" />
              <div className="text-3xl font-bold">18</div>
              <div className="text-sm text-muted-foreground">Month ROI</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Zap className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <div className="text-3xl font-bold">94%</div>
              <div className="text-sm text-muted-foreground">Forecast Accuracy</div>
            </CardContent>
          </Card>
        </div>

        {/* Data Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Data Sources & Inputs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-500" /> Load Data (PJM)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Time Range</span>
                    <span>Jan 2018 - Dec 2023</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Resolution</span>
                    <span>Hourly intervals</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Building Types</span>
                    <span>Office, Retail, Industrial</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Peak Load Range</span>
                    <span>200 - 800 kW</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Moon className="w-4 h-4 text-blue-500" /> Tariff Structure
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Energy Rate</span>
                    <span>$0.08 - $0.15 / kWh</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">Demand Charge</span>
                    <span>$15 - $25 / kW-month</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">TOU Periods</span>
                    <span>On-peak 12-6pm</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Rate Structure</span>
                    <span>Commercial C&I</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology - Pipeline Style */}
        <Card>
          <CardHeader>
            <CardTitle>Optimization Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 border rounded-lg p-4 relative">
                <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-semibold text-emerald-500">FORECAST</div>
                <h4 className="font-medium mt-2 mb-2">Load Prediction</h4>
                <p className="text-sm text-muted-foreground">Prophet model with weather regressors forecasts 24-72 hour load profile</p>
                <div className="mt-2 text-xs bg-muted/50 rounded p-2 font-mono">MAPE: 5.8%</div>
              </div>
              <div className="hidden md:flex items-center text-muted-foreground">→</div>
              <div className="flex-1 border rounded-lg p-4 relative">
                <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-semibold text-blue-500">OPTIMIZE</div>
                <h4 className="font-medium mt-2 mb-2">Dispatch Schedule</h4>
                <p className="text-sm text-muted-foreground">LP solver minimizes cost function over planning horizon</p>
                <div className="mt-2 text-xs bg-muted/50 rounded p-2 font-mono">Solver: HiGHS</div>
              </div>
              <div className="hidden md:flex items-center text-muted-foreground">→</div>
              <div className="flex-1 border rounded-lg p-4 relative">
                <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-semibold text-purple-500">EXECUTE</div>
                <h4 className="font-medium mt-2 mb-2">Real-Time Control</h4>
                <p className="text-sm text-muted-foreground">MPC adjusts dispatch based on actual vs predicted load</p>
                <div className="mt-2 text-xs bg-muted/50 rounded p-2 font-mono">Update: 15 min</div>
              </div>
            </div>

            <div className="mt-6 bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Optimization Objective</h4>
              <div className="font-mono text-sm bg-background rounded p-3 overflow-x-auto">
                minimize: Σ(energy_cost × grid_draw) + demand_charge × max(grid_draw) - battery_revenue
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Subject to: battery SOC limits, charge/discharge rate constraints, grid import limits
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle>Results & Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Peak Demand Reduction", before: "620 kW", after: "480 kW", change: "-23%" },
                { label: "Monthly Demand Charges", before: "$15,500", after: "$12,000", change: "-23%" },
                { label: "Energy Arbitrage Savings", before: "-", after: "$1,200/mo", change: "New" },
                { label: "Total Monthly Savings", before: "-", after: "$4,700/mo", change: "32%" },
              ].map((row, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b last:border-0">
                  <span className="font-medium">{row.label}</span>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{row.before}</span>
                    <span>→</span>
                    <span className="font-semibold text-emerald-500">{row.after}</span>
                    <Badge variant={row.change.startsWith("-") || row.change === "32%" ? "default" : "secondary"} className="w-16 justify-center">
                      {row.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card>
          <CardHeader>
            <CardTitle>Limitations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Battery degradation costs not included in optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Assumes perfect forecast accuracy for planning</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>No renewable generation integration modeled</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Grid services revenue potential not captured</span>
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
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Add Solar PV Integration</h4>
                  <p className="text-sm text-muted-foreground">Co-optimize battery with on-site generation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Model Battery Degradation</h4>
                  <p className="text-sm text-muted-foreground">Include cycle life in cost function</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Grid Services Revenue</h4>
                  <p className="text-sm text-muted-foreground">Frequency regulation, demand response</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Multi-Building Portfolio</h4>
                  <p className="text-sm text-muted-foreground">Fleet optimization across sites</p>
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

export default MicrogridDispatch;
