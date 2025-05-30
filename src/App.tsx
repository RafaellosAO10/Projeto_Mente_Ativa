import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TecnologiaCotidiana from "./pages/TecnologiaCotidiana";
import TecnologiaInterativa from "./pages/TecnologiaInterativa";
import TecnologiaSustentavel from "./pages/TecnologiaSustentavel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tecnologia-cotidiana" element={<TecnologiaCotidiana />} />
          <Route path="/tecnologia-interativa" element={<TecnologiaInterativa />} />
          <Route path="/tecnologias-sustentaveis" element={<TecnologiaSustentavel />} />
          {/* ADICIONE TODAS AS ROTAS PERSONALIZADAS ACIMA DA ROTA "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
