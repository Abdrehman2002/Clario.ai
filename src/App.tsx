import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VoiceAgents from "./pages/VoiceAgents";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import WhatsAppIntegration from "./pages/WhatsAppIntegration";
import AIChatbots from "./pages/AIChatbots";
import AILeadGeneration from "./pages/AILeadGeneration";
import AIWebsite from "./pages/AIWebsite";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/voice-agents" element={<VoiceAgents />} />
          <Route path="/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/whatsapp-integration" element={<WhatsAppIntegration />} />
          <Route path="/ai-chatbots" element={<AIChatbots />} />
          <Route path="/ai-lead-generation" element={<AILeadGeneration />} />
          <Route path="/ai-website" element={<AIWebsite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
