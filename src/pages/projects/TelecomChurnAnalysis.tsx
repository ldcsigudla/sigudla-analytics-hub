import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TelecomChurnAnalysis = () => {
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
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Telecom Customer Churn Analysis</h1>
              <p className="text-muted-foreground max-w-3xl">
                Comprehensive predictive analytics model to identify customers at risk of churning and develop data-driven retention strategies for a major telecommunications provider.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">XGBoost</Badge>
              <Badge variant="secondary">SHAP</Badge>
              <Badge variant="secondary">Tableau</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Predictive model performance and business impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">94.2%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-2">87.6%</div>
                <div className="text-sm text-muted-foreground">Precision Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-2">$2.8M</div>
                <div className="text-sm text-muted-foreground">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-2">23%</div>
                <div className="text-sm text-muted-foreground">Churn Reduction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Business Challenge</h3>
                <p className="text-muted-foreground">
                  I was tasked with developing a machine learning solution to predict customer churn for a telecom company experiencing 18.2% monthly churn rate, significantly above industry average of 13.4%. The goal was to identify at-risk customers early and implement targeted retention strategies.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Data Sources</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Customer demographics and account information (7,043 records)</li>
                  <li>• Service usage patterns and billing history</li>
                  <li>• Customer service interactions and complaint logs</li>
                  <li>• Network performance metrics and outage data</li>
                  <li>• Marketing campaign response data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Project Timeline</h3>
                <p className="text-muted-foreground">
                  8 weeks from data collection to production deployment
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings */}
          <Card>
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Churn Drivers Identified</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Contract Type</strong>: Month-to-month customers 3.2x more likely to churn</li>
                  <li>• <strong>Payment Method</strong>: Electronic check users show 42% higher churn rate</li>
                  <li>• <strong>Tenure</strong>: 68% of churn occurs in first 12 months</li>
                  <li>• <strong>Service Issues</strong>: Customers with 3+ support tickets have 89% churn probability</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Customer Segmentation</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>High Risk (12.3%)</strong>: Monthly charges &gt;$80, short tenure, fiber optic</li>
                  <li>• <strong>Medium Risk (34.7%)</strong>: No online security, multiple services</li>
                  <li>• <strong>Low Risk (53.0%)</strong>: Long tenure, annual contracts, low support tickets</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Revenue Impact</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Average monthly revenue per churned customer: $74.44</li>
                  <li>• Customer acquisition cost: $315 per new customer</li>
                  <li>• Early intervention reduces churn probability by 67%</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Visualizations */}
        <Card className="mt-8 border-project-2/20 bg-gradient-to-br from-project-2/5 to-background">
          <CardHeader>
            <CardTitle className="text-project-2">Key Performance Insights</CardTitle>
            <CardDescription>Interactive visualizations of churn patterns and model predictions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Feature Importance Chart */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-2/10">
                <h3 className="font-semibold mb-4 text-project-2">Feature Importance (SHAP Values)</h3>
                <div className="h-64">
                  <div className="space-y-3">
                    {[
                      { name: 'Monthly Charges', value: 24, color: 'bg-project-2' },
                      { name: 'Contract Type', value: 19, color: 'bg-project-2/80' },
                      { name: 'Tenure', value: 16, color: 'bg-project-2/60' },
                      { name: 'Payment Method', value: 13, color: 'bg-project-2/50' },
                      { name: 'Internet Service', value: 11, color: 'bg-project-2/40' },
                      { name: 'Tech Support', value: 8, color: 'bg-project-2/30' },
                      { name: 'Online Security', value: 6, color: 'bg-project-2/20' },
                      { name: 'Senior Citizen', value: 3, color: 'bg-project-2/10' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium w-32 truncate">{item.name}</span>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-muted/30 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full transition-all duration-1000 ${item.color}`}
                              style={{ width: `${item.value * 3}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-project-2 w-8">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Churn Rate by Segment */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-2/10">
                <h3 className="font-semibold mb-4 text-project-2">Churn Rate by Customer Segment</h3>
                <div className="h-64 space-y-6">
                  <div className="flex items-center justify-between bg-gradient-to-r from-red-500/10 to-red-500/5 p-4 rounded-lg border border-red-500/20">
                    <div>
                      <div className="font-semibold text-red-600">High Risk</div>
                      <div className="text-sm text-muted-foreground">12.3% of customers</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">89%</div>
                      <div className="text-sm text-muted-foreground">Churn Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                    <div>
                      <div className="font-semibold text-yellow-600">Medium Risk</div>
                      <div className="text-sm text-muted-foreground">34.7% of customers</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">34%</div>
                      <div className="text-sm text-muted-foreground">Churn Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gradient-to-r from-project-2/10 to-project-2/5 p-4 rounded-lg border border-project-2/20">
                    <div>
                      <div className="font-semibold text-project-2">Low Risk</div>
                      <div className="text-sm text-muted-foreground">53.0% of customers</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-project-2">8%</div>
                      <div className="text-sm text-muted-foreground">Churn Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Monthly Churn Trend */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-2/10">
                <h3 className="font-semibold mb-4 text-project-2">Monthly Churn Trend (12 Months)</h3>
                <div className="h-48">
                  <svg viewBox="0 0 400 150" className="w-full h-full">
                    <defs>
                      <linearGradient id="churnGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--project-2))" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="hsl(var(--project-2))" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <line key={i} x1="40" y1={30 + i * 25} x2="360" y2={30 + i * 25} stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2"/>
                    ))}
                    {/* Data line */}
                    <polyline
                      fill="url(#churnGradient)"
                      stroke="hsl(var(--project-2))"
                      strokeWidth="3"
                      points="40,85 70,95 100,105 130,90 160,80 190,75 220,70 250,65 280,60 310,55 340,50 360,45"
                    />
                    {/* Data points */}
                    {[40,70,100,130,160,190,220,250,280,310,340,360].map((x, i) => {
                      const y = [85,95,105,90,80,75,70,65,60,55,50,45][i];
                      return <circle key={i} cx={x} cy={y} r="4" fill="hsl(var(--project-2))"/>
                    })}
                    {/* Y-axis labels */}
                    <text x="30" y="35" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="end">25%</text>
                    <text x="30" y="60" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="end">20%</text>
                    <text x="30" y="85" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="end">15%</text>
                    <text x="30" y="110" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="end">10%</text>
                    <text x="30" y="135" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="end">5%</text>
                  </svg>
                </div>
                <div className="text-center mt-2">
                  <div className="text-sm text-muted-foreground">Showing 23% reduction from 18.2% to 14.0%</div>
                </div>
              </div>

              {/* ROI Analysis */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-2/10">
                <h3 className="font-semibold mb-4 text-project-2">ROI Analysis - Retention Campaigns</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-project-2/5 to-transparent rounded">
                    <span className="text-sm font-medium">Campaign Investment</span>
                    <span className="font-bold text-project-2">$1.8M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-project-2/10 to-transparent rounded">
                    <span className="text-sm font-medium">Revenue Retained</span>
                    <span className="font-bold text-project-2">$2.8M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-project-2/15 to-transparent rounded border border-project-2/20">
                    <span className="text-sm font-medium">Net ROI</span>
                    <span className="font-bold text-project-2 text-lg">156%</span>
                  </div>
                  <div className="mt-4 p-4 bg-project-2/5 rounded-lg border border-project-2/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-project-2">$1.00</div>
                      <div className="text-xs text-muted-foreground mb-2">Investment</div>
                      <div className="text-sm text-muted-foreground">↓</div>
                      <div className="text-2xl font-bold text-project-2">$2.56</div>
                      <div className="text-xs text-muted-foreground">Return</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Performance */}
        <Card className="mt-8 border-project-2/10">
          <CardHeader>
            <CardTitle className="text-project-2">Machine Learning Model Performance</CardTitle>
            <CardDescription>Detailed analysis of predictive model accuracy and validation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-project-2/10 to-project-2/5 p-6 rounded-lg border border-project-2/20">
                <h3 className="font-semibold text-project-2 mb-4">XGBoost Classifier</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Accuracy</span>
                    <span className="font-semibold">94.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Precision</span>
                    <span className="font-semibold">87.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recall</span>
                    <span className="font-semibold">82.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">F1-Score</span>
                    <span className="font-semibold">84.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">AUC-ROC</span>
                    <span className="font-semibold">0.91</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-muted/50 to-muted/20 p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Random Forest</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Accuracy</span>
                    <span className="font-semibold">89.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Precision</span>
                    <span className="font-semibold">81.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recall</span>
                    <span className="font-semibold">79.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">F1-Score</span>
                    <span className="font-semibold">80.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">AUC-ROC</span>
                    <span className="font-semibold">0.87</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-muted/50 to-muted/20 p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Logistic Regression</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Accuracy</span>
                    <span className="font-semibold">83.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Precision</span>
                    <span className="font-semibold">76.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recall</span>
                    <span className="font-semibold">68.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">F1-Score</span>
                    <span className="font-semibold">72.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">AUC-ROC</span>
                    <span className="font-semibold">0.79</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Feature Importance Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Using SHAP (SHapley Additive exPlanations) values, I identified the most influential factors in churn prediction:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Monthly Charges</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-20 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.24</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Contract Type</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-16 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.19</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Tenure</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-14 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.16</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Payment Method</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-12 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.13</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Internet Service</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-10 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.11</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Tech Support</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-8 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.08</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Online Security</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-6 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.06</span>
                  </div>
                  <div className="flex items-center justify-between bg-muted/30 p-2 rounded">
                    <span className="text-sm">Senior Citizen</span>
                    <div className="w-24 bg-project-2/20 rounded-full h-2">
                      <div className="w-4 bg-project-2 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs font-semibold">0.03</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology & Business Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Methodology & Technical Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Data Preprocessing</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Handled missing values using domain-specific imputation</li>
                  <li>• Encoded categorical variables with target encoding</li>
                  <li>• Applied SMOTE for class imbalance correction</li>
                  <li>• Feature scaling using RobustScaler for outlier resilience</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Model Selection & Tuning</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Compared 5 algorithms: XGBoost, Random Forest, SVM, Logistic Regression, Neural Networks</li>
                  <li>• Hyperparameter optimization using Bayesian optimization</li>
                  <li>• 5-fold stratified cross-validation for robust evaluation</li>
                  <li>• Early stopping to prevent overfitting</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Model Interpretation</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• SHAP values for global and local feature importance</li>
                  <li>• LIME for individual prediction explanations</li>
                  <li>• Partial dependence plots for feature relationship analysis</li>
                  <li>• Confusion matrix and ROC curve analysis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Impact & ROI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Retention Campaign Results</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 23% reduction in overall churn rate (18.2% to 14.0%)</li>
                  <li>• 67% success rate in targeted retention campaigns</li>
                  <li>• $2.8M annual revenue retention through early intervention</li>
                  <li>• 156% ROI on retention campaign investments</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Operational Improvements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Automated daily risk scoring for 100,000+ customers</li>
                  <li>• Real-time alerts for high-risk customer identification</li>
                  <li>• 85% reduction in manual churn analysis time</li>
                  <li>• Integration with CRM system for seamless workflow</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategic Insights</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Contract optimization: Incentivizing annual contracts reduced churn by 34%</li>
                  <li>• Payment method strategy: Auto-pay adoption increased by 28%</li>
                  <li>• Customer onboarding improvements reducing early churn</li>
                  <li>• Service bundling strategies for high-value customers</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Resources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Project Resources & Downloads</CardTitle>
            <CardDescription>Access all project files, datasets, and interactive dashboards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Download className="w-5 h-5 mb-2" />
                <span className="text-xs">Dataset (CSV)</span>
                <span className="text-xs text-muted-foreground">7,043 customer records</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Github className="w-5 h-5 mb-2" />
                <span className="text-xs">ML Pipeline</span>
                <span className="text-xs text-muted-foreground">Complete Python code</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <ExternalLink className="w-5 h-5 mb-2" />
                <span className="text-xs">Tableau Dashboard</span>
                <span className="text-xs text-muted-foreground">Interactive visualizations</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Download className="w-5 h-5 mb-2" />
                <span className="text-xs">Model Documentation</span>
                <span className="text-xs text-muted-foreground">Technical specifications</span>
              </Button>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button 
                className="flex-1"
                onClick={() => window.open("https://github.com/lungelodon/telecom-customer-churn-analysis", "_self")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Full Repository
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open("https://github.com/lungelodon/telecom-customer-churn-analysis/archive/refs/heads/main.zip", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TelecomChurnAnalysis;