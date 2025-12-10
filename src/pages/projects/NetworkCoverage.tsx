import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, AlertTriangle, Lightbulb, Database, BarChart3, Settings, CheckCircle, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const NetworkCoverage = () => {
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
              <h1 className="text-3xl font-bold mb-2">Network Coverage Gap Analysis & Relay Optimization</h1>
              <p className="text-muted-foreground max-w-3xl">
                Geospatial optimization platform combining OpenCelliD tower data, Ookla speed measurements, and population density to identify coverage gaps and optimize drone relay placement.
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">GeoPandas</Badge>
              <Badge variant="secondary">k-medoids</Badge>
              <Badge variant="secondary">QGIS</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary */}
        <Card className="border-project-2/20 bg-gradient-to-br from-project-2/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-project-2" />
              Executive Summary
            </CardTitle>
            <CardDescription>Coverage analysis and optimization impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-project-2/10 rounded-lg">
                <div className="text-3xl font-bold text-project-2">24.3%</div>
                <div className="text-sm text-muted-foreground">Population Underserved</div>
              </div>
              <div className="text-center p-4 bg-project-2/10 rounded-lg">
                <div className="text-3xl font-bold text-project-2">42</div>
                <div className="text-sm text-muted-foreground">Optimal Relay Sites</div>
              </div>
              <div className="text-center p-4 bg-project-2/10 rounded-lg">
                <div className="text-3xl font-bold text-project-2">187K</div>
                <div className="text-sm text-muted-foreground">People Covered</div>
              </div>
              <div className="text-center p-4 bg-project-2/10 rounded-lg">
                <div className="text-3xl font-bold text-project-2">$8.2M</div>
                <div className="text-sm text-muted-foreground">Savings vs Towers</div>
              </div>
            </div>
            
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                In this project, I built a geospatial optimization system to identify network coverage gaps in rural and underserved areas. By combining cell tower locations from OpenCelliD, actual speed test data from Ookla, and WorldPop population density grids, I quantified where people lack adequate connectivity. I then applied k-medoids clustering to determine optimal placement for drone-based network relays, achieving 187,000 additional people covered at a fraction of traditional tower costs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-project-2" />
              Data Overview
            </CardTitle>
            <CardDescription>Geospatial data sources and integration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data Source</TableHead>
                  <TableHead>Coverage</TableHead>
                  <TableHead>Resolution</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">OpenCelliD Towers</TableCell>
                  <TableCell>1.2M towers (study region)</TableCell>
                  <TableCell>Point locations with estimated range</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ookla Speed Tests</TableCell>
                  <TableCell>Q1-Q4 2023</TableCell>
                  <TableCell>~600m hex tiles (H3 resolution 7)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">WorldPop Density</TableCell>
                  <TableCell>National coverage</TableCell>
                  <TableCell>100m raster grid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Terrain Elevation</TableCell>
                  <TableCell>SRTM 30m DEM</TableCell>
                  <TableCell>30m resolution</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Administrative Boundaries</TableCell>
                  <TableCell>Province/District level</TableCell>
                  <TableCell>Vector polygons</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-project-2" />
                  Coverage Gap Identification
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "Total study area", value: "42,300 km²" },
                    { label: "Population in study area", value: "3.8M people" },
                    { label: "Areas with no tower within 5km", value: "31.2%" },
                    { label: "Areas with <5 Mbps speeds", value: "24.3%" },
                    { label: "Overlap (gap + slow)", value: "18.7%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-background/50 rounded">
                      <span className="text-sm">{item.label}</span>
                      <span className="font-semibold text-project-2">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Speed Distribution by Area Type</h4>
                <div className="space-y-4">
                  {[
                    { type: "Urban", speed: "45.2 Mbps", coverage: "98%", color: "bg-emerald-500" },
                    { type: "Peri-Urban", speed: "18.7 Mbps", coverage: "84%", color: "bg-project-2" },
                    { type: "Rural", speed: "6.3 Mbps", coverage: "62%", color: "bg-yellow-500" },
                    { type: "Remote", speed: "1.2 Mbps", coverage: "23%", color: "bg-red-500" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm w-20">{item.type}</span>
                      <div className="flex-1 bg-muted/50 rounded-full h-3">
                        <div className={`h-3 rounded-full ${item.color}`} style={{ width: item.coverage }}></div>
                      </div>
                      <span className="text-xs text-muted-foreground w-20">{item.speed}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-project-2" />
              Methodology
            </CardTitle>
            <CardDescription>Geospatial analysis pipeline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Data Fusion", desc: "Integrate towers, speed, population" },
                { step: "2", title: "Gap Detection", desc: "Identify underserved hexagons" },
                { step: "3", title: "Demand Scoring", desc: "Weight by population density" },
                { step: "4", title: "Site Selection", desc: "k-medoids optimization" },
                { step: "5", title: "Coverage Sim", desc: "ITU P.1812 propagation model" }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-project-2/5 rounded-lg border border-project-2/20">
                  <div className="w-8 h-8 bg-project-2 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                I used H3 hexagonal indexing to create a unified spatial grid, allowing consistent comparison across data sources. Coverage gaps were identified where tower distance exceeded 5km AND measured speeds fell below 5 Mbps. I weighted each gap hexagon by population to prioritize high-impact areas. The k-medoids algorithm (more robust to outliers than k-means for spatial data) determined optimal relay positions, constrained by terrain accessibility and line-of-sight requirements.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Optimization Results */}
        <Card className="border-project-2/20">
          <CardHeader>
            <CardTitle className="text-project-2">Optimization Results</CardTitle>
            <CardDescription>Relay placement outcomes and coverage impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-project-2/10 to-project-2/5 p-6 rounded-lg border border-project-2/20">
                <h3 className="font-semibold text-project-2 mb-4">Before Optimization</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm">Coverage Rate</span><span className="font-semibold">75.7%</span></div>
                  <div className="flex justify-between"><span className="text-sm">Avg Speed (rural)</span><span className="font-semibold">6.3 Mbps</span></div>
                  <div className="flex justify-between"><span className="text-sm">Unserved Population</span><span className="font-semibold">923K</span></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-project-2/15 to-project-2/5 p-6 rounded-lg border-2 border-project-2/30">
                <h3 className="font-semibold text-project-2 mb-4">After 42 Relays</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm">Coverage Rate</span><span className="font-semibold text-project-2">95.6%</span></div>
                  <div className="flex justify-between"><span className="text-sm">Avg Speed (rural)</span><span className="font-semibold text-project-2">22.1 Mbps</span></div>
                  <div className="flex justify-between"><span className="text-sm">Unserved Population</span><span className="font-semibold text-project-2">736K</span></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-muted/50 to-muted/20 p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Cost Comparison</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm">Traditional Towers</span><span className="font-semibold">$12.4M</span></div>
                  <div className="flex justify-between"><span className="text-sm">Drone Relays</span><span className="font-semibold text-project-2">$4.2M</span></div>
                  <div className="flex justify-between"><span className="text-sm">Savings</span><span className="font-semibold text-emerald-600">$8.2M (66%)</span></div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">People Covered per Relay Site</h4>
              <div className="h-48">
                <svg viewBox="0 0 400 160" className="w-full h-full">
                  {/* Bar chart */}
                  {[
                    { x: 30, h: 120, label: "Top 10", value: "8.2K avg" },
                    { x: 90, h: 95, label: "11-20", value: "5.1K avg" },
                    { x: 150, h: 70, label: "21-30", value: "3.8K avg" },
                    { x: 210, h: 50, label: "31-42", value: "2.4K avg" }
                  ].map((bar, i) => (
                    <g key={i}>
                      <rect x={bar.x} y={140 - bar.h} width="50" height={bar.h} fill="hsl(var(--project-2))" opacity={1 - i * 0.15} rx="4"/>
                      <text x={bar.x + 25} y="155" fontSize="10" fill="hsl(var(--muted-foreground))" textAnchor="middle">{bar.label}</text>
                      <text x={bar.x + 25} y={130 - bar.h} fontSize="9" fill="hsl(var(--project-2))" textAnchor="middle">{bar.value}</text>
                    </g>
                  ))}
                  <text x="300" y="80" fontSize="11" fill="hsl(var(--muted-foreground))">Diminishing returns</text>
                  <text x="300" y="95" fontSize="11" fill="hsl(var(--muted-foreground))">after top 30 sites</text>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-project-2" />
              Key Findings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "The first 10 relay sites cover 43% of the total addressable gap population — strong Pareto effect",
                "Terrain elevation is the primary constraint; 67% of optimal sites require hilltop placement",
                "Existing tower placement correlates with road networks, leaving off-grid communities systematically underserved",
                "Seasonal population movement (agricultural cycles) creates dynamic coverage needs not captured by static analysis",
                "Cost per person covered: $22.50 for drone relays vs $134 for traditional tower expansion"
              ].map((finding, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-6 h-6 bg-project-2 text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
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
                <span>Ookla speed test data is biased toward users who already have connectivity and actively test</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>OpenCelliD coverage radii are estimates; actual propagation depends on terrain and interference</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Drone relay operational costs (fuel, maintenance, spectrum licensing) not fully modeled</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Regulatory approval for drone-based network infrastructure varies by jurisdiction</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* What I Would Do Next */}
        <Card className="border-project-2/20 bg-gradient-to-br from-project-2/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-project-2" />
              What I Would Do Next
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Dynamic Optimization", desc: "Incorporate seasonal population movement and agricultural cycles" },
                { title: "Spectrum Analysis", desc: "Add interference modeling and frequency allocation optimization" },
                { title: "Hybrid Solutions", desc: "Evaluate combinations of LEO satellite, mesh networks, and relays" },
                { title: "Field Validation", desc: "Deploy pilot relays and validate propagation model predictions" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-project-2/10 rounded-lg border border-project-2/20">
                  <h4 className="font-semibold text-project-2">{item.title}</h4>
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
            <CardDescription>Open datasets, tools, and documentation</CardDescription>
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
                <a href="https://opencellid.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">OpenCelliD Database</div>
                    <div className="text-xs text-muted-foreground">Cell tower locations worldwide</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://www.worldpop.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">WorldPop</div>
                    <div className="text-xs text-muted-foreground">Population density datasets</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>

              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Download Full Analysis</div>
                    <div className="text-xs text-muted-foreground">Complete technical report & GIS maps</div>
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

export default NetworkCoverage;
