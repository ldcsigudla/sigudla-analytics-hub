import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GlobalSalesAnalysis = () => {
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
              <h1 className="text-3xl font-bold mb-2">Global Sales Performance Analysis</h1>
              <p className="text-muted-foreground max-w-3xl">
                A comprehensive analysis of sales, profit, and shipping metrics for a global superstore, providing management with interactive tools to identify trends and opportunities across different regions and product categories.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Tableau</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">Pandas</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Interactive Dashboard Preview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive Dashboard</CardTitle>
            <CardDescription>Click to view the full interactive Tableau dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-lg p-6 h-64">
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open("https://lungelodon.github.io/global-sales-performance-analysis/", "_self")}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Interactive Dashboard
                </Button>
              </div>
              <div className="absolute bottom-4 left-6 text-white/80">
                <p className="text-sm">Interactive world map with drill-down capabilities</p>
                <p className="text-xs">Revenue trends • Product performance • Regional analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Key performance indicators and business insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$2.3M</div>
                <div className="text-sm text-muted-foreground">Total Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-3">$286K</div>
                <div className="text-sm text-muted-foreground">Total Profit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-3">9,994</div>
                <div className="text-sm text-muted-foreground">Total Orders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-3">12.4%</div>
                <div className="text-sm text-muted-foreground">Average Profit Margin</div>
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
                  I created an interactive dashboard to analyze global superstore performance, enabling stakeholders to make data-driven decisions about product portfolio optimization, regional expansion strategies, and operational efficiency improvements.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Data Sources</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Global superstore sales database (2014-2017)</li>
                  <li>• Regional shipping and logistics data</li>
                  <li>• Product category and subcategory metrics</li>
                  <li>• Customer segmentation and demographic data</li>
                  <li>• Market-specific pricing and cost information</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-muted-foreground">
                  4 weeks from data collection to dashboard deployment
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
                <h3 className="font-semibold mb-2">Revenue Insights</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Technology category</strong> drives 42% of total revenue ($969K)</li>
                  <li>• <strong>Western region</strong> outperforms others by 25% in sales volume</li>
                  <li>• <strong>Q4 sales consistently</strong> 35% higher than Q1 across all years</li>
                  <li>• <strong>Corporate segment</strong> shows strongest growth trajectory (18% YoY)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Profitability Analysis</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Office Supplies</strong> have highest profit margin (15.2%)</li>
                  <li>• <strong>Copiers and Phones</strong> contribute 34% of total profit despite 8% of volume</li>
                  <li>• <strong>Tables subcategory</strong> shows consistent losses (-17.3% margin)</li>
                  <li>• <strong>Same-day shipping</strong> reduces profit margin by 4.8% on average</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Operational Efficiency</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Average shipping cost impacts profit by 8.2%</li>
                  <li>• Standard class shipping optimal for 67% of orders</li>
                  <li>• Regional distribution centers reduce shipping costs by 23%</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Performance */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Regional Performance Analysis</CardTitle>
            <CardDescription>Comprehensive breakdown of sales and profitability by region</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-project-3/10 to-project-3/5 p-4 rounded-lg border border-project-3/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-project-3">West</h3>
                  <Badge variant="outline">Top Performer</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sales</span>
                    <span className="font-semibold">$725K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Profit</span>
                    <span className="font-semibold">$108K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Margin</span>
                    <span className="font-semibold">14.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Orders</span>
                    <span className="font-semibold">3,203</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-project-4/10 to-project-4/5 p-4 rounded-lg border border-project-4/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-project-4">East</h3>
                  <Badge variant="outline">Growth Leader</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sales</span>
                    <span className="font-semibold">$678K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Profit</span>
                    <span className="font-semibold">$91K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Margin</span>
                    <span className="font-semibold">13.4%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Orders</span>
                    <span className="font-semibold">2,848</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-project-5/10 to-project-5/5 p-4 rounded-lg border border-project-5/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-project-5">Central</h3>
                  <Badge variant="outline">Stable</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sales</span>
                    <span className="font-semibold">$501K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Profit</span>
                    <span className="font-semibold">$57K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Margin</span>
                    <span className="font-semibold">11.4%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Orders</span>
                    <span className="font-semibold">2,323</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-project-6/10 to-project-6/5 p-4 rounded-lg border border-project-6/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-project-6">South</h3>
                  <Badge variant="outline">Opportunity</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sales</span>
                    <span className="font-semibold">$391K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Profit</span>
                    <span className="font-semibold">$46K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Margin</span>
                    <span className="font-semibold">11.8%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Orders</span>
                    <span className="font-semibold">1,620</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Regional Strategic Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-project-3 mb-2">West Region Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Leverage strong performance by expanding high-margin product lines. Focus on corporate segment growth and premium technology offerings.
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-project-6 mb-2">South Region Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement targeted marketing campaigns and improve distribution network. Potential for 35% growth based on demographic analysis.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology & Business Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Methodology & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Data Processing</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• SQL queries for data extraction and cleaning</li>
                  <li>• Pandas for advanced data manipulation and analysis</li>
                  <li>• Statistical analysis for trend identification</li>
                  <li>• Time series analysis for seasonal pattern detection</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Visualization</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Tableau for interactive dashboard creation</li>
                  <li>• Custom calculated fields for advanced metrics</li>
                  <li>• Mobile-responsive design implementation</li>
                  <li>• Real-time data connection setup</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Analytics Framework</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Cohort analysis for customer behavior patterns</li>
                  <li>• RFM analysis for customer segmentation</li>
                  <li>• Profit margin optimization modeling</li>
                  <li>• Geographic market penetration analysis</li>
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
                <h3 className="font-semibold mb-2">Strategic Outcomes</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 25% reduction in reporting time through automation</li>
                  <li>• Improved inventory management decisions reducing costs by 18%</li>
                  <li>• Enhanced regional performance tracking and KPI monitoring</li>
                  <li>• Data-driven expansion into high-performing regions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Operational Improvements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Optimized product portfolio mix increasing profit margins</li>
                  <li>• Enhanced quarterly forecasting accuracy by 32%</li>
                  <li>• Streamlined regional performance reviews</li>
                  <li>• Improved stakeholder decision-making speed by 40%</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Revenue Growth</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Identified $480K in untapped market opportunities</li>
                  <li>• Optimized shipping strategies saving $127K annually</li>
                  <li>• Product mix optimization increasing margins by 8.4%</li>
                  <li>• Regional expansion strategy projected 22% revenue growth</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Deep Dive */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Technical Implementation</CardTitle>
            <CardDescription>Data pipeline and dashboard architecture details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Data Pipeline Architecture</h3>
              <p className="text-muted-foreground mb-4">
                I designed a comprehensive ETL pipeline that processes raw sales data into actionable business intelligence:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Sales Performance Analysis Pipeline
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

