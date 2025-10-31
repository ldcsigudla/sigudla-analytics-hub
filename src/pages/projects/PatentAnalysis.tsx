import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PatentAnalysis = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4 hover:bg-muted">
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
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <Card className="mb-8">
          <CardHeader><CardTitle>Executive Summary</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center"><div className="text-3xl font-bold text-primary">287K</div><div className="text-sm text-muted-foreground">Patents Analyzed</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-6">42</div><div className="text-sm text-muted-foreground">White-Space Areas</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-6">89%</div><div className="text-sm text-muted-foreground">Topic Coherence</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-project-6">15</div><div className="text-sm text-muted-foreground">Innovation Clusters</div></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Project Resources</CardTitle></CardHeader>
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
                <a href="https://data.uspto.gov/bulkdata" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">USPTO Bulk Data</div><div className="text-xs text-muted-foreground">Patent grants and applications</div></div>
                  <ExternalLink className="w-4 h-4 ml-auto flex-shrink-0" />
                </a>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4" asChild>
                <a href="/Lungelo_Don_Sigudla_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-left"><div className="font-semibold">Download Full Analysis</div></div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatentAnalysis;
