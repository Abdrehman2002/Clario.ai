import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";

const routes = [
  '/',
  '/voice-agents',
  '/ai-chatbots',
  '/workflow-automation',
  '/whatsapp-integration',
  '/ai-lead-generation',
  '/ai-website',
  '/medicare-ai-receptionist',
  '/dinemate-ai-agent',
  '/autocare-ai-receptionist',
  '/glamcare-ai-agent',
  // Comparison pages
  '/compare/vextria-vs-air-ai',
  '/compare/vextria-vs-retell-ai',
  '/compare/bland-ai-vs-dialpad',
  // Alternatives & Best Of pages
  '/ai-voice-agent-alternatives',
  '/bland-ai-alternatives',
  '/best-ai-receptionist-software',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    sitemap({
      hostname: 'https://vextriaai.com',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/voice-agents': 0.9,
        '/ai-chatbots': 0.9,
        '/workflow-automation': 0.9,
        '/whatsapp-integration': 0.8,
        '/ai-lead-generation': 0.8,
        '/ai-website': 0.8,
        '/medicare-ai-receptionist': 0.7,
        '/dinemate-ai-agent': 0.7,
        '/autocare-ai-receptionist': 0.7,
        '/glamcare-ai-agent': 0.7,
        // Comparison pages - high priority for SEO
        '/compare/vextria-vs-air-ai': 0.9,
        '/compare/vextria-vs-retell-ai': 0.9,
        '/compare/bland-ai-vs-dialpad': 0.8,
        // Alternatives pages - high priority for SEO
        '/ai-voice-agent-alternatives': 0.9,
        '/bland-ai-alternatives': 0.9,
        '/best-ai-receptionist-software': 0.9,
      },
      lastmod: new Date().toISOString().split('T')[0],
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
