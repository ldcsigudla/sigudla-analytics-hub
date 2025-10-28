import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Papa from "papaparse";
import * as ss from "simple-statistics";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FileAnalyzerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ColumnStats {
  name: string;
  count: number;
  missing: number;
  mean?: number;
  median?: number;
  std?: number;
  min?: number;
  max?: number;
}

export function DataAnalyzer({ isOpen, onClose }: FileAnalyzerProps) {
  const [file, setFile] = useState<File | null>(null);
  const [stats, setStats] = useState<ColumnStats[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStats([]);
    }
  };

  const analyzeData = () => {
    if (!file) {
      toast({ title: "No file selected", variant: "destructive" });
      return;
    }

    setIsAnalyzing(true);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        try {
          const data = results.data as Record<string, any>[];
          const columns = Object.keys(data[0] || {});
          
          const columnStats: ColumnStats[] = columns.map(col => {
            const values = data.map(row => row[col]).filter(v => v !== null && v !== undefined && v !== '');
            const numericValues = values.map(Number).filter(v => !isNaN(v));
            
            const stats: ColumnStats = {
              name: col,
              count: values.length,
              missing: data.length - values.length,
            };

            if (numericValues.length > 0) {
              stats.mean = ss.mean(numericValues);
              stats.median = ss.median(numericValues);
              stats.std = ss.standardDeviation(numericValues);
              stats.min = ss.min(numericValues);
              stats.max = ss.max(numericValues);
            }

            return stats;
          });

          setStats(columnStats);
          toast({ title: "Analysis complete!" });
        } catch (error) {
          toast({ title: "Analysis failed", description: String(error), variant: "destructive" });
        } finally {
          setIsAnalyzing(false);
        }
      },
      error: (error) => {
        toast({ title: "Failed to parse file", description: error.message, variant: "destructive" });
        setIsAnalyzing(false);
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Data Analyzer</DialogTitle>
          <DialogDescription>
            Upload a CSV file to get descriptive statistics and data quality insights
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
            {file && (
              <p className="mt-2 text-sm text-muted-foreground">
                Selected: {file.name}
              </p>
            )}
          </div>

          <Button
            onClick={analyzeData}
            disabled={!file || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Data"}
          </Button>

          {stats.length > 0 && (
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Column</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Missing</TableHead>
                    <TableHead>Mean</TableHead>
                    <TableHead>Median</TableHead>
                    <TableHead>Std Dev</TableHead>
                    <TableHead>Min</TableHead>
                    <TableHead>Max</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.map((stat, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{stat.name}</TableCell>
                      <TableCell>{stat.count}</TableCell>
                      <TableCell>{stat.missing}</TableCell>
                      <TableCell>{stat.mean?.toFixed(2) || '-'}</TableCell>
                      <TableCell>{stat.median?.toFixed(2) || '-'}</TableCell>
                      <TableCell>{stat.std?.toFixed(2) || '-'}</TableCell>
                      <TableCell>{stat.min?.toFixed(2) || '-'}</TableCell>
                      <TableCell>{stat.max?.toFixed(2) || '-'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
