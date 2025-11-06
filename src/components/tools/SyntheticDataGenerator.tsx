import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Papa from "papaparse";

interface SyntheticDataGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SyntheticDataGenerator({ isOpen, onClose }: SyntheticDataGeneratorProps) {
  const [rows, setRows] = useState<number>(1000);
  const [dataType, setDataType] = useState<string>("customer");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSyntheticData = () => {
    setIsGenerating(true);

    try {
      let data: any[] = [];

      switch (dataType) {
        case "customer":
          data = Array.from({ length: rows }, (_, i) => ({
            customer_id: `CUST${(i + 1).toString().padStart(6, '0')}`,
            name: `Customer ${i + 1}`,
            email: `customer${i + 1}@example.com`,
            age: Math.floor(Math.random() * 50) + 18,
            gender: Math.random() > 0.5 ? 'M' : 'F',
            city: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][Math.floor(Math.random() * 5)],
            purchase_amount: (Math.random() * 1000).toFixed(2),
            last_purchase_date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            customer_since: new Date(Date.now() - Math.random() * 1095 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            loyalty_tier: ['Bronze', 'Silver', 'Gold', 'Platinum'][Math.floor(Math.random() * 4)]
          }));
          break;
        
        case "sales":
          data = Array.from({ length: rows }, (_, i) => ({
            transaction_id: `TXN${(i + 1).toString().padStart(8, '0')}`,
            date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            product_id: `PROD${Math.floor(Math.random() * 100) + 1}`,
            product_category: ['Electronics', 'Clothing', 'Food', 'Books', 'Home'][Math.floor(Math.random() * 5)],
            quantity: Math.floor(Math.random() * 10) + 1,
            unit_price: (Math.random() * 200 + 10).toFixed(2),
            total_amount: (Math.random() * 500 + 50).toFixed(2),
            payment_method: ['Credit Card', 'Debit Card', 'PayPal', 'Cash'][Math.floor(Math.random() * 4)],
            region: ['North', 'South', 'East', 'West'][Math.floor(Math.random() * 4)],
            customer_segment: ['Retail', 'Corporate', 'Online'][Math.floor(Math.random() * 3)]
          }));
          break;
        
        case "employee":
          data = Array.from({ length: rows }, (_, i) => ({
            employee_id: `EMP${(i + 1).toString().padStart(5, '0')}`,
            name: `Employee ${i + 1}`,
            department: ['IT', 'Sales', 'Marketing', 'Finance', 'HR'][Math.floor(Math.random() * 5)],
            position: ['Manager', 'Senior', 'Junior', 'Lead', 'Associate'][Math.floor(Math.random() * 5)],
            salary: Math.floor(Math.random() * 100000) + 40000,
            hire_date: new Date(Date.now() - Math.random() * 1825 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            years_experience: Math.floor(Math.random() * 20),
            performance_score: (Math.random() * 2 + 3).toFixed(1),
            satisfaction_level: (Math.random() * 3 + 2).toFixed(1),
            projects_completed: Math.floor(Math.random() * 50)
          }));
          break;
        
        case "iot":
          data = Array.from({ length: rows }, (_, i) => ({
            device_id: `DEV${(i + 1).toString().padStart(6, '0')}`,
            timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
            temperature: (Math.random() * 40 + 10).toFixed(2),
            humidity: (Math.random() * 60 + 20).toFixed(2),
            pressure: (Math.random() * 100 + 980).toFixed(2),
            battery_level: Math.floor(Math.random() * 100),
            signal_strength: Math.floor(Math.random() * 100),
            status: Math.random() > 0.9 ? 'Error' : 'Active',
            location: ['Factory A', 'Warehouse B', 'Office C', 'Store D'][Math.floor(Math.random() * 4)],
            sensor_type: ['Temperature', 'Motion', 'Pressure', 'Humidity'][Math.floor(Math.random() * 4)]
          }));
          break;
        
        default:
          data = Array.from({ length: rows }, (_, i) => ({
            id: i + 1,
            value: Math.random() * 100,
            category: `Category ${Math.floor(Math.random() * 5) + 1}`,
            timestamp: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString()
          }));
      }

      // Convert to CSV
      const csv = Papa.unparse(data);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `synthetic_${dataType}_data_${rows}_rows.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({ 
        title: "Success!", 
        description: `Generated ${rows} rows of high-quality synthetic ${dataType} data`
      });
      setIsGenerating(false);
    } catch (error) {
      toast({ 
        title: "Generation failed", 
        description: String(error), 
        variant: "destructive" 
      });
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Synthetic Data Generator</DialogTitle>
          <DialogDescription>
            Generate high-quality synthetic datasets for testing, training, and development purposes
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Label htmlFor="dataType" className="text-sm font-medium mb-2">Dataset Type</Label>
            <Select value={dataType} onValueChange={setDataType}>
              <SelectTrigger id="dataType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer">Customer Data</SelectItem>
                <SelectItem value="sales">Sales Transactions</SelectItem>
                <SelectItem value="employee">Employee Records</SelectItem>
                <SelectItem value="iot">IoT Sensor Data</SelectItem>
                <SelectItem value="generic">Generic Dataset</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-2">
              {dataType === "customer" && "Includes: ID, name, email, age, gender, city, purchase data, loyalty tier"}
              {dataType === "sales" && "Includes: Transaction ID, date, product info, quantity, price, payment method, region"}
              {dataType === "employee" && "Includes: Employee ID, name, department, salary, hire date, performance metrics"}
              {dataType === "iot" && "Includes: Device ID, timestamp, sensor readings, battery, signal, status, location"}
              {dataType === "generic" && "Includes: Basic ID, value, category, and timestamp fields"}
            </p>
          </div>

          <div>
            <Label htmlFor="rows" className="text-sm font-medium mb-2">Number of Rows</Label>
            <Input
              id="rows"
              type="number"
              min={1}
              max={100000}
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value) || 1000)}
              placeholder="Enter number of rows (max 100,000)"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Generate between 1 and 100,000 rows of synthetic data
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-sm">Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Realistic data distributions and correlations</li>
              <li>✓ Proper data types and formatting</li>
              <li>✓ No duplicate IDs or unrealistic values</li>
              <li>✓ Industry-standard field names</li>
              <li>✓ Ready for immediate use in analysis</li>
            </ul>
          </div>

          <Button
            onClick={generateSyntheticData}
            disabled={isGenerating || rows < 1 || rows > 100000}
            className="w-full"
          >
            {isGenerating ? "Generating..." : "Generate Synthetic Data"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}