import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Papa from "papaparse";
import * as XLSX from "xlsx";

interface FileConverterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FileConverter({ isOpen, onClose }: FileConverterProps) {
  const [file, setFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>("csv");
  const [isConverting, setIsConverting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const convertFile = async () => {
    if (!file) {
      toast({ title: "No file selected", variant: "destructive" });
      return;
    }

    setIsConverting(true);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target?.result;
        let parsedData: any[] = [];

        // Parse input file
        if (file.name.endsWith('.csv')) {
          const result = Papa.parse(data as string, { header: true });
          parsedData = result.data;
        } else if (file.name.endsWith('.json')) {
          parsedData = JSON.parse(data as string);
        } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
          const workbook = XLSX.read(data, { type: 'binary' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          parsedData = XLSX.utils.sheet_to_json(firstSheet);
        }

        // Convert to output format
        let output: string | Blob;
        let filename: string;

        switch (outputFormat) {
          case 'csv':
            output = Papa.unparse(parsedData);
            filename = file.name.replace(/\.[^/.]+$/, ".csv");
            break;
          case 'json':
            output = JSON.stringify(parsedData, null, 2);
            filename = file.name.replace(/\.[^/.]+$/, ".json");
            break;
          case 'xlsx':
            const ws = XLSX.utils.json_to_sheet(parsedData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            output = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            filename = file.name.replace(/\.[^/.]+$/, ".xlsx");
            break;
          default:
            throw new Error("Unsupported output format");
        }

        // Download converted file
        const blob = output instanceof Blob ? output : new Blob([output], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast({ title: "File converted successfully!" });
        setIsConverting(false);
      };

      if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsText(file);
      }
    } catch (error) {
      toast({ title: "Conversion failed", description: String(error), variant: "destructive" });
      setIsConverting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>File Converter</DialogTitle>
          <DialogDescription>
            Convert between CSV, JSON, and Excel formats
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Upload File</label>
            <input
              type="file"
              accept=".csv,.json,.xlsx,.xls"
              onChange={handleFileChange}
              className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
            {file && (
              <p className="mt-2 text-sm text-muted-foreground">
                Selected: {file.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Output Format</label>
            <Select value={outputFormat} onValueChange={setOutputFormat}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
                <SelectItem value="xlsx">Excel (XLSX)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={convertFile}
            disabled={!file || isConverting}
            className="w-full"
          >
            {isConverting ? "Converting..." : "Convert File"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
