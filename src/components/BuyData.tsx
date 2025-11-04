import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, TrendingUp, Users, MapPin, Zap, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const datasets = [
  {
    id: 1,
    title: "Global Sales Analytics Dataset",
    description: "Comprehensive sales data across 50+ countries with customer demographics and purchase patterns",
    price: "$49",
    stats: { records: "500K+", timeRange: "2020-2024", formats: "CSV, JSON, SQL" },
    insights: ["Customer segmentation", "Revenue trends", "Market analysis"],
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "E-Commerce Customer Behavior",
    description: "Detailed clickstream and transaction data from multiple online retail platforms",
    price: "$49",
    stats: { records: "300K+", timeRange: "2021-2024", formats: "CSV, JSON" },
    insights: ["Conversion funnel", "Cart abandonment", "Product affinity"],
    icon: Users,
    color: "text-purple-600",
  },
  {
    id: 3,
    title: "Telecom Network Performance",
    description: "Network quality metrics, coverage maps, and performance indicators from major carriers",
    price: "$49",
    stats: { records: "1M+", timeRange: "2022-2024", formats: "CSV, Parquet" },
    insights: ["Coverage analysis", "QoS metrics", "Network optimization"],
    icon: Zap,
    color: "text-green-600",
  },
  {
    id: 4,
    title: "Transportation & Logistics",
    description: "Flight routes, airline performance, and logistics optimization data",
    price: "$49",
    stats: { records: "800K+", timeRange: "2020-2024", formats: "CSV, SQL" },
    insights: ["Route optimization", "Delay patterns", "Performance metrics"],
    icon: MapPin,
    color: "text-orange-600",
  },
];

export function BuyData() {
  const navigate = useNavigate();

  const handleViewDetails = (datasetId: number) => {
    // Navigate to dataset detail page (to be implemented)
    console.log(`Viewing details for dataset ${datasetId}`);
  };

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Available Datasets</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Professional datasets ready for your analysis - $49 each
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {datasets.map((dataset) => {
            const Icon = dataset.icon;
            return (
              <Card key={dataset.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-muted ${dataset.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold text-primary">{dataset.price}</span>
                  </div>
                  <CardTitle className="text-lg">{dataset.title}</CardTitle>
                  <CardDescription className="text-sm">{dataset.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-muted-foreground">Records</p>
                      <p className="font-semibold">{dataset.stats.records}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Period</p>
                      <p className="font-semibold">{dataset.stats.timeRange}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Formats</p>
                      <p className="font-semibold text-xs">{dataset.stats.formats}</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => handleViewDetails(dataset.id)}
                  >
                    <Database className="mr-2 h-4 w-4" />
                    View Details & Purchase
                  </Button>
                </CardContent>
              </Card>
            );
          })}

        {/* Custom Data Request Card */}
        <Card className="border-2 border-dashed">
          <CardContent className="py-8 text-center">
            <Mail className="h-10 w-10 mx-auto mb-3 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Need Custom Data?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Looking for specific datasets or custom data processing? Get in touch to discuss your requirements.
            </p>
            <Button variant="outline">
              Request Custom Dataset
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
