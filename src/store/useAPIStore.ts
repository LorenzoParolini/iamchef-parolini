import { create } from 'zustand'

interface APIStore {
    ApiKey: string
    setAPI: (newApiKey: string) => void
}

// Store per gestire la chiave API
const useAPIStore = create<APIStore>((set) => ({
  // Recupera la chiave API da localStorage all'avvio
  ApiKey: localStorage.getItem('ApiKey') || '',

  setAPI: (newApiKey: string) => {
    set({ ApiKey: newApiKey });
    localStorage.setItem('ApiKey', newApiKey); // Salva la chiave API in localStorage
  },
}));

export default useAPIStore;