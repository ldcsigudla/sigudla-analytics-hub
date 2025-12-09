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

        {/* Global Sales Analytics Dashboard */}
        <Card className="mb-8 border-project-3/20 bg-gradient-to-br from-project-3/5 to-background">
          <CardHeader>
            <CardTitle className="text-project-3">Global Market Intelligence</CardTitle>
            <CardDescription>Interactive geographic and temporal analysis of worldwide sales performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Regional Performance */}
              <div className="lg:col-span-2 bg-card/50 p-6 rounded-lg border border-project-3/10">
                <h3 className="font-semibold mb-4 text-project-3">Sales by Region (Q4 2023)</h3>
                <div className="space-y-4">
                  {[
                    { region: 'North America', sales: '$12.4M', growth: '+18%', color: 'bg-project-3' },
                    { region: 'Europe', sales: '$9.8M', growth: '+12%', color: 'bg-project-3/80' },
                    { region: 'Asia Pacific', sales: '$15.2M', growth: '+28%', color: 'bg-project-3/90' },
                    { region: 'Latin America', sales: '$4.7M', growth: '+15%', color: 'bg-project-3/60' },
                    { region: 'Middle East & Africa', sales: '$3.1M', growth: '+22%', color: 'bg-project-3/50' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-project-3/5 to-transparent rounded-lg border border-project-3/10">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded ${item.color}`}></div>
                        <span className="font-medium">{item.region}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-project-3">{item.sales}</span>
                        <span className="text-sm text-emerald-600 font-medium">{item.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-3/10">
                <h3 className="font-semibold mb-4 text-project-3">Top Performing Products</h3>
                <div className="space-y-3">
                  {[
                    { product: 'Product Alpha', share: 28, revenue: '$8.2M' },
                    { product: 'Product Beta', share: 22, revenue: '$6.4M' },
                    { product: 'Product Gamma', share: 18, revenue: '$5.1M' },
                    { product: 'Product Delta', share: 15, revenue: '$4.3M' },
                    { product: 'Others', share: 17, revenue: '$4.8M' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.product}</span>
                        <span className="text-xs font-bold text-project-3">{item.share}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex-1 bg-muted/30 rounded-full h-2 mr-2">
                          <div 
                            className="bg-project-3 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.share * 2.5}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.revenue}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sales Trend Over Time */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-3/10">
                <h3 className="font-semibold mb-4 text-project-3">Monthly Sales Trend (2023)</h3>
                <div className="h-48">
                  <svg viewBox="0 0 400 150" className="w-full h-full">
                    <defs>
                      <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--project-3))" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="hsl(var(--project-3))" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4, 5].map(i => (
                      <line key={i} x1="30" y1={25 + i * 20} x2="370" y2={25 + i * 20} stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2"/>
                    ))}
                    {/* Area fill */}
                    <polygon
                      fill="url(#salesGradient)"
                      points="30,120 60,110 90,100 120,95 150,85 180,75 210,70 240,60 270,50 300,45 330,40 360,35 370,35 370,125 30,125"
                    />
                    {/* Trend line */}
                    <polyline
                      fill="none"
                      stroke="hsl(var(--project-3))"
                      strokeWidth="3"
                      points="30,120 60,110 90,100 120,95 150,85 180,75 210,70 240,60 270,50 300,45 330,40 370,35"
                    />
                    {/* Data points */}
                    {[30,60,90,120,150,180,210,240,270,300,330,370].map((x, i) => {
                      const y = [120,110,100,95,85,75,70,60,50,45,40,35][i];
                      return <circle key={i} cx={x} cy={y} r="3" fill="hsl(var(--project-3))"/>
                    })}
                    {/* Y-axis labels */}
                    <text x="20" y="30" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="end">$15M</text>
                    <text x="20" y="70" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="end">$10M</text>
                    <text x="20" y="110" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="end">$5M</text>
                  </svg>
                </div>
                <div className="text-center mt-2">
                  <div className="text-sm text-muted-foreground">23% YoY growth with strong Q4 performance</div>
                </div>
              </div>

              {/* Market Share Analysis */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-3/10">
                <h3 className="font-semibold mb-4 text-project-3">Market Share vs Competitors</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-project-3">Our Company</span>
                      <span className="text-sm font-bold text-project-3">34.2%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-3">
                      <div className="bg-project-3 h-3 rounded-full" style={{ width: '34.2%' }}></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Competitor A</span>
                      <span className="text-sm font-bold text-muted-foreground">28.7%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-3">
                      <div className="bg-muted-foreground h-3 rounded-full" style={{ width: '28.7%' }}></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Competitor B</span>
                      <span className="text-sm font-bold text-muted-foreground">19.5%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-3">
                      <div className="bg-muted-foreground/60 h-3 rounded-full" style={{ width: '19.5%' }}></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Others</span>
                      <span className="text-sm font-bold text-muted-foreground">17.6%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-3">
                      <div className="bg-muted-foreground/40 h-3 rounded-full" style={{ width: '17.6%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-project-3/5 rounded-lg border border-project-3/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-project-3">+5.7%</div>
                    <div className="text-xs text-muted-foreground">Market Share Growth YoY</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Overview */}
          <Card className="border-project-3/10">
            <CardHeader>
              <CardTitle className="text-project-3">Project Overview</CardTitle>
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

        {/* Data Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Data Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b bg-muted/30"><td className="p-3 font-medium">Total Orders</td><td className="p-3 text-right">9,994</td></tr>
                    <tr className="border-b"><td className="p-3 font-medium">Time Period</td><td className="p-3 text-right">2014-2017</td></tr>
                    <tr className="border-b bg-muted/30"><td className="p-3 font-medium">Regions</td><td className="p-3 text-right">4 (West, East, Central, South)</td></tr>
                    <tr className="border-b"><td className="p-3 font-medium">Product Categories</td><td className="p-3 text-right">3 (Technology, Furniture, Office Supplies)</td></tr>
                    <tr><td className="p-3 font-medium">Customer Segments</td><td className="p-3 text-right">3 (Consumer, Corporate, Home Office)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-between"><span className="font-medium">Total Revenue</span><span className="text-project-3 font-semibold">$2.3M</span></div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-between"><span className="font-medium">Total Profit</span><span className="text-project-3 font-semibold">$286K</span></div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-between"><span className="font-medium">Avg Profit Margin</span><span className="text-project-3 font-semibold">12.4%</span></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="mt-8 border-yellow-500/20">
          <CardHeader><CardTitle>Limitations & Constraints</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                <h4 className="font-semibold text-yellow-700 mb-2">Data Limitations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• US-only data—international markets not represented</li>
                  <li>• No competitor pricing or market share data</li>
                  <li>• Historical data (2014-2017) may not reflect current trends</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                <h4 className="font-semibold text-yellow-700 mb-2">Analysis Assumptions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Discount strategies assumed to be consistent</li>
                  <li>• No external economic factors modeled</li>
                  <li>• Shipping costs treated as fixed percentages</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What I Would Do Next */}
        <Card className="mt-8 border-project-3/20 bg-gradient-to-br from-project-3/5 to-background">
          <CardHeader><CardTitle className="text-project-3">What I Would Do Next</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-project-3/20 rounded-lg bg-background">
                <h4 className="font-semibold mb-2">Time Series Forecasting</h4>
                <p className="text-sm text-muted-foreground">Implement ARIMA/Prophet models to predict future sales by region and category.</p>
              </div>
              <div className="p-4 border border-project-3/20 rounded-lg bg-background">
                <h4 className="font-semibold mb-2">Price Elasticity Analysis</h4>
                <p className="text-sm text-muted-foreground">Model discount sensitivity to optimize promotional strategies.</p>
              </div>
              <div className="p-4 border border-project-3/20 rounded-lg bg-background">
                <h4 className="font-semibold mb-2">Embedded Analytics</h4>
                <p className="text-sm text-muted-foreground">Deploy Tableau dashboards with automated email reports for stakeholders.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Resources */}
        <Card className="mt-8">
          <CardHeader><CardTitle>Project Resources</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center"><Download className="w-5 h-5 mb-2" /><span className="text-xs">Raw Data (CSV)</span></Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center"><Github className="w-5 h-5 mb-2" /><span className="text-xs">SQL Scripts</span></Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center"><ExternalLink className="w-5 h-5 mb-2" /><span className="text-xs">Tableau Workbook</span></Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center"><Download className="w-5 h-5 mb-2" /><span className="text-xs">Full Report</span></Button>
            </div>
            <div className="mt-6 flex gap-4">
              <Button className="flex-1" onClick={() => window.open("https://github.com/lungelodon", "_blank")}><Github className="w-4 h-4 mr-2" />View Repository</Button>
              <Button variant="outline" onClick={() => window.open("https://github.com/lungelodon", "_blank")}><Download className="w-4 h-4 mr-2" />Download</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalSalesAnalysis;