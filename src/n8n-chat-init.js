import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

createChat({
  webhookUrl:
    "https://clarioai5825.app.n8n.cloud/webhook/adf8ae21-bb0c-47dd-b0ad-b489b26ec4fd/chat",
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: true,
  initialMessages: [
    "👋 Hi there! Welcome to Clario AI.",
    "🤖 I'm your Clario bot. How can I help you today?",
  ],
  i18n: {
    en: {
      title: "Clario AI Assistant 🤖",
      subtitle: "Here to help you 24/7",
      inputPlaceholder: "Type your question here...",
    },
  },
});
