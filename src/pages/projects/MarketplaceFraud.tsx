import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MarketplaceFraud = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Marketplace Fraud Detection & Dynamic Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Advanced fraud detection and pricing optimization for digital marketplaces
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Anomaly detection and fraud prediction models for financial transactions with dynamic pricing simulation for credit-based marketplaces.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Anomaly Detection & Isolation Forest</li>
                    <li>Graph Analytics for Transaction Networks</li>
                    <li>PaySim & Ethereum Fraud Datasets</li>
                    <li>Python (Scikit-learn, NetworkX, Pandas)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Reduces fraud losses while optimizing pricing to maximize marketplace revenue and user satisfaction.
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

export default MarketplaceFraud;
