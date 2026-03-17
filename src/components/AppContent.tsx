import { useVapi } from "@/contexts/VapiContext";
import VapiWidget from "./VapiWidget";

const AppContent = ({ children }: { children: React.ReactNode }) => {
  const { activeAssistantId } = useVapi();

  return (
    <>
      {children}
      {activeAssistantId && (
        <VapiWidget
          apiKey="858b87e2-6fe0-4fca-9eff-d7e8ecf436ab"
          assistantId={activeAssistantId}
        />
      )}
    </>
  );
};

export default AppContent;