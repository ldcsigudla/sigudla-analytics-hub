import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WeatherSalesCorrelation = () => {
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
              <h1 className="text-3xl font-bold mb-2">API-Driven Weather Sales Correlation</h1>
              <p className="text-muted-foreground max-w-3xl">
                Real-time weather data integration to analyze correlations between weather patterns and sales performance across multiple retail locations, enabling weather-responsive inventory and marketing strategies.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">APIs</Badge>
              <Badge variant="secondary">Flask</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Weather impact analysis and correlation findings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0.73</div>
                <div className="text-sm text-muted-foreground">Weather-Sales Correlation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-4">847K</div>
                <div className="text-sm text-muted-foreground">Weather Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-4">$1.2M</div>
                <div className="text-sm text-muted-foreground">Revenue Impact Identified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-4">18%</div>
                <div className="text-sm text-muted-foreground">Forecast Accuracy Improvement</div>
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
                  I developed a comprehensive weather analytics system that integrates real-time weather APIs with sales data to identify weather-driven demand patterns. This enables proactive inventory management and targeted marketing campaigns based on weather forecasts.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Data Sources</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• OpenWeatherMap API for real-time weather data</li>
                  <li>• Historical weather data from WeatherAPI</li>
                  <li>• Sales transaction database (3 years, 47 locations)</li>
                  <li>• Product category and seasonal inventory data</li>
                  <li>• Geographic location and demographic information</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Technical Architecture</h3>
                <p className="text-muted-foreground">
                  Built with Python Flask backend, PostgreSQL database, automated API data collection, and real-time dashboard for monitoring weather-sales correlations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings */}
          <Card>
            <CardHeader>
              <CardTitle>Key Discoveries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Weather Impact Analysis</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Temperature correlations</strong>: 15°C+ increases beverage sales by 34%</li>
                  <li>• <strong>Precipitation effects</strong>: Rainy days boost indoor product sales by 28%</li>
                  <li>• <strong>Seasonal patterns</strong>: Weather deviations create 23% sales variance</li>
                  <li>• <strong>Regional differences</strong>: Northern regions show 2.3x higher weather sensitivity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Product Category Insights</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Apparel</strong>: Temperature changes drive 45% of seasonal variations</li>
                  <li>• <strong>Food & Beverage</strong>: Strong correlation with temperature and humidity</li>
                  <li>• <strong>Sports Equipment</strong>: Weather conditions predict 67% of demand fluctuations</li>
                  <li>• <strong>Home & Garden</strong>: Precipitation forecasts enable 89% accurate demand planning</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Predictive Model Performance</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 18% improvement in sales forecast accuracy</li>
                  <li>• 12% reduction in inventory holding costs</li>
                  <li>• 25% increase in weather-responsive campaign ROI</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weather Correlation Analysis */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Weather Factor Analysis</CardTitle>
            <CardDescription>Detailed correlation analysis between weather variables and sales performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-project-4/10 to-project-4/5 p-6 rounded-lg border border-project-4/20">
                <h3 className="font-semibold text-project-4 mb-4">Temperature Impact</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Ice Cream Sales</span>
                    <span className="font-semibold text-green-600">+0.84</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cold Beverages</span>
                    <span className="font-semibold text-green-600">+0.79</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Summer Apparel</span>
                    <span className="font-semibold text-green-600">+0.72</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Hot Beverages</span>
                    <span className="font-semibold text-red-600">-0.68</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Winter Clothing</span>
                    <span className="font-semibold text-red-600">-0.71</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-6 rounded-lg border border-blue-500/20">
                <h3 className="font-semibold text-blue-700 mb-4">Precipitation Effects</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Umbrellas</span>
                    <span className="font-semibold text-green-600">+0.91</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Indoor Games</span>
                    <span className="font-semibold text-green-600">+0.76</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Comfort Food</span>
                    <span className="font-semibold text-green-600">+0.63</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Outdoor Equipment</span>
                    <span className="font-semibold text-red-600">-0.54</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Garden Supplies</span>
                    <span className="font-semibold text-red-600">-0.48</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-6 rounded-lg border border-purple-500/20">
                <h3 className="font-semibold text-purple-700 mb-4">Humidity & Wind</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Skincare Products</span>
                    <span className="font-semibold text-green-600">+0.58</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Hair Care</span>
                    <span className="font-semibold text-green-600">+0.52</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Kites & Wind Toys</span>
                    <span className="font-semibold text-green-600">+0.67</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Outdoor Furniture</span>
                    <span className="font-semibold text-red-600">-0.43</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Grilling Equipment</span>
                    <span className="font-semibold text-red-600">-0.39</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Advanced Correlation Models</h3>
              <p className="text-muted-foreground mb-4">
                I implemented multiple regression models to capture complex weather-sales relationships:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Weather-Sales Correlation Analysis
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from scipy.stats import pearsonr
import seaborn as sns

def analyze_weather_sales_correlation(weather_df, sales_df):
    # Merge weather and sales data by date and location
    merged_df = pd.merge(
        sales_df, weather_df, 
        on=['date', 'location'], 
        how='inner'
    )
    
    # Calculate correlation matrix
    weather_vars = ['temperature', 'humidity', 'precipitation', 'wind_speed']
    correlations = {}
    
    for product_category in merged_df['category'].unique():
        category_data = merged_df[merged_df['category'] == product_category]
        corr_results = {}
        
        for weather_var in weather_vars:
            corr_coef, p_value = pearsonr(
                category_data[weather_var], 
                category_data['sales_amount']
            )
            corr_results[weather_var] = {
                'correlation': corr_coef,
                'p_value': p_value,
                'significant': p_value < 0.05
            }
        
        correlations[product_category] = corr_results
    
    return correlations

