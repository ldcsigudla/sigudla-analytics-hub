import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Papa from "papaparse";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import * as ss from "simple-statistics";

interface TrendAnalysisProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrendAnalysis({ isOpen, onClose }: TrendAnalysisProps) {
  const [file, setFile] = useState<File | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [timeColumn, setTimeColumn] = useState<string>("");
  const [valueColumn, setValueColumn] = useState<string>("");
  const [chartData, setChartData] = useState<any[]>([]);
  const [trendLine, setTrendLine] = useState<any[]>([]);
  const [forecast, setForecast] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      Papa.parse(selectedFile, {
        header: true,
        complete: (results) => {
          const cols = Object.keys((results.data as any[])[0] || {});
          setColumns(cols);
          if (cols.length >= 2) {
            setTimeColumn(cols[0]);
            setValueColumn(cols[1]);
          }
          toast({ title: "File loaded successfully!" });
        }
      });
    }
  };

  const analyzeTrend = () => {
    if (!file || !timeColumn || !valueColumn) {
      toast({ title: "Please select file and columns", variant: "destructive" });
      return;
    }

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data as any[];
        const processedData = data
          .filter(row => row[timeColumn] && row[valueColumn])
          .map((row, idx) => ({
            time: row[timeColumn],
            value: Number(row[valueColumn]) || 0,
            index: idx
          }));

        setChartData(processedData);

        // Calculate linear trend
        const xValues = processedData.map((_, idx) => idx);
        const yValues = processedData.map(d => d.value);
        
        const regression = ss.linearRegression([xValues, yValues]);
        const trendData = processedData.map((d, idx) => ({
          time: d.time,
          trend: regression.m * idx + regression.b
        }));
        setTrendLine(trendData);

        // Simple forecast (extend trend line)
        const forecastSteps = 5;
        const forecastData = [];
        for (let i = 1; i <= forecastSteps; i++) {
          const idx = processedData.length + i - 1;
          forecastData.push({
            time: `Forecast +${i}`,
            forecast: regression.m * idx + regression.b
          });
        }
        setForecast(forecastData);

        toast({ title: "Trend analysis complete!" });
      }
    });
  };

  const combinedData = [...chartData, ...forecast].map((item, idx) => {
    const trendItem = trendLine[idx] || {};
    return { ...item, ...trendItem };
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Trend Analysis</DialogTitle>
          <DialogDescription>
            Identify patterns and forecast time series data
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Upload Time Series Data (CSV)</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>

          {columns.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Time Column</label>
                <Select value={timeColumn} onValueChange={setTimeColumn}>
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
                <label className="block text-sm font-medium mb-2">Value Column</label>
                <Select value={valueColumn} onValueChange={setValueColumn}>
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
          )}

          <Button
            onClick={analyzeTrend}
            disabled={!file || !timeColumn || !valueColumn}
            className="w-full"
          >
            Analyze Trend & Forecast
          </Button>

          {chartData.length > 0 && (
            <div className="border rounded-lg p-4 bg-background">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={combinedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" name="Actual" />
                  <Line type="monotone" dataKey="trend" stroke="hsl(var(--chart-2))" strokeDasharray="5 5" name="Trend" />
                  <Line type="monotone" dataKey="forecast" stroke="hsl(var(--chart-3))" strokeDasharray="3 3" name="Forecast" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
