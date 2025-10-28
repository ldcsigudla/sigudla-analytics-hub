import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as ss from "simple-statistics";
import * as math from "mathjs";

interface StatisticsCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StatisticsCalculator({ isOpen, onClose }: StatisticsCalculatorProps) {
  const [dataInput, setDataInput] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const calculateDescriptive = () => {
    try {
      const numbers = dataInput.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
      
      if (numbers.length === 0) {
        throw new Error("Please enter valid numbers");
      }

      setResults({
        count: numbers.length,
        mean: ss.mean(numbers),
        median: ss.median(numbers),
        mode: ss.mode(numbers),
        std: ss.standardDeviation(numbers),
        variance: ss.variance(numbers),
        min: ss.min(numbers),
        max: ss.max(numbers),
        sum: ss.sum(numbers),
        range: ss.max(numbers) - ss.min(numbers),
      });
    } catch (error) {
      alert(String(error));
    }
  };

  const [prob1, setProb1] = useState<string>("");
  const [prob2, setProb2] = useState<string>("");
  const [probResults, setProbResults] = useState<any>(null);

  const calculateProbability = () => {
    try {
      const p1 = parseFloat(prob1);
      const p2 = parseFloat(prob2);

      if (isNaN(p1) || isNaN(p2)) {
        throw new Error("Please enter valid probabilities");
      }

      setProbResults({
        union: p1 + p2 - (p1 * p2),
        intersection: p1 * p2,
        conditional: p1 / p2,
        complement1: 1 - p1,
        complement2: 1 - p2,
      });
    } catch (error) {
      alert(String(error));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Statistics Calculator</DialogTitle>
          <DialogDescription>
            Perform statistical calculations and probability analysis
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="descriptive" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="descriptive">Descriptive Stats</TabsTrigger>
            <TabsTrigger value="probability">Probability</TabsTrigger>
          </TabsList>

          <TabsContent value="descriptive" className="space-y-4">
            <div>
              <Label htmlFor="data">Enter Data (comma-separated)</Label>
              <Input
                id="data"
                placeholder="1, 2, 3, 4, 5..."
                value={dataInput}
                onChange={(e) => setDataInput(e.target.value)}
                className="mt-2"
              />
            </div>

            <Button onClick={calculateDescriptive} className="w-full">
              Calculate Statistics
            </Button>

            {results && (
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Count</p>
                    <p className="text-lg font-semibold">{results.count}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mean</p>
                    <p className="text-lg font-semibold">{results.mean.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Median</p>
                    <p className="text-lg font-semibold">{results.median.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Std Dev</p>
                    <p className="text-lg font-semibold">{results.std.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Min</p>
                    <p className="text-lg font-semibold">{results.min.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Max</p>
                    <p className="text-lg font-semibold">{results.max.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Variance</p>
                    <p className="text-lg font-semibold">{results.variance.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Range</p>
                    <p className="text-lg font-semibold">{results.range.toFixed(4)}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="probability" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="prob1">Probability P(A)</Label>
                <Input
                  id="prob1"
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  placeholder="0.5"
                  value={prob1}
                  onChange={(e) => setProb1(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="prob2">Probability P(B)</Label>
                <Input
                  id="prob2"
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  placeholder="0.3"
                  value={prob2}
                  onChange={(e) => setProb2(e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>

            <Button onClick={calculateProbability} className="w-full">
              Calculate Probabilities
            </Button>

            {probResults && (
              <Card>
                <CardHeader>
                  <CardTitle>Probability Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">P(A ∪ B) Union:</span>
                    <span className="font-semibold">{probResults.union.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">P(A ∩ B) Intersection:</span>
                    <span className="font-semibold">{probResults.intersection.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">P(A|B) Conditional:</span>
                    <span className="font-semibold">{probResults.conditional.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">P(A') Complement of A:</span>
                    <span className="font-semibold">{probResults.complement1.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">P(B') Complement of B:</span>
                    <span className="font-semibold">{probResults.complement2.toFixed(4)}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
