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
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      id: "analyzer" as ToolType,
      title: "Data Analyzer",
      description: "Get descriptive stats, correlations, and missing data insights",
      icon: BarChart3,
      component: DataAnalyzer,
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
    },
    {
      id: "visualizer" as ToolType,
      title: "Data Visualizer",
      description: "Create interactive charts from your datasets",
      icon: LineChart,
      component: DataVisualizer,
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600",
    },
    {
      id: "calculator" as ToolType,
      title: "Statistics Calculator",
      description: "Perform statistical calculations and hypothesis tests",
      icon: Calculator,
      component: StatisticsCalculator,
      gradient: "from-orange-500 to-red-500",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
    },
    {
      id: "ml" as ToolType,
      title: "ML Assistant",
      description: "AI-powered model suggestions and feature analysis",
      icon: Brain,
      component: MLAssistant,
      gradient: "from-indigo-500 to-blue-500",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
    },
    {
      id: "trend" as ToolType,
      title: "Trend Analysis",
      description: "Identify patterns and forecast time series data",
      icon: TrendingUp,
      component: TrendAnalysis,
      gradient: "from-teal-500 to-cyan-500",
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-600",
    },
  ];

  const ActiveToolComponent = tools.find(t => t.id === activeTool)?.component;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a0a0a] pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <span className="text-sm font-semibold text-white">Useful Data Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Tools for Data Scientists & Analysts
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional-grade data tools for analysis, visualization, and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.id}
                  className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-transparent relative overflow-hidden group"
                  onClick={() => setActiveTool(tool.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-xl ${tool.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 ${tool.iconColor}`} />
                      </div>
                      <CardTitle className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {tool.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${tool.gradient} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2`}>
                      Open Tool →
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-2 border-dashed border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardContent className="py-12 text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4">
                <FileSpreadsheet className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Upload Your Data
              </h3>
              <p className="text-muted-foreground mb-4">
                Select a tool above to start analyzing your data
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["CSV", "JSON", "Excel", "SQL", "Parquet"].map((format) => (
                  <span key={format} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm font-medium border-2 border-blue-200 dark:border-blue-800">
                    {format}
                  </span>
                ))}
              </div>
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
