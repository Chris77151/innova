
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import DelaisFiscaux from "./pages/DelaisFiscaux";
import EspaceClient from "./pages/EspaceClient";
import Dashboard from "./pages/Dashboard";
import Carrieres from "./pages/Carrieres";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/delais-fiscaux" element={<DelaisFiscaux />} />
          <Route path="/espace-client" element={<EspaceClient />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/carrieres" element={<Carrieres />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
