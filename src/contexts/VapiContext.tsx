import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VapiContextType {
  activeAssistantId: string | null;
  setActiveAssistantId: (id: string | null) => void;
  startCall: (assistantId: string) => void;
}

const VapiContext = createContext<VapiContextType | undefined>(undefined);

export const VapiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeAssistantId, setActiveAssistantId] = useState<string | null>(null);

  const startCall = (assistantId: string) => {
    setActiveAssistantId(assistantId);
  };

  return (
    <VapiContext.Provider value={{ activeAssistantId, setActiveAssistantId, startCall }}>
      {children}
    </VapiContext.Provider>
  );
};

export const useVapi = () => {
  const context = useContext(VapiContext);
  if (context === undefined) {
    throw new Error('useVapi must be used within a VapiProvider');
  }
  return context;
};