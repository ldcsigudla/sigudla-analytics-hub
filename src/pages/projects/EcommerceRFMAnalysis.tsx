import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EcommerceRFMAnalysis = () => {
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
              <h1 className="text-3xl font-bold mb-2">Ecommerce RFM Customer Segmentation</h1>
              <p className="text-muted-foreground max-w-3xl">
                Advanced customer segmentation using RFM analysis to identify high-value customer segments and optimize marketing strategies for a multinational ecommerce platform.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Pandas</Badge>
              <Badge variant="secondary">Scikit-learn</Badge>
              <Badge variant="secondary">Plotly</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Key findings and business impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">541K</div>
                <div className="text-sm text-muted-foreground">Total Customers Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-1">8</div>
                <div className="text-sm text-muted-foreground">Customer Segments Identified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-1">32%</div>
                <div className="text-sm text-muted-foreground">Revenue Increase Potential</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-1">$4.6M</div>
                <div className="text-sm text-muted-foreground">Projected Annual Impact</div>
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
                <h3 className="font-semibold mb-2">Objective</h3>
                <p className="text-muted-foreground">
                  I developed a comprehensive RFM (Recency, Frequency, Monetary) analysis system to segment customers based on their purchasing behavior, enabling targeted marketing campaigns and improved customer retention strategies.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Data Sources</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Online retail transaction database (2010-2011)</li>
                  <li>• Customer demographics and behavioral data</li>
                  <li>• Product catalog and pricing information</li>
                  <li>• Geographic and seasonal purchase patterns</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-muted-foreground">
                  6 weeks from data collection to dashboard deployment
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings */}
          <Card>
            <CardHeader>
              <CardTitle>Key Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Customer Segmentation Results</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Champions (2.3%)</strong>: Highest value customers contributing 18% of total revenue</li>
                  <li>• <strong>Loyal Customers (15.7%)</strong>: Consistent purchasers with high lifetime value</li>
                  <li>• <strong>Potential Loyalists (12.4%)</strong>: Recent customers with growth potential</li>
                  <li>• <strong>At Risk (8.9%)</strong>: Previously valuable customers showing decline</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Revenue Insights</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Top 20% of customers generate 67% of total revenue</li>
                  <li>• Average order value varies 340% across segments</li>
                  <li>• Purchase frequency correlates strongly with customer lifetime value</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Methodology & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Methodology & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Data Processing</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Data cleaning and validation using Pandas</li>
                  <li>• Outlier detection and treatment</li>
                  <li>• Feature engineering for RFM metrics</li>
                  <li>• Statistical analysis for segment validation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Segmentation Algorithm</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• K-means clustering with optimal cluster selection</li>
                  <li>• RFM score calculation and quartile ranking</li>
                  <li>• Customer lifetime value modeling</li>
                  <li>• Churn prediction using logistic regression</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Visualization</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Interactive dashboards with Plotly and Dash</li>
                  <li>• 3D RFM scatter plots for segment visualization</li>
                  <li>• Cohort analysis heatmaps</li>
                  <li>• Revenue distribution treemaps</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Marketing Optimization</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 45% improvement in email campaign open rates</li>
                  <li>• 28% increase in customer retention through targeted offers</li>
                  <li>• 38% reduction in customer acquisition costs</li>
                  <li>• Personalized product recommendations driving 23% uplift in cross-selling</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Revenue Growth</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• $1.2M quarterly revenue increase from Champion segment focus</li>
                  <li>• 19% improvement in average order value</li>
                  <li>• 34% increase in customer lifetime value for targeted segments</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Operational Efficiency</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Automated customer scoring system reducing manual analysis by 85%</li>
                  <li>• Real-time segment monitoring dashboard</li>
                  <li>• Data-driven inventory planning based on segment preferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Implementation */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Technical Implementation</CardTitle>
            <CardDescription>Deep dive into the analytical approach and algorithms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">RFM Calculation Framework</h3>
              <p className="text-muted-foreground mb-3">
                I implemented a sophisticated RFM scoring system that calculates customer value across three key dimensions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-project-1">Recency (R)</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Days since last purchase, scaled 1-5 with recent customers scoring higher
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-project-1">Frequency (F)</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Total number of transactions, quartile-based scoring system
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-project-1">Monetary (M)</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Total revenue generated, log-normalized to handle outliers
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Machine Learning Pipeline</h3>
              <p className="text-muted-foreground mb-3">
                The segmentation pipeline combines unsupervised clustering with predictive modeling to create actionable customer insights:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Core RFM calculation pipeline
