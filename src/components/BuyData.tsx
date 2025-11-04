import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, TrendingUp, Users, ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const datasets = [
  {
    id: 1,
    title: "Global Customer Segmentation Dataset",
    description: "Complete RFM analysis dataset with 500K+ customer records across 50 countries",
    category: "Customer Analytics",
    price: "$299",
    stats: { records: "500K+", features: "25", fileSize: "120MB" },
    insights: ["Geographic distribution", "Purchase patterns", "Customer lifetime value"],
    icon: Users,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    id: 2,
    title: "Telecom Churn Prediction Dataset",
    description: "Rich dataset with customer behavior, network quality metrics, and churn indicators",
    category: "Predictive Analytics",
    price: "$349",
    stats: { records: "1M+", features: "42", fileSize: "280MB" },
    insights: ["Service usage patterns", "Quality metrics", "Churn risk scores"],
    icon: TrendingUp,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
  {
    id: 3,
    title: "Time Series Forecasting Collection",
    description: "Multi-domain time series data including sales, weather, and market trends",
    category: "Time Series",
    price: "$449",
    stats: { records: "2M+", features: "35", fileSize: "450MB" },
    insights: ["Seasonal patterns", "Trend analysis", "Forecast ready"],
    icon: Database,
    color: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  {
    id: 4,
    title: "E-commerce Transaction Dataset",
    description: "Complete transaction logs with product details, user behavior, and pricing history",
    category: "E-commerce",
    price: "$399",
    stats: { records: "750K+", features: "38", fileSize: "195MB" },
    insights: ["Purchase sequences", "Pricing elasticity", "Product affinity"],
    icon: ShoppingCart,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  },
];

export function BuyData() {
  const navigate = useNavigate();

  const handleViewDetails = (datasetId: number) => {
    // Navigate to dataset detail page (to be created)
    navigate(`/dataset/${datasetId}`);
  };

  return (
    <section id="buy-data" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-semibold text-primary">Premium Data Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Buy My Data</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            High-quality, processed datasets ready for your analysis. One-time purchase, lifetime access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {datasets.map((dataset) => {
            const Icon = dataset.icon;
            return (
              <Card 
                key={dataset.id}
                className={`group hover:shadow-2xl transition-all duration-300 border-2 ${dataset.color} hover:scale-[1.02]`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl ${dataset.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {dataset.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {dataset.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {dataset.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Badge variant="outline">{dataset.category}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="font-bold text-sm">{dataset.stats.records}</div>
                      <div className="text-xs text-muted-foreground">Records</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="font-bold text-sm">{dataset.stats.features}</div>
                      <div className="text-xs text-muted-foreground">Features</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="font-bold text-sm">{dataset.stats.fileSize}</div>
                      <div className="text-xs text-muted-foreground">Size</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Key Insights:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {dataset.insights.map((insight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary"></span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    onClick={() => handleViewDetails(dataset.id)}
                    className="w-full bg-primary hover:bg-primary/90 font-semibold"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details & Purchase
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block border-2 border-dashed border-primary/30 bg-primary/5 max-w-2xl">
            <CardContent className="py-8 px-6">
              <h3 className="text-xl font-semibold mb-2">Need Custom Data?</h3>
              <p className="text-muted-foreground mb-4">
                Looking for specific datasets or custom data processing? Get in touch to discuss your requirements.
              </p>
              <Button variant="outline" size="lg">
                Request Custom Dataset
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
