import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Copy, Download, PlayCircle } from "lucide-react";

interface CodeEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CodeEditor({ isOpen, onClose }: CodeEditorProps) {
  const [language, setLanguage] = useState<string>("python");
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const templates: { [key: string]: string } = {
    python: `# Python data analysis example
import pandas as pd
import numpy as np

# Load and analyze data
df = pd.read_csv('data.csv')
print(df.describe())
print(df.head())

# Calculate correlations
correlation_matrix = df.corr()
print(correlation_matrix)`,
    
    r: `# R statistical analysis example
library(dplyr)
library(ggplot2)

# Load and analyze data
data <- read.csv("data.csv")
summary(data)

# Perform statistical tests
t.test(data$variable1, data$variable2)

# Create visualization
ggplot(data, aes(x=variable1, y=variable2)) +
  geom_point() +
  theme_minimal()`,
    
    sql: `-- SQL data extraction example
SELECT 
    customer_id,
    COUNT(*) as transaction_count,
    SUM(amount) as total_spent,
    AVG(amount) as avg_transaction
FROM transactions
WHERE transaction_date >= '2024-01-01'
GROUP BY customer_id
HAVING COUNT(*) > 5
ORDER BY total_spent DESC
LIMIT 100;`,
    
    tableau: `// Tableau calculated field examples

// Customer Lifetime Value
{ FIXED [Customer ID] : 
  SUM([Sales Amount]) 
}

// Year-over-Year Growth
(SUM([Sales]) - LOOKUP(SUM([Sales]), -1)) 
/ LOOKUP(SUM([Sales]), -1)

// Running Total
RUNNING_SUM(SUM([Profit]))

// Cohort Analysis
IF DATEDIFF('month', 
  {FIXED [Customer ID] : MIN([Order Date])}, 
  [Order Date]) <= 12 
THEN [Customer ID] 
END`,
    
    powerbi: `// Power BI DAX examples

// Total Sales
Total Sales = SUM(Sales[Amount])

// Sales YTD
Sales YTD = 
TOTALYTD(
    SUM(Sales[Amount]),
    'Date'[Date]
)

// Customer Retention Rate
Retention Rate = 
DIVIDE(
    COUNTROWS(
        FILTER(
            Customers,
            Customers[LastPurchase] >= TODAY() - 90
        )
    ),
    COUNTROWS(Customers)
)`,
    
    excel: `' Excel VBA macro example
Sub AnalyzeData()
    Dim ws As Worksheet
    Dim lastRow As Long
    
    Set ws = ThisWorkbook.Sheets("Data")
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    ' Calculate totals
    ws.Range("E1").Value = "Total"
    ws.Range("E2").Formula = "=SUM(D2:D" & lastRow & ")"
    
    ' Create pivot table
    ws.PivotTables.Add _
        SourceData:=ws.Range("A1:D" & lastRow), _
        DestinationRange:=ws.Range("G1")
        
    MsgBox "Analysis complete!"
End Sub`,
    
    spark: `# Apache Spark data processing example
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg, sum, count

spark = SparkSession.builder.appName("DataAnalysis").getOrCreate()

# Read large dataset
df = spark.read.csv("big_data.csv", header=True, inferSchema=True)

# Perform aggregations
result = df.groupBy("category") \\
    .agg(
        count("*").alias("total_count"),
        sum("sales").alias("total_sales"),
        avg("price").alias("avg_price")
    ) \\
    .orderBy(col("total_sales").desc())

result.show()`,
    
    sas: `/* SAS statistical analysis example */
PROC IMPORT 
    DATAFILE="data.csv"
    OUT=work.dataset
    DBMS=CSV
    REPLACE;
RUN;

/* Descriptive statistics */
PROC MEANS DATA=work.dataset N MEAN STD MIN MAX;
    VAR sales revenue profit;
RUN;

/* Regression analysis */
PROC REG DATA=work.dataset;
    MODEL profit = sales marketing_spend;
RUN;

/* Export results */
PROC EXPORT 
    DATA=work.results
    OUTFILE="results.csv"
    DBMS=CSV
    REPLACE;
RUN;`
  };

  const loadTemplate = () => {
    setCode(templates[language] || "");
    toast({ title: "Template loaded", description: `${language.toUpperCase()} template ready to edit` });
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    toast({ title: "Copied!", description: "Code copied to clipboard" });
  };

  const downloadCode = () => {
    const extensions: { [key: string]: string } = {
      python: "py",
      r: "r",
      sql: "sql",
      tableau: "txt",
      powerbi: "dax",
      excel: "vba",
      spark: "py",
      sas: "sas"
    };
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extensions[language] || 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({ title: "Downloaded", description: "Code file downloaded successfully" });
  };

  const simulateRun = () => {
    setOutput("Code execution simulated successfully!\n\nNote: This is a code editor for writing and saving your analysis code.\nTo execute code, use appropriate environments:\n- Python/R: Jupyter, RStudio, or local IDEs\n- SQL: Database management systems\n- Tableau/Power BI: Their respective platforms\n- SAS/Spark: Enterprise analytics platforms");
    toast({ title: "Simulation complete", description: "See output below" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Data Code Editor</DialogTitle>
          <DialogDescription>
            Write and edit code for data analysis, database queries, and business intelligence
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="language" className="text-sm font-medium mb-2">Programming Language / Tool</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="python">Python (Pandas, NumPy)</SelectItem>
                  <SelectItem value="r">R (dplyr, ggplot2)</SelectItem>
                  <SelectItem value="sql">SQL (Database Queries)</SelectItem>
                  <SelectItem value="tableau">Tableau (Calculated Fields)</SelectItem>
                  <SelectItem value="powerbi">Power BI (DAX)</SelectItem>
                  <SelectItem value="excel">Microsoft Excel (VBA)</SelectItem>
                  <SelectItem value="spark">Apache Spark (PySpark)</SelectItem>
                  <SelectItem value="sas">SAS (Statistical Analysis)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end gap-2">
              <Button onClick={loadTemplate} variant="outline" size="sm">
                Load Template
              </Button>
            </div>
          </div>

          <div className="bg-muted/30 p-3 rounded-lg text-sm">
            <p className="font-semibold mb-1">Supported Languages & Tools:</p>
            <p className="text-muted-foreground text-xs">
              <strong>Python:</strong> Advanced analysis with Pandas, NumPy, Matplotlib | 
              <strong> R:</strong> Statistical computing and graphics | 
              <strong> SQL:</strong> Data extraction and manipulation | 
              <strong> Tableau/Power BI:</strong> Business intelligence and visualization | 
              <strong> Excel:</strong> Basic analysis and automation | 
              <strong> Apache Spark:</strong> Big data processing | 
              <strong> SAS:</strong> Enterprise statistical software
            </p>
          </div>

          <div>
            <Label htmlFor="codeEditor" className="text-sm font-medium mb-2">Code Editor</Label>
            <Textarea
              id="codeEditor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your code here..."
              className="font-mono text-sm min-h-[300px] resize-y"
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={simulateRun} className="flex-1" variant="default">
              <PlayCircle className="w-4 h-4 mr-2" />
              Simulate Run
            </Button>
            <Button onClick={copyCode} variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button onClick={downloadCode} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {output && (
            <div>
              <Label className="text-sm font-medium mb-2">Output</Label>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-xs whitespace-pre-wrap max-h-[200px] overflow-y-auto">
                {output}
              </div>
            </div>
          )}

          <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              <strong>Note:</strong> This editor helps you write and save code. For execution, use appropriate environments like Jupyter Notebooks for Python, RStudio for R, database management systems for SQL, or respective platforms for Tableau and Power BI.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}