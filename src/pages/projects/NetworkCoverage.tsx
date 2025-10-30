import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NetworkCoverage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Network Coverage Gap Analysis & Relay Optimization
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Geospatial optimization for network infrastructure deployment
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Geospatial analysis combining speed test data, tower locations, and population density to optimize network relay placement for underserved areas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Geospatial Analysis & GIS Mapping</li>
                    <li>K-Medoids & Integer Linear Programming</li>
                    <li>Ookla Speed Test Data & OpenCelliD</li>
                    <li>Python (GeoPandas, Folium, PuLP)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Optimizes network deployment costs and maximizes population coverage with data-driven relay placement strategies.
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

export default NetworkCoverage;
