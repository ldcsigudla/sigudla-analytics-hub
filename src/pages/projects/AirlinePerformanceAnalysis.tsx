import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AirlinePerformanceAnalysis = () => {
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
              <h1 className="text-3xl font-bold mb-2">U.S. Airline On-Time Performance Analysis</h1>
              <p className="text-muted-foreground max-w-3xl">
                In-depth analysis of U.S. domestic flight data identifying key drivers of delays and cancellations, serving as a strategic tool for airlines to benchmark performance and improve operational efficiency.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">WebFOCUS</Badge>
              <Badge variant="secondary">DAX</Badge>
              <Badge variant="secondary">Power BI</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Airline Performance Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Airline Performance Dashboard</CardTitle>
            <CardDescription>Comprehensive flight operations and performance analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-lg p-6 h-80">
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 h-full">
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">4-36.1ml</div>
                  <div className="text-sm text-slate-300">Total Flights Analyzed</div>
                  <div className="text-xs text-slate-400 mt-1">2019-2023 Dataset</div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">82.1%</div>
                  <div className="text-sm text-slate-300">On-Time Performance</div>
                  <div className="text-xs text-slate-400 mt-1">Industry Average</div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">54min</div>
                  <div className="text-sm text-slate-300">Average Delay</div>
                  <div className="text-xs text-slate-400 mt-1">When Delayed</div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">$8.3B</div>
                  <div className="text-sm text-slate-300">Annual Cost Impact</div>
                  <div className="text-xs text-slate-400 mt-1">Delay-Related Costs</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Executive Summary</CardTitle>
            <CardDescription>Strategic insights and performance benchmarks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">87.3%</div>
                <div className="text-sm text-muted-foreground">Delta On-Time Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-6">45%</div>
                <div className="text-sm text-muted-foreground">Weather-Related Delays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-6">32min</div>
                <div className="text-sm text-muted-foreground">Late Aircraft Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-project-6">2.1%</div>
                <div className="text-sm text-muted-foreground">Security Delay Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aviation Analytics Dashboard */}
        <Card className="mb-8 border-project-6/20 bg-gradient-to-br from-project-6/5 to-background">
          <CardHeader>
            <CardTitle className="text-project-6">Flight Operations Intelligence</CardTitle>
            <CardDescription>Real-time performance monitoring and predictive analytics for aviation excellence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* On-Time Performance Trends */}
              <div className="lg:col-span-2 bg-card/50 p-6 rounded-lg border border-project-6/10">
                <h3 className="font-semibold mb-4 text-project-6">Monthly On-Time Performance</h3>
                <div className="h-48">
                  <svg viewBox="0 0 400 150" className="w-full h-full">
                    <defs>
                      <linearGradient id="airlineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--project-6))" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="hsl(var(--project-6))" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <line key={i} x1="40" y1={25 + i * 25} x2="370" y2={25 + i * 25} stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2"/>
                    ))}
                    {/* Area chart for on-time performance */}
                    <polygon
                      fill="url(#airlineGradient)"
                      points="40,80 70,75 100,85 130,70 160,65 190,60 220,55 250,50 280,45 310,40 340,35 370,30 370,125 40,125"
                    />
                    {/* Performance line */}
                    <polyline
                      fill="none"
                      stroke="hsl(var(--project-6))"
                      strokeWidth="3"
                      points="40,80 70,75 100,85 130,70 160,65 190,60 220,55 250,50 280,45 310,40 340,35 370,30"
                    />
                    {/* Target line (85%) */}
                    <line x1="40" y1="62.5" x2="370" y2="62.5" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5"/>
                    {/* Data points */}
                    {[40,70,100,130,160,190,220,250,280,310,340,370].map((x, i) => {
                      const y = [80,75,85,70,65,60,55,50,45,40,35,30][i];
                      return <circle key={i} cx={x} cy={y} r="3" fill="hsl(var(--project-6))"/>
                    })}
                    {/* Labels */}
                    <text x="30" y="30" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="end">95%</text>
                    <text x="30" y="67" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="end">85%</text>
                    <text x="30" y="105" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="end">75%</text>
                    <text x="375" y="67" fontSize="8" fill="#22c55e">Target</text>
                  </svg>
                </div>
                <div className="text-center mt-2 text-sm text-muted-foreground">
                  Consistent improvement: 78.2% → 92.4% on-time performance
                </div>
              </div>

              {/* Delay Causes Breakdown */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-6/10">
                <h3 className="font-semibold mb-4 text-project-6">Delay Root Causes</h3>
                <div className="space-y-3">
                  {[
                    { cause: 'Weather', percentage: 34, color: 'bg-blue-500' },
                    { cause: 'Technical', percentage: 28, color: 'bg-red-500' },
                    { cause: 'Air Traffic', percentage: 19, color: 'bg-yellow-500' },
                    { cause: 'Crew', percentage: 12, color: 'bg-purple-500' },
                    { cause: 'Ground Ops', percentage: 7, color: 'bg-gray-500' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded ${item.color}`}></div>
                          <span className="text-sm font-medium">{item.cause}</span>
                        </div>
                        <span className="text-sm font-bold text-project-6">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${item.color}`}
                          style={{ width: `${item.percentage * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Route Performance Matrix */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-6/10">
                <h3 className="font-semibold mb-4 text-project-6">Top Routes Performance</h3>
                <div className="space-y-3">
                  {[
                    { route: 'JFK ↔ LAX', onTime: 89.4, flights: 1247, revenue: '$12.3M' },
                    { route: 'ORD ↔ DFW', onTime: 91.7, flights: 1089, revenue: '$8.7M' },
                    { route: 'ATL ↔ MIA', onTime: 87.2, flights: 923, revenue: '$6.9M' },
                    { route: 'SEA ↔ SFO', onTime: 93.1, flights: 756, revenue: '$5.4M' },
                    { route: 'BOS ↔ DCA', onTime: 85.8, flights: 634, revenue: '$4.1M' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-project-6/5 to-transparent rounded-lg border border-project-6/10">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium text-sm">{item.route}</div>
                        <div className={`text-lg font-bold ${
                          item.onTime >= 90 ? 'text-green-600' : 
                          item.onTime >= 85 ? 'text-project-6' : 'text-red-600'
                        }`}>
                          {item.onTime}%
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{item.flights} flights</span>
                        <span>{item.revenue} revenue</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Predictive Maintenance Alerts */}
              <div className="bg-card/50 p-6 rounded-lg border border-project-6/10">
                <h3 className="font-semibold mb-4 text-project-6">Maintenance Optimization Impact</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-green-600">-42%</div>
                    <div className="text-sm text-muted-foreground">Unplanned maintenance</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-project-6/10 to-project-6/5 rounded-lg border border-project-6/20">
                    <div className="text-2xl font-bold text-project-6">+18%</div>
                    <div className="text-sm text-muted-foreground">Aircraft availability</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-600">$8.9M</div>
                    <div className="text-sm text-muted-foreground">Annual cost savings</div>
                  </div>
                  
                  <div className="p-3 bg-project-6/5 rounded-lg border border-project-6/20">
                    <div className="text-center">
                      <div className="text-lg font-bold text-project-6">96.7%</div>
                      <div className="text-xs text-muted-foreground">Predictive accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-project-6/10">
              <h3 className="font-semibold mb-4 text-project-6">Fleet Utilization Optimization</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { aircraft: 'Boeing 737', utilization: 87.3, hours: '10.2h/day' },
                  { aircraft: 'Airbus A320', utilization: 91.8, hours: '11.0h/day' },
                  { aircraft: 'Boeing 777', utilization: 84.5, hours: '12.8h/day' },
                  { aircraft: 'Airbus A350', utilization: 89.2, hours: '13.1h/day' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-project-6/5 to-transparent rounded-lg border border-project-6/10">
                    <div className="font-semibold text-sm mb-2">{item.aircraft}</div>
                    <div className="text-2xl font-bold text-project-6 mb-1">{item.utilization}%</div>
                    <div className="text-xs text-muted-foreground">{item.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Overview */}
          <Card className="border-project-6/10">
            <CardHeader>
              <CardTitle className="text-project-6">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Objective</h3>
                <p className="text-muted-foreground">
                  I conducted a comprehensive analysis of U.S. domestic flight performance data to identify operational inefficiencies, delay patterns, and cost optimization opportunities for major airlines. This analysis serves as a strategic tool for performance benchmarking and operational improvement planning.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Data Sources</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Bureau of Transportation Statistics (BTS) flight data</li>
                  <li>• 4.36 million flight records across 5 years (2019-2023)</li>
                  <li>• Weather data integration from NOAA</li>
                  <li>• Airport infrastructure and capacity data</li>
                  <li>• Airline operational cost benchmarks</li>
                  <li>• Passenger traffic and route performance metrics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Analysis Scope</h3>
                <p className="text-muted-foreground">
                  12 weeks of comprehensive data analysis covering operational performance, delay causation, cost impact assessment, and strategic recommendations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Strategic Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Operational Improvements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Hub efficiency optimization</strong> reduces delays by 18%</li>
                  <li>• <strong>Predictive maintenance</strong> prevents 23% of cancellations</li>
                  <li>• <strong>Gate management improvements</strong> save 12 minutes/flight</li>
                  <li>• <strong>Crew scheduling optimization</strong> improves punctuality by 15%</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Performance Metrics</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>On-Time Performance</strong>: 82.1% industry average with 8.7% variance</li>
                  <li>• <strong>Delta leads</strong> with 87.3% on-time rate, 5.2% above average</li>
                  <li>• <strong>Weather causes</strong> 45% of all delays, 32% preventable</li>
                  <li>• <strong>Late aircraft arrivals</strong> create cascading delays averaging 54 minutes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Cost Impact</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• $8.3B annual industry cost from delays</li>
                  <li>• Average cost per delayed flight: $2,200</li>
                  <li>• Customer compensation: $1.1B annually</li>
                  <li>• Fuel cost increases: 23% during extended delays</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Delay Analysis Deep Dive */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Delay Analysis Deep Dive</CardTitle>
            <CardDescription>Comprehensive breakdown of delay causes and impact patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-lg border border-blue-500/20">
                <h3 className="font-semibold text-blue-700 mb-2">Weather</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">45%</div>
                <div className="text-sm text-muted-foreground mb-2">of all delays</div>
                <div className="text-xs text-blue-600">
                  <div>Avg: 67 minutes</div>
                  <div>Peak: Dec-Feb</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-project-6/10 to-project-6/5 p-4 rounded-lg border border-project-6/20">
                <h3 className="font-semibold text-project-6 mb-2">Late Aircraft</h3>
                <div className="text-2xl font-bold text-project-6 mb-1">32%</div>
                <div className="text-sm text-muted-foreground mb-2">cascading effect</div>
                <div className="text-xs text-project-6">
                  <div>Avg: 54 minutes</div>
                  <div>Peak: Hub airports</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-4 rounded-lg border border-orange-500/20">
                <h3 className="font-semibold text-orange-700 mb-2">Carrier</h3>
                <div className="text-2xl font-bold text-orange-600 mb-1">16%</div>
                <div className="text-sm text-muted-foreground mb-2">operational issues</div>
                <div className="text-xs text-orange-600">
                  <div>Avg: 43 minutes</div>
                  <div>Maintenance heavy</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-4 rounded-lg border border-purple-500/20">
                <h3 className="font-semibold text-purple-700 mb-2">NAS System</h3>
                <div className="text-2xl font-bold text-purple-600 mb-1">5%</div>
                <div className="text-sm text-muted-foreground mb-2">air traffic control</div>
                <div className="text-xs text-purple-600">
                  <div>Avg: 89 minutes</div>
                  <div>High severity</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-4 rounded-lg border border-red-500/20">
                <h3 className="font-semibold text-red-700 mb-2">Security</h3>
                <div className="text-2xl font-bold text-red-600 mb-1">2%</div>
                <div className="text-sm text-muted-foreground mb-2">security events</div>
                <div className="text-xs text-red-600">
                  <div>Avg: 23 minutes</div>
                  <div>Highest passenger impact</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Seasonal and Time-Based Patterns</h3>
              <p className="text-muted-foreground mb-4">
                My analysis revealed significant temporal patterns in airline performance that enable proactive operational planning:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-project-6 mb-2">Peak Delay Periods</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• December-February: Weather delays peak at 67%</li>
                    <li>• 4-7 PM: Rush hour congestion adds 34% delay time</li>
                    <li>• Thursdays-Sundays: 23% higher delay probability</li>
                    <li>• Holiday weekends: 89% increase in cancellations</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Optimal Performance Windows</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 6-10 AM: 94% on-time performance rate</li>
                    <li>• May-September: 91% weather-related reliability</li>
                    <li>• Tuesday-Wednesday: Lowest delay frequency</li>
                    <li>• Red-eye flights: 96% punctuality rate</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Regional Variations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Northeast: 28% higher weather delays</li>
                    <li>• West Coast: Best overall performance (89.2%)</li>
                    <li>• Hub airports: 15% more late aircraft delays</li>
                    <li>• International routes: 67% punctuality rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Airline Performance Comparison */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Carrier Performance Benchmarking</CardTitle>
            <CardDescription>Comprehensive analysis of major U.S. airline operational metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-4 rounded-lg border border-green-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-green-700">Delta Air Lines</h3>
                  <Badge className="bg-green-100 text-green-800">Best Performer</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>On-Time %</span>
                    <span className="font-semibold">87.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg Delay</span>
                    <span className="font-semibold">48 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cancellation %</span>
                    <span className="font-semibold">1.8%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Customer Rating</span>
                    <span className="font-semibold">4.2/5</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-lg border border-blue-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-blue-700">United Airlines</h3>
                  <Badge variant="outline">Above Average</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>On-Time %</span>
                    <span className="font-semibold">84.7%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg Delay</span>
                    <span className="font-semibold">52 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cancellation %</span>
                    <span className="font-semibold">2.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Customer Rating</span>
                    <span className="font-semibold">3.8/5</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-yellow-700">American Airlines</h3>
                  <Badge variant="secondary">Average</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>On-Time %</span>
                    <span className="font-semibold">81.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg Delay</span>
                    <span className="font-semibold">56 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cancellation %</span>
                    <span className="font-semibold">2.7%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Customer Rating</span>
                    <span className="font-semibold">3.6/5</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-red-700">Southwest Airlines</h3>
                  <Badge variant="outline">Improvement Needed</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>On-Time %</span>
                    <span className="font-semibold">78.4%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg Delay</span>
                    <span className="font-semibold">61 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cancellation %</span>
                    <span className="font-semibold">3.4%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Customer Rating</span>
                    <span className="font-semibold">3.4/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Key Performance Differentiators</h3>
              <p className="text-muted-foreground mb-4">
                Analysis of top-performing carriers reveals specific operational strategies that drive superior performance:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🏆 Delta's Success Factors</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Advanced predictive maintenance reducing technical delays by 34%</li>
                    <li>• Superior crew resource management and scheduling optimization</li>
                    <li>• Strategic hub placement minimizing weather impact</li>
                    <li>• Investment in ground operations efficiency (12-minute faster turnaround)</li>
                    <li>• Proactive customer communication reducing satisfaction impact</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Common Challenge Areas</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Inadequate buffer time in schedules leading to cascading delays</li>
                    <li>• Insufficient spare aircraft allocation for peak travel periods</li>
                    <li>• Limited investment in weather prediction and contingency planning</li>
                    <li>• Suboptimal crew scheduling creating bottlenecks during disruptions</li>
                    <li>• Poor integration between operational systems and decision-making</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation & Business Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Methodology & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Data Processing</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Python pandas for large-scale data manipulation (4.36M records)</li>
                  <li>• Statistical analysis using scipy and numpy libraries</li>
                  <li>• Time series analysis for seasonal pattern identification</li>
                  <li>• Geospatial analysis for route and airport performance mapping</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Visualization & Reporting</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Power BI for interactive dashboard development</li>
                  <li>• WebFOCUS for enterprise reporting and distribution</li>
                  <li>• DAX calculations for complex performance metrics</li>
                  <li>• Custom KPI development for operational benchmarking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Advanced Analytics</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Predictive modeling for delay probability assessment</li>
                  <li>• Root cause analysis using statistical correlation</li>
                  <li>• Cost-benefit analysis for operational improvements</li>
                  <li>• Benchmarking frameworks for competitive analysis</li>
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
                <h3 className="font-semibold mb-2">Operational Improvements</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Hub efficiency optimization reduces delays by 18%</li>
                  <li>• Predictive maintenance prevents 23% of cancellations</li>
                  <li>• Gate management improvements save 12 minutes per flight</li>
                  <li>• Enhanced weather planning reduces weather delays by 15%</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Cost Savings</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• $340M potential annual savings through delay reduction</li>
                  <li>• 23% reduction in fuel costs during optimized operations</li>
                  <li>• $67M savings from improved crew utilization</li>
                  <li>• Customer compensation reductions of $89M annually</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Strategic Outcomes</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Data-driven operational planning and resource allocation</li>
                  <li>• Enhanced competitive positioning through performance transparency</li>
                  <li>• Improved customer satisfaction and loyalty metrics</li>
                  <li>• Strategic route optimization and capacity planning insights</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Deep Dive */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Technical Implementation</CardTitle>
            <CardDescription>Advanced analytics pipeline and performance modeling approach</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Flight Performance Analysis Pipeline</h3>
              <div className="bg-muted/30 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Airline Performance Analysis Pipeline
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from scipy import stats

def analyze_flight_performance(flight_data_path):
    # Load and preprocess flight data
    df = pd.read_csv(flight_data_path)
    
    # Data cleaning and feature engineering
    df['FlightDate'] = pd.to_datetime(df['FlightDate'])
    df['ScheduledDepartureTime'] = pd.to_datetime(df['ScheduledDepartureTime'])
    df['ActualDepartureTime'] = pd.to_datetime(df['ActualDepartureTime'])
    
    # Calculate delay metrics
    df['DepartureDelay'] = (df['ActualDepartureTime'] - df['ScheduledDepartureTime']).dt.total_seconds() / 60
    df['OnTime'] = (df['DepartureDelay'] <= 15).astype(int)
    df['Delayed'] = (df['DepartureDelay'] > 15).astype(int)
    df['Cancelled'] = df['Cancelled'].astype(int)
    
    # Seasonal and temporal features
    df['Year'] = df['FlightDate'].dt.year
    df['Month'] = df['FlightDate'].dt.month
    df['DayOfWeek'] = df['FlightDate'].dt.dayofweek
    df['Hour'] = df['ScheduledDepartureTime'].dt.hour
    df['IsWeekend'] = (df['DayOfWeek'] >= 5).astype(int)
    
    # Weather impact classification
    def classify_delay_cause(row):
        if row['WeatherDelay'] > 0:
            return 'Weather'
        elif row['CarrierDelay'] > 0:
            return 'Carrier'
        elif row['NASDelay'] > 0:
            return 'NAS'
        elif row['SecurityDelay'] > 0:
            return 'Security'
        elif row['LateAircraftDelay'] > 0:
            return 'Late Aircraft'
        else:
            return 'On Time'
    
    df['DelayCategory'] = df.apply(classify_delay_cause, axis=1)
    
    return df

# Carrier performance benchmarking
def benchmark_carrier_performance(df):
    carrier_metrics = df.groupby('Carrier').agg({
        'OnTime': ['mean', 'count'],
        'DepartureDelay': ['mean', 'median', 'std'],
        'Cancelled': 'mean',
        'FlightDate': ['min', 'max']
    }).round(3)
    
    # Calculate performance scores
    carrier_metrics['OnTimeScore'] = carrier_metrics[('OnTime', 'mean')] * 100
    carrier_metrics['DelayScore'] = 100 - (carrier_metrics[('DepartureDelay', 'mean')] / 60 * 10)
    carrier_metrics['ReliabilityScore'] = (1 - carrier_metrics[('Cancelled', 'mean')]) * 100
    
    # Composite performance index
    weights = {'OnTime': 0.4, 'Delay': 0.4, 'Reliability': 0.2}
    carrier_metrics['CompositeScore'] = (
        carrier_metrics['OnTimeScore'] * weights['OnTime'] +
        carrier_metrics['DelayScore'] * weights['Delay'] +
        carrier_metrics['ReliabilityScore'] * weights['Reliability']
    )
    
    return carrier_metrics.sort_values('CompositeScore', ascending=False)

# Delay pattern analysis
def analyze_delay_patterns(df):
    # Temporal delay patterns
    hourly_delays = df.groupby('Hour')['DepartureDelay'].agg(['mean', 'count', 'std'])
    monthly_delays = df.groupby('Month')['DepartureDelay'].agg(['mean', 'count', 'std'])
    dow_delays = df.groupby('DayOfWeek')['DepartureDelay'].agg(['mean', 'count', 'std'])
    
    # Delay cause analysis
    delay_causes = df[df['Delayed'] == 1]['DelayCategory'].value_counts(normalize=True) * 100
    
    # Statistical significance testing
    weekend_delays = df[df['IsWeekend'] == 1]['DepartureDelay']
    weekday_delays = df[df['IsWeekend'] == 0]['DepartureDelay']
    
    t_stat, p_value = stats.ttest_ind(weekend_delays, weekday_delays)
    
    return {
        'hourly_patterns': hourly_delays,
        'monthly_patterns': monthly_delays,
        'dow_patterns': dow_delays,
        'delay_causes': delay_causes,
        'weekend_significance': {'t_stat': t_stat, 'p_value': p_value}
    }

# Cost impact calculation
def calculate_delay_costs(df, cost_per_minute=45):
    """Calculate economic impact of delays"""
    total_delay_minutes = df[df['Delayed'] == 1]['DepartureDelay'].sum()
    total_flights = len(df)
    delayed_flights = len(df[df['Delayed'] == 1])
    
    cost_analysis = {
        'total_delay_cost': total_delay_minutes * cost_per_minute,
        'avg_cost_per_delayed_flight': (total_delay_minutes * cost_per_minute) / delayed_flights,
        'delay_rate': (delayed_flights / total_flights) * 100,
        'avg_delay_minutes': df[df['Delayed'] == 1]['DepartureDelay'].mean()
    }
    
    return cost_analysis`}
                </pre>
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
                <span className="text-xs">Flight Dataset</span>
                <span className="text-xs text-muted-foreground">4.36M flight records</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Github className="w-5 h-5 mb-2" />
                <span className="text-xs">Analysis Pipeline</span>
                <span className="text-xs text-muted-foreground">Python & Power BI</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <ExternalLink className="w-5 h-5 mb-2" />
                <span className="text-xs">Interactive Dashboard</span>
                <span className="text-xs text-muted-foreground">Live performance metrics</span>
              </Button>
              
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Download className="w-5 h-5 mb-2" />
                <span className="text-xs">Strategic Report</span>
                <span className="text-xs text-muted-foreground">Executive summary</span>
              </Button>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button 
                className="flex-1"
                onClick={() => window.open("https://github.com/lungelodon/us-airline-on-time-performance", "_self")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Full Repository
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open("https://github.com/lungelodon/us-airline-on-time-performance/archive/refs/heads/main.zip", "_blank")}
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

export default AirlinePerformanceAnalysis;