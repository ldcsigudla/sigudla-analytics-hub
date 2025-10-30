import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MicrogridDispatch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Microgrid Energy Dispatch & Demand Optimization
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Battery storage optimization for cost reduction and grid resilience
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Battery storage optimization system forecasting building load and optimizing charge/discharge cycles to reduce demand charges with ROI calculator.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Time Series Forecasting (ARIMA, Prophet)</li>
                    <li>Linear Programming Optimization</li>
                    <li>PJM/GEFCom Energy Data</li>
                    <li>Python (PyPSA, PuLP, Plotly)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Reduces electricity costs through optimized battery dispatch and provides clear ROI metrics for battery investments.
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

export default MicrogridDispatch;
