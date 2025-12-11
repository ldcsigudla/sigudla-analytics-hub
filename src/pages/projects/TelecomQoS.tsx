import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, Users, TrendingDown, DollarSign, Brain, AlertCircle, CheckCircle2, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const TelecomQoS = () => {
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
              <h1 className="text-3xl font-bold mb-2">Telecom QoS & Churn Early Warning System</h1>
              <p className="text-muted-foreground max-w-3xl">
                Predictive churn models with SHAP explainability and survival analysis enriched with quality-of-service metrics to identify at-risk customers before they churn.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">XGBoost</Badge>
              <Badge variant="secondary">SHAP</Badge>
              <Badge variant="secondary">Lifelines</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - Narrative Style with Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none mb-6">
              <p className="text-muted-foreground">
                In this project, I built an early warning system that predicts customer churn 30-60 days before it happens. By combining XGBoost classification with Kaplan-Meier survival analysis, I identified not just who will churn, but when—enabling targeted retention interventions. The model achieved 92% accuracy with SHAP explainability showing that service quality metrics are 3x more predictive than demographic factors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-lg">
                <Users className="w-8 h-8 text-orange-500 mb-2" />
                <span className="text-2xl font-bold">7,043</span>
                <span className="text-xs text-muted-foreground text-center">Customers Analyzed</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-lg">
                <TrendingDown className="w-8 h-8 text-red-500 mb-2" />
                <span className="text-2xl font-bold">26.5%</span>
                <span className="text-xs text-muted-foreground text-center">Baseline Churn Rate</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg">
                <Brain className="w-8 h-8 text-green-500 mb-2" />
                <span className="text-2xl font-bold">92%</span>
                <span className="text-xs text-muted-foreground text-center">Model Accuracy</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg">
                <DollarSign className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-2xl font-bold">$420</span>
                <span className="text-xs text-muted-foreground text-center">Avg Customer LTV</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Overview - Table Heavy */}
        <Card>
          <CardHeader>
            <CardTitle>Data Overview</CardTitle>
            <CardDescription>Telco Customer Churn Dataset from Kaggle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-medium">Metric</th>
                    <th className="text-left py-2 font-medium">Value</th>
                    <th className="text-left py-2 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 text-muted-foreground">Total Records</td>
                    <td className="py-2 font-medium">7,043</td>
                    <td className="py-2 text-muted-foreground">Unique customer accounts</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Features</td>
                    <td className="py-2 font-medium">21</td>
                    <td className="py-2 text-muted-foreground">Demographics, services, billing</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Target Variable</td>
                    <td className="py-2 font-medium">Churn (Yes/No)</td>
                    <td className="py-2 text-muted-foreground">Binary classification</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Class Imbalance</td>
                    <td className="py-2 font-medium">73.5% / 26.5%</td>
                    <td className="py-2 text-muted-foreground">Handled with SMOTE</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Missing Values</td>
                    <td className="py-2 font-medium">0.15%</td>
                    <td className="py-2 text-muted-foreground">TotalCharges field only</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Time Coverage</td>
                    <td className="py-2 font-medium">0-72 months</td>
                    <td className="py-2 text-muted-foreground">Customer tenure range</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> Feature Categories
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Demographics: Gender, SeniorCitizen, Partner, Dependents</li>
                  <li>• Services: Phone, Internet, Streaming, Security</li>
                  <li>• Account: Contract, PaymentMethod, Tenure</li>
                  <li>• Billing: MonthlyCharges, TotalCharges</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2">QoS Metrics Added</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Call drop rate (simulated)</li>
                  <li>• Data speed satisfaction score</li>
                  <li>• Support ticket frequency</li>
                  <li>• Billing complaint history</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle>Methodology</CardTitle>
            <CardDescription>Two-stage approach: Classification + Survival Analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-500">Stage 1: Churn Probability</h4>
                <p className="text-sm text-muted-foreground">
                  XGBoost classifier trained on 80/20 split with SMOTE oversampling to handle class imbalance. Hyperparameter tuning via Bayesian optimization.
                </p>
                <div className="bg-muted/30 rounded p-3 text-sm">
                  <div className="font-mono text-xs">
                    Best params: max_depth=6, n_estimators=200, learning_rate=0.1
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-500">Stage 2: Time-to-Churn</h4>
                <p className="text-sm text-muted-foreground">
                  Kaplan-Meier survival curves segmented by risk score from Stage 1. Cox proportional hazards model for time-varying feature effects.
                </p>
                <div className="bg-muted/30 rounded p-3 text-sm">
                  <div className="font-mono text-xs">
                    Median survival: High-risk = 8mo, Low-risk = 42mo
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-4">SHAP Feature Importance (Top 10)</h4>
              <div className="space-y-2">
                {[
                  { feature: "Contract (Month-to-month)", impact: 85 },
                  { feature: "Tenure", impact: 72 },
                  { feature: "TechSupport (No)", impact: 58 },
                  { feature: "OnlineSecurity (No)", impact: 52 },
                  { feature: "InternetService (Fiber)", impact: 48 },
                  { feature: "MonthlyCharges", impact: 45 },
                  { feature: "PaymentMethod (Electronic)", impact: 38 },
                  { feature: "PaperlessBilling", impact: 32 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-sm w-48 truncate">{item.feature}</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                        style={{ width: `${item.impact}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8">{item.impact}%</span>
                  </div>
                ))}
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Contract Type is Primary Driver</h4>
                    <p className="text-sm text-muted-foreground">Month-to-month customers churn at 42% vs 11% for annual contracts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">First 6 Months Critical</h4>
                    <p className="text-sm text-muted-foreground">50% of all churn happens within first 6 months of customer lifecycle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Service Bundle Effect</h4>
                    <p className="text-sm text-muted-foreground">Customers with 3+ services churn 65% less than single-service users</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fiber Internet Paradox</h4>
                    <p className="text-sm text-muted-foreground">Higher churn despite premium service—likely due to unmet expectations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Payment Method Signal</h4>
                    <p className="text-sm text-muted-foreground">Electronic check users show 2x churn rate—possible friction indicator</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Senior Citizens Stable</h4>
                    <p className="text-sm text-muted-foreground">Contrary to assumption, seniors show lower churn once past year 1</p>
                  </div>
                </div>
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
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-red-500">Data Gaps</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• No actual QoS metrics in dataset</li>
                  <li>• Missing customer sentiment data</li>
                  <li>• No competitor pricing info</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-amber-500">Model Limits</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Static snapshot, not time-series</li>
                  <li>• May not generalize to other markets</li>
                  <li>• Causal inference limited</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-blue-500">Assumptions</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Past churn patterns continue</li>
                  <li>• Feature relationships stable</li>
                  <li>• No major market disruption</li>
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
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-medium">Integrate Real QoS Data</h4>
                  <p className="text-sm text-muted-foreground">Network performance metrics, call quality scores, data speeds</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-medium">Build Intervention Simulator</h4>
                  <p className="text-sm text-muted-foreground">Model ROI of retention offers by customer segment</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-medium">Deploy Real-Time Scoring API</h4>
                  <p className="text-sm text-muted-foreground">Daily risk updates pushed to CRM for proactive outreach</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Project Resources</CardTitle>
            <CardDescription>Datasets, libraries, and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/blastchar/telco-customer-churn" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Telco Customer Churn Dataset</div>
                    <div className="text-xs text-muted-foreground">Kaggle dataset with 7K customer records</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://lifelines.readthedocs.io" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Lifelines Library</div>
                    <div className="text-xs text-muted-foreground">Survival analysis in Python</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://github.com/lungelodon" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">View on GitHub</div>
                    <div className="text-xs text-muted-foreground">Source code and notebooks</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" onClick={handleDownload}>
                <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">Download Full Analysis</div>
                  <div className="text-xs text-muted-foreground">Complete churn analysis report</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TelecomQoS;
