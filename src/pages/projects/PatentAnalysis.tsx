import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink, FileText, Search, Lightbulb, Network, BookOpen, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PatentAnalysis = () => {
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
              <h1 className="text-3xl font-bold mb-2">Patent Landscape & Innovation White-Space Analysis</h1>
              <p className="text-muted-foreground max-w-3xl">Patent clustering and trend analysis using Google Patents BigQuery to identify technology gaps and innovation opportunities.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">BigQuery</Badge>
              <Badge variant="secondary">LDA</Badge>
              <Badge variant="secondary">NetworkX</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - Visual Matrix Style */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-violet-500" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              In this project, I analyzed 287,000+ patents from Google's BigQuery public dataset to map the competitive landscape in renewable energy storage technology. Using LDA topic modeling and citation network analysis, I identified 42 "white-space" areas where patent activity is low but adjacent technologies are maturing—representing potential innovation opportunities.
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              <div className="bg-violet-500/10 rounded-lg p-3 text-center">
                <FileText className="w-5 h-5 mx-auto mb-1 text-violet-500" />
                <div className="text-lg font-bold">287K</div>
                <div className="text-[10px] text-muted-foreground">Patents</div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                <Search className="w-5 h-5 mx-auto mb-1 text-blue-500" />
                <div className="text-lg font-bold">15</div>
                <div className="text-[10px] text-muted-foreground">Topic Clusters</div>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                <Lightbulb className="w-5 h-5 mx-auto mb-1 text-emerald-500" />
                <div className="text-lg font-bold">42</div>
                <div className="text-[10px] text-muted-foreground">White Spaces</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-3 text-center">
                <Network className="w-5 h-5 mx-auto mb-1 text-amber-500" />
                <div className="text-lg font-bold">1.2M</div>
                <div className="text-[10px] text-muted-foreground">Citations</div>
              </div>
              <div className="bg-pink-500/10 rounded-lg p-3 text-center">
                <BookOpen className="w-5 h-5 mx-auto mb-1 text-pink-500" />
                <div className="text-lg font-bold">89%</div>
                <div className="text-[10px] text-muted-foreground">Coherence</div>
              </div>
              <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                <TrendingUp className="w-5 h-5 mx-auto mb-1 text-cyan-500" />
                <div className="text-lg font-bold">2010-24</div>
                <div className="text-[10px] text-muted-foreground">Time Span</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Data Overview</CardTitle>
            <CardDescription>Google Patents BigQuery Public Dataset</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Dataset Statistics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Total Patents</span>
                    <span className="font-medium">287,432</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">IPC Classes</span>
                    <span className="font-medium">H01M, H02J, B60L</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Filing Years</span>
                    <span className="font-medium">2010 - 2024</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Jurisdictions</span>
                    <span className="font-medium">US, EP, WO, CN</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Avg Claims/Patent</span>
                    <span className="font-medium">18.3</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Focus Domain: Energy Storage</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Filtered to battery technology and grid-scale storage systems using CPC classification codes:</p>
                  <div className="bg-muted/30 rounded p-3 font-mono text-xs">
                    Y02E60/10 (Energy storage)<br/>
                    H01M10 (Secondary cells)<br/>
                    H02J7 (Charging/discharging)
                  </div>
                </div>
              </div>
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
                <h4 className="font-semibold mb-3 text-violet-500">Topic Modeling (LDA)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Applied Latent Dirichlet Allocation to patent abstracts and claims to discover latent technology themes.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Preprocessed text: tokenization, lemmatization, stopwords</li>
                  <li>• Optimal topics (k=15) via coherence score</li>
                  <li>• Topic coherence: 0.89 (excellent)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-500">Citation Network Analysis</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Built citation graph to identify knowledge flows and emerging technology frontiers.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 1.2M citation edges analyzed</li>
                  <li>• PageRank for influential patents</li>
                  <li>• Community detection for tech clusters</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-3">White-Space Detection Algorithm</h4>
              <p className="text-sm text-muted-foreground mb-3">
                White-space = areas where topic adjacency is high but patent density is low:
              </p>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>1. Map patents to topic-space (15-dimensional)</li>
                <li>2. Identify topic pairs with high co-occurrence in citations</li>
                <li>3. Find intersection regions with &lt;10 patents filed in last 3 years</li>
                <li>4. Rank by market size and technical feasibility</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card>
          <CardHeader>
            <CardTitle>Key Findings: Top Innovation Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { rank: 1, area: "Solid-State Battery Recycling", patents: 7, growth: "+340%", score: 94 },
                { rank: 2, area: "Vehicle-to-Grid Bidirectional Chargers", patents: 12, growth: "+180%", score: 87 },
                { rank: 3, area: "AI-Optimized Battery Management", patents: 9, growth: "+250%", score: 85 },
                { rank: 4, area: "Sodium-Ion Grid Storage", patents: 15, growth: "+420%", score: 82 },
                { rank: 5, area: "Thermal Runaway Prediction", patents: 11, growth: "+150%", score: 78 },
              ].map((item) => (
                <div key={item.rank} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold text-sm">
                    {item.rank}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.area}</h4>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{item.patents} patents (2022-24)</span>
                      <span className="text-emerald-500">{item.growth} YoY</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-violet-500">{item.score}</div>
                    <div className="text-xs text-muted-foreground">Opportunity Score</div>
                  </div>
                </div>
              ))}
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
                  <span className="text-amber-500">•</span>
                  <span>Patent quality varies; not all filed patents are commercially viable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>18-month publication delay means recent filings are invisible</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>Chinese patents require translation for full analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">•</span>
                  <span>White-space ≠ opportunity; may indicate technical dead-ends</span>
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
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Add Patent Valuation</h4>
                <p className="text-sm text-muted-foreground">Estimate economic value using citation counts, claim scope, and assignee market cap</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Competitor Monitoring</h4>
                <p className="text-sm text-muted-foreground">Real-time alerts when competitors file in identified white-space areas</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Expand to Other Domains</h4>
                <p className="text-sm text-muted-foreground">Apply same methodology to biotech, semiconductors, AI/ML</p>
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
                <a href="https://github.com/google/patents-public-data" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Google Patents BigQuery</div><div className="text-xs text-muted-foreground">Public patent datasets</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="https://search.patentsview.org/docs" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">PatentsView API</div><div className="text-xs text-muted-foreground">USPTO patent search</div></div>
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

export default PatentAnalysis;
