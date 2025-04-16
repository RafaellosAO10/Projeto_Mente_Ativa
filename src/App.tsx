import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TecnologiaDiaADia from "./pages/TecnologiaDiaADia";
import TecnologiaInterativa from "./pages/TecnologiaInterativa";
import TecnologiasSustentaveis from "./pages/TecnologiasSustentaveis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tecnologia-dia-a-dia" element={<TecnologiaDiaADia />} />
          <Route path="/tecnologia-interativa" element={<TecnologiaInterativa />} />
          <Route path="/tecnologias-sustentaveis" element={<TecnologiasSustentaveis />} />
          {/* ADICIONE TODAS AS ROTAS PERSONALIZADAS ACIMA DA ROTA "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
