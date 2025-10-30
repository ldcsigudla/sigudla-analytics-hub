import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FlightRouting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Flight Route Optimization with Weather & Traffic
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Intelligent path planning with real-time weather and air traffic integration
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Path planning system integrating real-time weather data and air traffic to optimize routes with risk scoring and collision avoidance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>A* Pathfinding & Route Optimization</li>
                    <li>OpenSky Network Air Traffic Data</li>
                    <li>NOAA Weather API Integration</li>
                    <li>Python (NetworkX, Matplotlib)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Impact</h3>
                  <p className="text-muted-foreground">
                    Reduces flight delays, improves safety margins, and optimizes fuel efficiency through weather-aware routing.
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

export default FlightRouting;