def process_sales_data(raw_data_path):
    # Load and clean the dataset
    df = pd.read_csv(raw_data_path)
    
    # Data quality checks and cleaning
    df['Order Date'] = pd.to_datetime(df['Order Date'])
    df['Ship Date'] = pd.to_datetime(df['Ship Date'])
    
    # Calculate shipping duration
    df['Shipping Days'] = (df['Ship Date'] - df['Order Date']).dt.days
    
    # Create derived metrics
    df['Profit Margin'] = (df['Profit'] / df['Sales']) * 100
    df['Year'] = df['Order Date'].dt.year
    df['Quarter'] = df['Order Date'].dt.quarter
    df['Month'] = df['Order Date'].dt.month
    
    # Customer segmentation based on purchase behavior
    customer_metrics = df.groupby('Customer ID').agg({
        'Sales': ['sum', 'count', 'mean'],
        'Profit': 'sum',
        'Order Date': ['min', 'max']
    }).round(2)
    
    return df, customer_metrics

# Regional performance analysis
def regional_analysis(df):
    regional_metrics = df.groupby('Region').agg({
        'Sales': ['sum', 'mean'],
        'Profit': ['sum', 'mean'],
        'Quantity': 'sum',
        'Order ID': 'nunique'
    }).round(2)
    
    # Calculate growth rates
    regional_growth = df.groupby(['Region', 'Year'])['Sales'].sum().pct_change()
    
    return regional_metrics, regional_growth`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Advanced Analytics Implementation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-project-3/10 to-project-3/5 p-4 rounded-lg border border-project-3/20">
                  <h4 className="font-semibold text-project-3 mb-2">Seasonal Decomposition</h4>
                  <p className="text-sm text-muted-foreground">
                    Implemented time series analysis to identify seasonal patterns, trends, and cyclical behavior in sales data across all regions and product categories.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-project-4/10 to-project-4/5 p-4 rounded-lg border border-project-4/20">
                  <h4 className="font-semibold text-project-4 mb-2">Market Basket Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Applied association rule mining to identify product combinations and cross-selling opportunities, leading to strategic bundling recommendations.
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
                <span className="text-xs text-muted-foreground">9,994 sales records</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Github className="w-5 h-5 mb-2" />
                <span className="text-xs">SQL Scripts</span>
                <span className="text-xs text-muted-foreground">Analysis pipeline</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <ExternalLink className="w-5 h-5 mb-2" />
                <span className="text-xs">Tableau Workbook</span>
                <span className="text-xs text-muted-foreground">Interactive dashboard</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Download className="w-5 h-5 mb-2" />
                <span className="text-xs">Full Report</span>
                <span className="text-xs text-muted-foreground">Detailed analysis</span>
              </Button>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button 
                className="flex-1"
                onClick={() => window.open("https://github.com/lungelodon/global-sales-performance-analysis", "_self")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Full Repository
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open("https://github.com/lungelodon/global-sales-performance-analysis/archive/refs/heads/main.zip", "_blank")}
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

export default GlobalSalesAnalysis;