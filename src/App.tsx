import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DataTools from "./pages/DataTools";
import BatteryRUL from "./pages/projects/BatteryRUL";
import NetworkCoverage from "./pages/projects/NetworkCoverage";
import FlightRouting from "./pages/projects/FlightRouting";
import TelecomQoS from "./pages/projects/TelecomQoS";
import MicrogridDispatch from "./pages/projects/MicrogridDispatch";
import PatentAnalysis from "./pages/projects/PatentAnalysis";
import MarketplaceFraud from "./pages/projects/MarketplaceFraud";
import RFCoverage from "./pages/projects/RFCoverage";
import InfrastructureResilience from "./pages/projects/InfrastructureResilience";
import EcommerceRFMAnalysis from "./pages/projects/EcommerceRFMAnalysis";
import TelecomChurnAnalysis from "./pages/projects/TelecomChurnAnalysis";
import GlobalSalesAnalysis from "./pages/projects/GlobalSalesAnalysis";
import WeatherSalesCorrelation from "./pages/projects/WeatherSalesCorrelation";
import HRAnalyticsAttrition from "./pages/projects/HRAnalyticsAttrition";
import AirlinePerformanceAnalysis from "./pages/projects/AirlinePerformanceAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/data-tools" element={<DataTools />} />
          <Route path="/projects/battery-rul" element={<BatteryRUL />} />
          <Route path="/projects/network-coverage" element={<NetworkCoverage />} />
          <Route path="/projects/flight-routing" element={<FlightRouting />} />
          <Route path="/projects/telecom-qos" element={<TelecomQoS />} />
          <Route path="/projects/microgrid-dispatch" element={<MicrogridDispatch />} />
          <Route path="/projects/patent-analysis" element={<PatentAnalysis />} />
          <Route path="/projects/marketplace-fraud" element={<MarketplaceFraud />} />
          <Route path="/projects/rf-coverage" element={<RFCoverage />} />
          <Route path="/projects/infrastructure-resilience" element={<InfrastructureResilience />} />
          <Route path="/projects/ecommerce-rfm" element={<EcommerceRFMAnalysis />} />
          <Route path="/projects/telecom-churn" element={<TelecomChurnAnalysis />} />
          <Route path="/projects/global-sales" element={<GlobalSalesAnalysis />} />
          <Route path="/projects/weather-sales" element={<WeatherSalesCorrelation />} />
          <Route path="/projects/hr-analytics" element={<HRAnalyticsAttrition />} />
          <Route path="/projects/airline-performance" element={<AirlinePerformanceAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
