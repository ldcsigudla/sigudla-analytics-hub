import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Papa from "papaparse";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as ss from "simple-statistics";

interface MLAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MLAssistant({ isOpen, onClose }: MLAssistantProps) {
  const [file, setFile] = useState<File | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [targetColumn, setTargetColumn] = useState<string>("");
  const [recommendations, setRecommendations] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      Papa.parse(selectedFile, {
        header: true,
        complete: (results) => {
          const cols = Object.keys((results.data as any[])[0] || {});
          setColumns(cols);
          toast({ title: "File loaded successfully!" });
        }
      });
    }
  };

  const analyzeForML = () => {
    if (!file || !targetColumn) {
      toast({ title: "Please select file and target column", variant: "destructive" });
      return;
    }

    setIsAnalyzing(true);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data as any[];
        const targetValues = data.map(row => row[targetColumn]).filter(v => v);
        const uniqueTargets = new Set(targetValues);
        const isClassification = uniqueTargets.size < 20;

        // Feature importance (simplified correlation)
        const features = columns.filter(col => col !== targetColumn);
        const featureScores = features.map(feature => {
          const featureValues = data.map(row => Number(row[feature])).filter(v => !isNaN(v));
          const targetNumeric = data.map(row => Number(row[targetColumn])).filter(v => !isNaN(v));
          
          if (featureValues.length > 0 && targetNumeric.length > 0) {
            const correlation = Math.abs(ss.sampleCorrelation(featureValues.slice(0, targetNumeric.length), targetNumeric.slice(0, featureValues.length)));
            return { feature, score: isNaN(correlation) ? 0 : correlation };
          }
          return { feature, score: 0 };
        }).sort((a, b) => b.score - a.score);

        setRecommendations({
          problemType: isClassification ? "Classification" : "Regression",
          targetColumn,
          sampleSize: data.length,
          uniqueClasses: uniqueTargets.size,
          suggestedModels: isClassification 
            ? ["Random Forest Classifier", "Logistic Regression", "XGBoost Classifier", "Neural Network"]
            : ["Linear Regression", "Random Forest Regressor", "XGBoost Regressor", "Ridge Regression"],
          topFeatures: featureScores.slice(0, 5),
        });

        setIsAnalyzing(false);
        toast({ title: "Analysis complete!" });
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>ML Assistant</DialogTitle>
          <DialogDescription>
            Get AI-powered recommendations for your machine learning project
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Upload Dataset (CSV)</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>

          {columns.length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-2">Select Target Column</label>
              <Select value={targetColumn} onValueChange={setTargetColumn}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose target variable..." />
                </SelectTrigger>
                <SelectContent>
                  {columns.map(col => (
                    <SelectItem key={col} value={col}>{col}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <Button
            onClick={analyzeForML}
            disabled={!file || !targetColumn || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? "Analyzing..." : "Get ML Recommendations"}
          </Button>

          {recommendations && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Problem Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Problem Type:</span>
                    <span className="font-semibold">{recommendations.problemType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sample Size:</span>
                    <span className="font-semibold">{recommendations.sampleSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Classes:</span>
                    <span className="font-semibold">{recommendations.uniqueClasses}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Models</CardTitle>
                  <CardDescription>Based on your data characteristics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recommendations.suggestedModels.map((model: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>{model}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Features</CardTitle>
                  <CardDescription>Most correlated with target variable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {recommendations.topFeatures.map((feature: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="font-medium">{feature.feature}</span>
                        <span className="text-sm text-muted-foreground">
                          {(feature.score * 100).toFixed(1)}% correlation
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
