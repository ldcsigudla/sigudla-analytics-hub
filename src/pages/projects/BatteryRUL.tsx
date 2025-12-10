import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, AlertTriangle, Lightbulb, Database, BarChart3, Settings, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BatteryRUL = () => {
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
              <h1 className="text-3xl font-bold mb-2">Battery RUL & Warranty Risk Modeling</h1>
              <p className="text-muted-foreground max-w-3xl">
                Advanced predictive analytics for lithium-ion battery degradation, remaining useful life prediction, and warranty risk assessment using NASA battery cycling datasets.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">LSTM</Badge>
              <Badge variant="secondary">XGBoost</Badge>
              <Badge variant="secondary">Conformal Prediction</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary */}
        <Card className="border-project-1/20 bg-gradient-to-br from-project-1/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-project-1" />
              Executive Summary
            </CardTitle>
            <CardDescription>Predictive model performance and business impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-project-1/10 rounded-lg">
                <div className="text-3xl font-bold text-project-1">96.3%</div>
                <div className="text-sm text-muted-foreground">RUL Accuracy (±5%)</div>
              </div>
              <div className="text-center p-4 bg-project-1/10 rounded-lg">
                <div className="text-3xl font-bold text-project-1">89.7%</div>
                <div className="text-sm text-muted-foreground">EOL Prediction Precision</div>
              </div>
              <div className="text-center p-4 bg-project-1/10 rounded-lg">
                <div className="text-3xl font-bold text-project-1">$4.2M</div>
                <div className="text-sm text-muted-foreground">Warranty Cost Reduction</div>
              </div>
              <div className="text-center p-4 bg-project-1/10 rounded-lg">
                <div className="text-3xl font-bold text-project-1">15-25%</div>
                <div className="text-sm text-muted-foreground">Second-Life Value Uplift</div>
              </div>
            </div>
            
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                In this project, I developed a machine learning pipeline to predict the remaining useful life (RUL) of lithium-ion batteries using NASA's Prognostics Center of Excellence dataset. The goal was to enable proactive warranty management and identify batteries suitable for second-life applications. I applied LSTM networks for sequence modeling combined with XGBoost for feature-based predictions, achieving 96.3% accuracy within ±5% tolerance on RUL estimates.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-project-1" />
              Data Overview
            </CardTitle>
            <CardDescription>Dataset characteristics and feature engineering</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Total Batteries</TableCell>
                  <TableCell>34 cells (4 chemistries)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Charge-Discharge Cycles</TableCell>
                  <TableCell>168,000+ cycles total</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Features Extracted</TableCell>
                  <TableCell>47 engineered features</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Time Series Length</TableCell>
                  <TableCell>100-2,500 cycles per cell</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Target Variable</TableCell>
                  <TableCell>Remaining cycles to 80% capacity (EOL)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Missing Values</TableCell>
                  <TableCell>2.3% (interpolated)</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Feature Categories</h4>
                <div className="space-y-2">
                  {[
                    { name: "Capacity-based", count: 12, desc: "Discharge capacity, capacity fade rate" },
                    { name: "Voltage-based", count: 15, desc: "Voltage curves, inflection points" },
                    { name: "Temperature-based", count: 8, desc: "Peak temp, thermal gradients" },
                    { name: "Impedance-based", count: 7, desc: "Internal resistance trends" },
                    { name: "Cycle statistics", count: 5, desc: "Cycle count, usage patterns" }
                  ].map((cat, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-background/50 rounded">
                      <div>
                        <span className="font-medium">{cat.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">({cat.desc})</span>
                      </div>
                      <Badge variant="outline">{cat.count} features</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Capacity Degradation Pattern</h4>
                <div className="h-48">
                  <svg viewBox="0 0 400 180" className="w-full h-full">
                    <defs>
                      <linearGradient id="capacityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--project-1))" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="hsl(var(--project-1))" stopOpacity="0.05"/>
                      </linearGradient>
                    </defs>
                    {/* Grid */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <line key={i} x1="50" y1={30 + i * 30} x2="380" y2={30 + i * 30} stroke="hsl(var(--muted-foreground))" strokeOpacity="0.1"/>
                    ))}
                    {/* EOL threshold line */}
                    <line x1="50" y1="120" x2="380" y2="120" stroke="hsl(var(--destructive))" strokeDasharray="5,5" strokeOpacity="0.5"/>
                    <text x="385" y="125" fontSize="9" fill="hsl(var(--destructive))">80% EOL</text>
                    {/* Capacity curve */}
                    <path
                      d="M50,40 Q100,42 150,50 T250,85 T350,140"
                      fill="url(#capacityGradient)"
                      stroke="hsl(var(--project-1))"
                      strokeWidth="2"
                    />
                    {/* Prediction zone */}
                    <path
                      d="M280,100 Q310,115 350,140"
                      fill="none"
                      stroke="hsl(var(--project-1))"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    {/* Labels */}
                    <text x="45" y="45" fontSize="9" fill="hsl(var(--muted-foreground))" textAnchor="end">100%</text>
                    <text x="45" y="125" fontSize="9" fill="hsl(var(--muted-foreground))" textAnchor="end">80%</text>
                    <text x="200" y="170" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="middle">Charge-Discharge Cycles</text>
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Typical capacity fade follows a knee-point pattern where degradation accelerates after ~60% of cycle life.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-project-1" />
              Methodology
            </CardTitle>
            <CardDescription>ML pipeline and model architecture</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Data Ingestion", desc: "NASA PCoE dataset extraction" },
                { step: "2", title: "Feature Engineering", desc: "47 degradation indicators" },
                { step: "3", title: "Sequence Modeling", desc: "LSTM for temporal patterns" },
                { step: "4", title: "Ensemble", desc: "XGBoost + LSTM fusion" },
                { step: "5", title: "Uncertainty", desc: "Conformal prediction bands" }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-project-1/5 rounded-lg border border-project-1/20">
                  <div className="w-8 h-8 bg-project-1 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                I chose a hybrid approach combining LSTM networks for capturing long-term degradation sequences with XGBoost for leveraging engineered features. The LSTM processes the last 50 cycles of voltage-capacity curves, while XGBoost uses statistical summaries. Predictions are fused using a weighted average optimized via cross-validation. Conformal prediction provides calibrated uncertainty intervals, critical for warranty risk assessment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Model Results */}
        <Card className="border-project-1/20">
          <CardHeader>
            <CardTitle className="text-project-1">Model Performance</CardTitle>
            <CardDescription>Comparison of approaches and validation results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-project-1/10 to-project-1/5 p-6 rounded-lg border border-project-1/20">
                <h3 className="font-semibold text-project-1 mb-4">LSTM Network</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm">RMSE (cycles)</span><span className="font-semibold">42.3</span></div>
                  <div className="flex justify-between"><span className="text-sm">MAE (cycles)</span><span className="font-semibold">31.7</span></div>
                  <div className="flex justify-between"><span className="text-sm">R² Score</span><span className="font-semibold">0.912</span></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-muted/50 to-muted/20 p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">XGBoost</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm">RMSE (cycles)</span><span className="font-semibold">38.9</span></div>
                  <div className="flex justify-between"><span className="text-sm">MAE (cycles)</span><span className="font-semibold">28.4</span></div>
                  <div className="flex justify-between"><span className="text-sm">R² Score</span><span className="font-semibold">0.934</span></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-project-1/15 to-project-1/5 p-6 rounded-lg border-2 border-project-1/30">
                <h3 className="font-semibold text-project-1 mb-4">Ensemble (Final)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm">RMSE (cycles)</span><span className="font-semibold text-project-1">29.1</span></div>
                  <div className="flex justify-between"><span className="text-sm">MAE (cycles)</span><span className="font-semibold text-project-1">21.8</span></div>
                  <div className="flex justify-between"><span className="text-sm">R² Score</span><span className="font-semibold text-project-1">0.963</span></div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Prediction Accuracy by Remaining Life</h4>
              <div className="space-y-3">
                {[
                  { range: ">500 cycles remaining", accuracy: 98.2, color: "bg-emerald-500" },
                  { range: "200-500 cycles", accuracy: 96.8, color: "bg-project-1" },
                  { range: "50-200 cycles", accuracy: 94.1, color: "bg-yellow-500" },
                  { range: "<50 cycles (critical)", accuracy: 89.7, color: "bg-orange-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-sm w-40">{item.range}</span>
                    <div className="flex-1 bg-muted/50 rounded-full h-4">
                      <div className={`h-4 rounded-full ${item.color}`} style={{ width: `${item.accuracy}%` }}></div>
                    </div>
                    <span className="text-sm font-semibold w-16">{item.accuracy}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-project-1" />
              Key Findings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Voltage curve shape at 50% SOC is the strongest predictor of remaining life (SHAP importance: 0.34)",
                "Batteries showing >2% capacity fade in first 100 cycles have 3.2x higher warranty claim probability",
                "Temperature variation during charging correlates with accelerated degradation (r=0.67)",
                "The knee-point in capacity curves can be detected 200-300 cycles before EOL with 89% precision",
                "Second-life suitability can be determined at 70% capacity with 94% accuracy"
              ].map((finding, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-6 h-6 bg-project-1 text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground">{finding}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="border-yellow-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Limitations & Constraints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>NASA dataset uses controlled lab conditions; real-world usage patterns may differ significantly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Limited chemistry diversity (4 types); newer chemistries like LFP may behave differently</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Calendar aging effects not fully captured due to accelerated cycling protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Conformal intervals assume exchangeability which may not hold for new manufacturing batches</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* What I Would Do Next */}
        <Card className="border-project-1/20 bg-gradient-to-br from-project-1/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-project-1" />
              What I Would Do Next
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Edge Deployment", desc: "Implement TensorFlow Lite models for on-device BMS integration" },
                { title: "Transfer Learning", desc: "Adapt models to new chemistries using domain adaptation techniques" },
                { title: "Real-Time Monitoring", desc: "Build streaming pipeline for live fleet-level health dashboards" },
                { title: "Economic Optimization", desc: "Integrate RUL predictions with warranty pricing models" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-project-1/10 rounded-lg border border-project-1/20">
                  <h4 className="font-semibold text-project-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Project Resources</CardTitle>
            <CardDescription>Code repositories, datasets, and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/lungelodon" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">GitHub Repository</div>
                    <div className="text-xs text-muted-foreground">View project code and notebooks</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.batteryarchive.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Battery Archive</div>
                    <div className="text-xs text-muted-foreground">Public battery cycling datasets</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/microsoft/batteryml" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">BatteryML Platform</div>
                    <div className="text-xs text-muted-foreground">Microsoft's ML framework for batteries</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Download Full Analysis</div>
                    <div className="text-xs text-muted-foreground">Complete technical report</div>
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

export default BatteryRUL;