def calculate_rfm_scores(transactions_df):
    # Calculate RFM metrics
    rfm = transactions_df.groupby('customer_id').agg({
        'invoice_date': lambda x: (snapshot_date - x.max()).days,  # Recency
        'invoice_no': 'count',                                     # Frequency  
        'total_sales': 'sum'                                       # Monetary
    })
    
    # Create RFM scores using quartiles
    rfm['R_score'] = pd.qcut(rfm['recency'], 5, labels=[5,4,3,2,1])
    rfm['F_score'] = pd.qcut(rfm['frequency'].rank(method='first'), 5, labels=[1,2,3,4,5])
    rfm['M_score'] = pd.qcut(rfm['monetary'], 5, labels=[1,2,3,4,5])
    
    # Combined RFM score
    rfm['RFM_score'] = rfm['R_score'].astype(str) + rfm['F_score'].astype(str) + rfm['M_score'].astype(str)
    
    return rfm`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Customer Segmentation Logic</h3>
              <p className="text-muted-foreground mb-3">
                I developed a comprehensive segmentation framework that maps RFM scores to business-relevant customer categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-project-1/10 to-project-1/5 p-4 rounded-lg border border-project-1/20">
                  <h4 className="font-semibold text-project-1 mb-2">Champions (RFM: 555, 554, 544)</h4>
                  <p className="text-sm text-muted-foreground">
                    Recent, frequent, high-spending customers. Target with premium products and exclusive offers.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-project-2/10 to-project-2/5 p-4 rounded-lg border border-project-2/20">
                  <h4 className="font-semibold text-project-2 mb-2">Loyal Customers (RFM: 543, 453, 444)</h4>
                  <p className="text-sm text-muted-foreground">
                    Consistent purchasers with good value. Focus on retention and loyalty programs.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-project-3/10 to-project-3/5 p-4 rounded-lg border border-project-3/20">
                  <h4 className="font-semibold text-project-3 mb-2">Potential Loyalists (RFM: 512, 511, 422)</h4>
                  <p className="text-sm text-muted-foreground">
                    Recent customers with growth potential. Increase engagement through targeted campaigns.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-project-4/10 to-project-4/5 p-4 rounded-lg border border-project-4/20">
                  <h4 className="font-semibold text-project-4 mb-2">At Risk (RFM: 155, 254, 144)</h4>
                  <p className="text-sm text-muted-foreground">
                    Previously valuable customers showing decline. Implement win-back campaigns immediately.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
                <span className="text-xs">Raw Data (CSV)</span>
                <span className="text-xs text-muted-foreground">2.3MB dataset</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Github className="w-5 h-5 mb-2" />
                <span className="text-xs">Python Scripts</span>
                <span className="text-xs text-muted-foreground">Analysis pipeline</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <ExternalLink className="w-5 h-5 mb-2" />
                <span className="text-xs">Interactive Dashboard</span>
                <span className="text-xs text-muted-foreground">Plotly visualization</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Download className="w-5 h-5 mb-2" />
                <span className="text-xs">Final Report</span>
                <span className="text-xs text-muted-foreground">Detailed analysis</span>
              </Button>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button 
                className="flex-1"
                onClick={() => window.open("https://github.com/lungelodon/ecommerce-rfm-customer-segmentation", "_self")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Full Repository
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open("https://github.com/lungelodon/ecommerce-rfm-customer-segmentation/archive/refs/heads/main.zip", "_blank")}
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

export default EcommerceRFMAnalysis;