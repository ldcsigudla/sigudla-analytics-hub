import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileConverter } from "@/components/tools/FileConverter";
import { DataAnalyzer } from "@/components/tools/DataAnalyzer";
import { DataVisualizer } from "@/components/tools/DataVisualizer";
import { StatisticsCalculator } from "@/components/tools/StatisticsCalculator";
import { MLAssistant } from "@/components/tools/MLAssistant";
import { TrendAnalysis } from "@/components/tools/TrendAnalysis";
import { FileSpreadsheet, BarChart3, TrendingUp, Calculator, Brain, LineChart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type ToolType = "converter" | "analyzer" | "visualizer" | "calculator" | "ml" | "trend" | null;

export default function DataTools() {
  const [activeTool, setActiveTool] = useState<ToolType>(null);

  const tools = [
    {
      id: "converter" as ToolType,
      title: "File Converter",
      description: "Convert between CSV, JSON, Excel, SQL, and Parquet formats",
      icon: FileSpreadsheet,
      component: FileConverter,
    },
    {
      id: "analyzer" as ToolType,
      title: "Data Analyzer",
      description: "Get descriptive stats, correlations, and missing data insights",
      icon: BarChart3,
      component: DataAnalyzer,
    },
    {
      id: "visualizer" as ToolType,
      title: "Data Visualizer",
      description: "Create interactive charts from your datasets",
      icon: LineChart,
      component: DataVisualizer,
    },
    {
      id: "calculator" as ToolType,
      title: "Statistics Calculator",
      description: "Perform statistical calculations and hypothesis tests",
      icon: Calculator,
      component: StatisticsCalculator,
    },
    {
      id: "ml" as ToolType,
      title: "ML Assistant",
      description: "AI-powered model suggestions and feature analysis",
      icon: Brain,
      component: MLAssistant,
    },
    {
      id: "trend" as ToolType,
      title: "Trend Analysis",
      description: "Identify patterns and forecast time series data",
      icon: TrendingUp,
      component: TrendAnalysis,
    },
  ];

  const ActiveToolComponent = tools.find(t => t.id === activeTool)?.component;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tools for Data Scientists & Analysts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade data tools for analysis, visualization, and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => setActiveTool(tool.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{tool.title}</CardTitle>
                    </div>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="text-sm text-primary hover:underline font-medium">
                      Open Tool →
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-muted/50 border-dashed">
            <CardContent className="py-12 text-center">
              <FileSpreadsheet className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Upload Your Data</h3>
              <p className="text-muted-foreground mb-4">
                Select a tool above to start analyzing your data
              </p>
              <p className="text-sm text-muted-foreground">
                Supported formats: CSV, JSON, Excel, SQL, Parquet
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />

      {ActiveToolComponent && (
        <ActiveToolComponent
          isOpen={activeTool !== null}
          onClose={() => setActiveTool(null)}
        />
      )}
    </>
  );
}
