import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Papa from "papaparse";
import { LineChart, Line, BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface DataVisualizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DataVisualizer({ isOpen, onClose }: DataVisualizerProps) {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [chartType, setChartType] = useState<"line" | "bar" | "scatter">("bar");
  const [xAxis, setXAxis] = useState<string>("");
  const [yAxis, setYAxis] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      Papa.parse(selectedFile, {
        header: true,
        complete: (results) => {
          const parsedData = results.data as any[];
          setData(parsedData.slice(0, 100)); // Limit to first 100 rows for performance
          const cols = Object.keys(parsedData[0] || {});
          setColumns(cols);
          if (cols.length >= 2) {
            setXAxis(cols[0]);
            setYAxis(cols[1]);
          }
          toast({ title: "File loaded successfully!" });
        },
        error: (error) => {
          toast({ title: "Failed to parse file", description: error.message, variant: "destructive" });
        }
      });
    }
  };

  const renderChart = () => {
    if (!data.length || !xAxis || !yAxis) return null;

    const chartData = data.map(row => ({
      x: row[xAxis],
      y: Number(row[yAxis]) || 0
    }));

    switch (chartType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="y" stroke="hsl(var(--primary))" name={yAxis} />
            </LineChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="y" fill="hsl(var(--primary))" name={yAxis} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "scatter":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" name={xAxis} />
              <YAxis dataKey="y" name={yAxis} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Data Points" data={chartData} fill="hsl(var(--primary))" />
            </ScatterChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Data Visualizer</DialogTitle>
          <DialogDescription>
            Upload a CSV file and create interactive charts
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Upload CSV File</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>

          {columns.length > 0 && (
            <>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Chart Type</label>
                  <Select value={chartType} onValueChange={(v) => setChartType(v as any)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="line">Line Chart</SelectItem>
                      <SelectItem value="scatter">Scatter Plot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">X-Axis</label>
                  <Select value={xAxis} onValueChange={setXAxis}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {columns.map(col => (
                        <SelectItem key={col} value={col}>{col}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Y-Axis</label>
                  <Select value={yAxis} onValueChange={setYAxis}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {columns.map(col => (
                        <SelectItem key={col} value={col}>{col}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-background">
                {renderChart()}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
