import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PatentAnalysis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Patent Landscape & Innovation White-Space Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Technology trend analysis and innovation opportunity identification
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Patent clustering and trend analysis using Google Patents BigQuery to identify technology gaps and innovation opportunities in RF and emerging tech.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Topic Modeling (LDA) & Text Clustering</li>
                    <li>Google Patents BigQuery & USPTO Data</li>
                    <li>Network Analysis & Embeddings</li>
                    <li>Python (Scikit-learn, NLTK, BigQuery)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Identifies untapped innovation opportunities and competitive intelligence for strategic IP planning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted p-8 rounded-lg text-center">
            <p className="text-muted-foreground">
              Detailed analysis and results coming soon
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PatentAnalysis;
