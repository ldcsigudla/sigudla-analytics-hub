import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, TrendingUp, Users, MapPin, Zap, Mail, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const datasets = [
  {
    id: 1,
    title: "Global Sales Analytics Dataset",
    description: "Comprehensive sales data across 50+ countries with customer demographics and purchase patterns",
    stats: { records: "500K+", timeRange: "2020-2024", formats: "CSV, JSON, SQL" },
    insights: ["Customer segmentation", "Revenue trends", "Market analysis"],
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "E-Commerce Customer Behavior",
    description: "Detailed clickstream and transaction data from multiple online retail platforms",
    stats: { records: "300K+", timeRange: "2021-2024", formats: "CSV, JSON" },
    insights: ["Conversion funnel", "Cart abandonment", "Product affinity"],
    icon: Users,
    color: "text-purple-600",
  },
  {
    id: 3,
    title: "Telecom Network Performance",
    description: "Network quality metrics, coverage maps, and performance indicators from major carriers",
    stats: { records: "1M+", timeRange: "2022-2024", formats: "CSV, Parquet" },
    insights: ["Coverage analysis", "QoS metrics", "Network optimization"],
    icon: Zap,
    color: "text-green-600",
  },
  {
    id: 4,
    title: "Transportation & Logistics",
    description: "Flight routes, airline performance, and logistics optimization data",
    stats: { records: "800K+", timeRange: "2020-2024", formats: "CSV, SQL" },
    insights: ["Route optimization", "Delay patterns", "Performance metrics"],
    icon: MapPin,
    color: "text-orange-600",
  },
];

interface RequestFormData {
  name: string;
  email: string;
  message: string;
}

export function BuyData() {
  const [selectedDataset, setSelectedDataset] = useState<typeof datasets[0] | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RequestFormData>({ name: "", email: "", message: "" });

  const handleViewDetails = (dataset: typeof datasets[0]) => {
    setSelectedDataset(dataset);
    setShowRequestForm(true);
  };

  const handleSubmitRequest = async (isCustom: boolean = false) => {
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("dataset_requests").insert({
        dataset_id: isCustom ? 0 : (selectedDataset?.id || 0),
        dataset_title: isCustom ? "Custom Dataset Request" : (selectedDataset?.title || ""),
        email: formData.email.trim(),
        name: formData.name.trim() || null,
        message: formData.message.trim() || null,
        request_type: isCustom ? "custom" : "standard",
      });

      if (error) throw error;

      toast.success("Request submitted!", {
        description: "I'll review your request and get back to you via email.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setShowRequestForm(false);
      setShowCustomForm(false);
      setSelectedDataset(null);
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-white">Available Datasets</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Professional datasets ready for your analysis - request a copy below
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
                  onClick={() => handleViewDetails(dataset)}
                >
                  <Database className="mr-2 h-4 w-4" />
                  View Details & Request Copy
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
            <Button variant="outline" onClick={() => setShowCustomForm(true)}>
              Request Custom Dataset
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Dataset Request Dialog */}
      <Dialog open={showRequestForm} onOpenChange={setShowRequestForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              {selectedDataset?.title}
            </DialogTitle>
            <DialogDescription>
              Fill in your details below to request a copy of this dataset.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {selectedDataset && (
              <div className="bg-muted rounded-lg p-3 text-sm space-y-1">
                <p><span className="text-muted-foreground">Records:</span> {selectedDataset.stats.records}</p>
                <p><span className="text-muted-foreground">Period:</span> {selectedDataset.stats.timeRange}</p>
                <p><span className="text-muted-foreground">Formats:</span> {selectedDataset.stats.formats}</p>
                <div className="pt-2 border-t mt-2">
                  <p className="text-muted-foreground mb-1">Key Insights:</p>
                  <ul className="list-disc list-inside text-xs">
                    {selectedDataset.insights.map((insight, i) => (
                      <li key={i}>{insight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <Label htmlFor="name">Name (optional)</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Additional Notes (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any specific requirements or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={3}
                />
              </div>
            </div>
          </div>

          <Button 
            onClick={() => handleSubmitRequest(false)} 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>Submitting...</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Request Dataset Copy
              </>
            )}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Custom Request Dialog */}
      <Dialog open={showCustomForm} onOpenChange={setShowCustomForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Custom Dataset Request
            </DialogTitle>
            <DialogDescription>
              Describe your data requirements and I'll get back to you.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="custom-name">Name (optional)</Label>
              <Input
                id="custom-name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="custom-email">Email *</Label>
              <Input
                id="custom-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="custom-message">Describe your data needs *</Label>
              <Textarea
                id="custom-message"
                placeholder="What kind of data are you looking for? Industry, size, format, etc."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
              />
            </div>
          </div>

          <Button 
            onClick={() => handleSubmitRequest(true)} 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>Submitting...</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Request
              </>
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
