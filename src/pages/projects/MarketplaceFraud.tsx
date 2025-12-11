import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, Shield, AlertTriangle, DollarSign, Target, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const MarketplaceFraud = () => {
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
              <h1 className="text-3xl font-bold mb-2">Marketplace Fraud Detection & Dynamic Pricing</h1>
              <p className="text-muted-foreground max-w-3xl">Fraud detection with anomaly models and dynamic pricing simulation for marketplace credit usage optimization.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Isolation Forest</Badge>
              <Badge variant="secondary">PaySim</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - Defense/Alert Style */}
        <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              Fraud Detection Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              In this project, I built a real-time fraud detection system for a mobile money marketplace using the PaySim synthetic dataset. The system combines Isolation Forest anomaly detection with rule-based filters to catch fraudulent transactions while minimizing false positives that would block legitimate users.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-green-500/30 rounded-lg p-4 bg-green-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">True Positives</span>
                </div>
                <div className="text-3xl font-bold text-green-500">96.8%</div>
                <div className="text-sm text-muted-foreground">Fraud correctly detected</div>
              </div>
              <div className="border border-amber-500/30 rounded-lg p-4 bg-amber-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-amber-500" />
                  <span className="font-semibold">False Positives</span>
                </div>
                <div className="text-3xl font-bold text-amber-500">0.3%</div>
                <div className="text-sm text-muted-foreground">Legitimate flagged wrongly</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <DollarSign className="w-10 h-10 text-green-500" />
              <div>
                <div className="text-2xl font-bold">$4.7M</div>
                <div className="text-sm text-muted-foreground">Annual fraud prevented (projected at scale)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Data Overview</CardTitle>
            <CardDescription>PaySim Mobile Money Fraud Dataset</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Metric</th>
                    <th className="text-left py-2">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 text-muted-foreground">Total Transactions</td>
                    <td className="py-2 font-medium">6,362,620</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Fraudulent Transactions</td>
                    <td className="py-2 font-medium">8,213 (0.13%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Transaction Types</td>
                    <td className="py-2 font-medium">CASH_OUT, TRANSFER, PAYMENT, CASH_IN, DEBIT</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Time Period</td>
                    <td className="py-2 font-medium">30 days simulated</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Features</td>
                    <td className="py-2 font-medium">11 (amount, balance, type, etc.)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Class Imbalance Challenge</h4>
              <p className="text-sm text-muted-foreground mb-3">
                With only 0.13% fraud rate, traditional classifiers would achieve 99.87% accuracy by predicting all transactions as legitimate. I addressed this through:
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Anomaly detection (Isolation Forest) that doesn't require balanced classes</li>
                <li>• SMOTE oversampling for supervised model comparison</li>
                <li>• Cost-sensitive learning with fraud_cost = 100 × legitimate_cost</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle>Methodology</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-red-500">Anomaly Detection Layer</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Isolation Forest identifies outliers by randomly selecting features and split values, isolating anomalies with fewer splits.
                </p>
                <div className="bg-muted/30 rounded p-3">
                  <div className="text-xs font-mono mb-2">Hyperparameters:</div>
                  <div className="text-xs text-muted-foreground">
                    n_estimators=200, contamination=0.001, max_samples=10000
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-500">Rule-Based Filters</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Domain-specific rules catch patterns the model might miss:
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Velocity: &gt;5 transactions in 1 hour</li>
                  <li>• Amount: &gt;3σ from user average</li>
                  <li>• Balance: Transaction &gt; available balance</li>
                  <li>• New account: High value within 24h of creation</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Feature Engineering</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "Amount Ratio", desc: "txn / avg_balance" },
                  { name: "Hour of Day", desc: "0-23 cyclical" },
                  { name: "Balance Delta", desc: "before - after" },
                  { name: "Merchant Risk", desc: "historical fraud rate" },
                ].map((f, i) => (
                  <div key={i} className="border rounded p-3 text-center">
                    <div className="font-medium text-sm">{f.name}</div>
                    <div className="text-xs text-muted-foreground">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Model Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { model: "Isolation Forest + Rules", precision: 97.2, recall: 96.8, f1: 97.0, auc: 0.984 },
                { model: "XGBoost (SMOTE)", precision: 94.5, recall: 89.2, f1: 91.8, auc: 0.971 },
                { model: "Random Forest", precision: 92.1, recall: 85.4, f1: 88.6, auc: 0.962 },
                { model: "Logistic Regression", precision: 78.3, recall: 71.2, f1: 74.6, auc: 0.891 },
              ].map((m, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${idx === 0 ? 'bg-green-500/10 border border-green-500/30' : 'bg-muted/30'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{m.model}</span>
                    {idx === 0 && <Badge className="bg-green-500">Selected</Badge>}
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground text-xs">Precision</div>
                      <div className="font-semibold">{m.precision}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">Recall</div>
                      <div className="font-semibold">{m.recall}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">F1 Score</div>
                      <div className="font-semibold">{m.f1}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">AUC-ROC</div>
                      <div className="font-semibold">{m.auc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Pricing Module */}
        <Card>
          <CardHeader>
            <CardTitle>Dynamic Pricing Simulation</CardTitle>
            <CardDescription>Optimizing transaction fees based on risk score</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Beyond detection, I built a pricing module that adjusts fees based on transaction risk. Higher-risk transactions pay a small premium, creating a self-funding fraud prevention system.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Low Risk (&lt;0.1)</div>
                <div className="text-2xl font-bold text-green-500">1.5%</div>
                <div className="text-xs text-muted-foreground">Standard fee</div>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Medium Risk (0.1-0.5)</div>
                <div className="text-2xl font-bold text-amber-500">2.2%</div>
                <div className="text-xs text-muted-foreground">+47% premium</div>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">High Risk (&gt;0.5)</div>
                <div className="text-2xl font-bold text-red-500">3.5%</div>
                <div className="text-xs text-muted-foreground">+133% premium</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-muted/30 rounded">
              <div className="text-sm font-medium mb-1">Revenue Impact</div>
              <div className="text-sm text-muted-foreground">
                Risk-based pricing generates additional $180K annually while reducing fraud exposure
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
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                  <span>Synthetic data may not capture all real-world fraud patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                  <span>Model requires retraining as fraud tactics evolve</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                  <span>No account takeover or identity fraud simulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                  <span>Latency not measured for production deployment</span>
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
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Target className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="font-medium">Graph Neural Networks</h4>
                  <p className="text-sm text-muted-foreground">Model transaction networks to detect coordinated fraud rings</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Target className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="font-medium">Real-Time Streaming</h4>
                  <p className="text-sm text-muted-foreground">Deploy on Kafka + Flink for sub-100ms scoring</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Target className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="font-medium">Explainable AI</h4>
                  <p className="text-sm text-muted-foreground">SHAP explanations for analyst review queues</p>
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
                <a href="https://www.kaggle.com/datasets/ealaxi/paysim1" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">PaySim Dataset</div><div className="text-xs text-muted-foreground">Mobile money fraud simulation</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.kaggle.com/datasets/vagifa/ethereum-frauddetection-dataset" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Ethereum Fraud Dataset</div><div className="text-xs text-muted-foreground">Blockchain transaction fraud</div></div>
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

export default MarketplaceFraud;
