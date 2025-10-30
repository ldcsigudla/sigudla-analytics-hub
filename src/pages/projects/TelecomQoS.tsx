import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TelecomQoS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Telecom QoS & Churn Early Warning System
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Predictive analytics for customer retention and service quality monitoring
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Predictive churn models with SHAP explainability and survival analysis, enriched with quality-of-service metrics to identify at-risk customers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Classification Models & SHAP Explainability</li>
                    <li>Survival Analysis & Cox Regression</li>
                    <li>Telecom QoS Metrics Integration</li>
                    <li>Python (XGBoost, Lifelines, SHAP)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Reduces customer churn through early intervention and identifies service quality issues before they impact retention.
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

export default TelecomQoS;
