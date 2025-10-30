import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RFCoverage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            RF Link Budget & Coverage Heatmap Modeling
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Radio frequency propagation modeling and coverage prediction
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Radio frequency propagation modeling using ITU standards to generate predicted coverage heatmaps compared with real-world signal measurements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>ITU P.1812/P.452 Propagation Models</li>
                    <li>OpenCelliD Tower Database</li>
                    <li>Ookla Speed Test Validation</li>
                    <li>Python (GeoPandas, Matplotlib, SciPy)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Enables accurate network planning and coverage prediction before infrastructure deployment, reducing costs.
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

export default RFCoverage;