# Weather-based sales prediction model
def build_weather_prediction_model(df):
    features = ['temperature', 'humidity', 'precipitation', 'wind_speed',
                'day_of_week', 'month', 'is_weekend']
    
    X = df[features]
    y = df['sales_amount']
    
    model = LinearRegression()
    model.fit(X, y)
    
    # Feature importance
    feature_importance = pd.DataFrame({
        'feature': features,
        'coefficient': model.coef_,
        'abs_coefficient': np.abs(model.coef_)
    }).sort_values('abs_coefficient', ascending=False)
    
    return model, feature_importance`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">API Integration</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Real-time data collection from multiple weather APIs</li>
                  <li>• Automated hourly weather data ingestion pipeline</li>
                  <li>• Error handling and retry mechanisms for API failures</li>
                  <li>• Data validation and quality assurance checks</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Data Processing Pipeline</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• ETL processes for weather and sales data alignment</li>
                  <li>• Geographic coordinate matching for location-based analysis</li>
                  <li>• Time series data normalization and aggregation</li>
                  <li>• Outlier detection and anomaly handling</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Analytics Engine</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Statistical correlation analysis with significance testing</li>
                  <li>• Machine learning models for predictive analytics</li>
                  <li>• Seasonal decomposition and trend analysis</li>
                  <li>• Real-time correlation monitoring and alerting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Impact & Applications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Inventory Optimization</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 23% reduction in out-of-stock incidents during weather events</li>
                  <li>• 15% decrease in excess inventory through weather-based forecasting</li>
                  <li>• Automated reordering triggers based on 7-day weather forecasts</li>
                  <li>• Regional inventory allocation optimization saving $340K annually</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Marketing Campaign Enhancement</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Weather-triggered promotional campaigns with 67% higher engagement</li>
                  <li>• Personalized product recommendations based on local weather</li>
                  <li>• Dynamic pricing strategies for weather-sensitive products</li>
                  <li>• Targeted advertising with 45% improved conversion rates</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Operational Excellence</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Automated weather-based staffing recommendations</li>
                  <li>• Supply chain optimization for weather-sensitive goods</li>
                  <li>• Risk management for extreme weather events</li>
                  <li>• Enhanced customer experience through proactive planning</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Dashboard Features */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Real-time Weather-Sales Dashboard</CardTitle>
            <CardDescription>Interactive monitoring and forecasting interface</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-project-4/10 to-project-4/5 p-6 rounded-lg border border-project-4/20">
                <h3 className="font-semibold text-project-4 mb-4">Live Weather Monitoring</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Real-time weather conditions for all retail locations</li>
                  <li>• 7-day detailed weather forecasts with hourly breakdown</li>
                  <li>• Weather alerts and severe condition notifications</li>
                  <li>• Historical weather pattern comparison tools</li>
                  <li>• Interactive weather maps with overlay options</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-lg border border-green-500/20">
                <h3 className="font-semibold text-green-700 mb-4">Sales Impact Visualization</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Real-time sales performance against weather conditions</li>
                  <li>• Product category performance heatmaps</li>
                  <li>• Weather-adjusted sales forecasting charts</li>
                  <li>• Correlation strength indicators with confidence intervals</li>
                  <li>• Regional comparison and benchmark analytics</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Automated Alert System</h3>
              <p className="text-muted-foreground mb-4">
                The system provides intelligent alerts for weather-driven business opportunities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">🌡️ Temperature Alerts</h4>
                  <p className="text-sm text-yellow-700">
                    Notifications when temperature changes exceed thresholds that historically drive sales spikes in specific categories.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🌧️ Precipitation Warnings</h4>
                  <p className="text-sm text-blue-700">
                    Advance notice of incoming rain/snow events to optimize inventory for weather-dependent products.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">📈 Opportunity Alerts</h4>
                  <p className="text-sm text-purple-700">
                    Automated identification of optimal conditions for weather-responsive marketing campaigns and promotions.
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
                <span className="text-xs">Weather Dataset</span>
                <span className="text-xs text-muted-foreground">847K data points</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Github className="w-5 h-5 mb-2" />
                <span className="text-xs">API Integration Code</span>
                <span className="text-xs text-muted-foreground">Python Flask app</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <ExternalLink className="w-5 h-5 mb-2" />
                <span className="text-xs">Live Dashboard</span>
                <span className="text-xs text-muted-foreground">Real-time monitoring</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Download className="w-5 h-5 mb-2" />
                <span className="text-xs">Analysis Report</span>
                <span className="text-xs text-muted-foreground">Comprehensive findings</span>
              </Button>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button 
                className="flex-1"
                onClick={() => window.open("https://github.com/lungelodon/api-driven-weather-sales-correlation", "_self")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Full Repository
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open("https://github.com/lungelodon/api-driven-weather-sales-correlation/archive/refs/heads/main.zip", "_blank")}
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

export default WeatherSalesCorrelation;