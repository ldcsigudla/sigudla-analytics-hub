import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InfrastructureResilience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Infrastructure Resilience & Crime Correlation Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Analyzing the impact of infrastructure resilience on public safety
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Cross-sectional analysis correlating power outages and network connectivity with crime patterns to quantify infrastructure resilience impact.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Panel Data Analysis & Regression Modeling</li>
                    <li>Eskom Load-Shedding Data</li>
                    <li>Crime Statistics & Network Performance</li>
                    <li>Python (Statsmodels, Pandas, Matplotlib)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Quantifies the social value of infrastructure resilience investments and supports policy advocacy for critical systems.
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

export default InfrastructureResilience;
