import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BatteryRUL = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Battery RUL & Warranty Risk Modeling
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Predictive models for remaining useful life and warranty risk assessment of Li-ion batteries
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Machine learning models predicting remaining useful life and warranty risk curves for Li-ion batteries using NASA cycling data with uncertainty quantification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Time Series Analysis & RNN/LSTM Models</li>
                    <li>Survival Analysis & Conformal Prediction</li>
                    <li>NASA Battery Archive Datasets</li>
                    <li>Python (TensorFlow, Scikit-learn)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Enables predictive maintenance, optimized warranty strategies, and second-life battery assessment for cost reduction and revenue optimization.
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

export default BatteryRUL;
