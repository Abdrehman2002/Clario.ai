import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VoiceAgents from "./pages/VoiceAgents";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import WhatsAppIntegration from "./pages/WhatsAppIntegration";
import AIChatbots from "./pages/AIChatbots";
import AILeadGeneration from "./pages/AILeadGeneration";
import AIWebsite from "./pages/AIWebsite";
import MediCareAIReceptionist from "./pages/MediCareAIReceptionist";
import DineMateAIAgent from "./pages/DineMateAIAgent";
import AutoCareAIReceptionist from "./pages/AutoCareAIReceptionist";
import GlamCareAIAgent from "./pages/GlamCareAIAgent";
import VextriaVsAirAI from "./pages/compare/VextriaVsAirAI";
import VextriaVsRetellAI from "./pages/compare/VextriaVsRetellAI";
import BlandAIVsDialpad from "./pages/compare/BlandAIVsDialpad";
import AIVoiceAgentAlternatives from "./pages/AIVoiceAgentAlternatives";
import BlandAIAlternatives from "./pages/BlandAIAlternatives";
import BestAIReceptionistSoftware from "./pages/BestAIReceptionistSoftware";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/voice-agents" element={<VoiceAgents />} />
            <Route path="/workflow-automation" element={<WorkflowAutomation />} />
            <Route path="/whatsapp-integration" element={<WhatsAppIntegration />} />
            <Route path="/ai-chatbots" element={<AIChatbots />} />
            <Route path="/ai-lead-generation" element={<AILeadGeneration />} />
            <Route path="/ai-website" element={<AIWebsite />} />
            <Route path="/medicare-ai-receptionist" element={<MediCareAIReceptionist />} />
            <Route path="/dinemate-ai-agent" element={<DineMateAIAgent />} />
            <Route path="/autocare-ai-receptionist" element={<AutoCareAIReceptionist />} />
            <Route path="/glamcare-ai-agent" element={<GlamCareAIAgent />} />
            {/* Comparison Pages */}
            <Route path="/compare/vextria-vs-air-ai" element={<VextriaVsAirAI />} />
            <Route path="/compare/vextria-vs-retell-ai" element={<VextriaVsRetellAI />} />
            <Route path="/compare/bland-ai-vs-dialpad" element={<BlandAIVsDialpad />} />
            {/* Alternatives & Best Of Pages */}
            <Route path="/ai-voice-agent-alternatives" element={<AIVoiceAgentAlternatives />} />
            <Route path="/bland-ai-alternatives" element={<BlandAIAlternatives />} />
            <Route path="/best-ai-receptionist-software" element={<BestAIReceptionistSoftware />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
