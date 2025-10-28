import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DataTools from "./pages/DataTools";
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
