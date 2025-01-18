'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ClientContextType = {
  mounted: boolean;
};

const ClientContext = createContext<ClientContextType>({
  mounted: false,
});

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ClientContext.Provider value={{ mounted }}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  return useContext(ClientContext);
} 