import { create } from 'zustand'

interface APIStore {
    ApiKey: string
    setAPI: (newApiKey: string) => void

}


// Store per gestire la chiave API
const useAPIStore = create<APIStore>((set) => ({
  ApiKey: '', // valore iniziale (stringa vuota)
  setAPI: (newApiKey: string) => set({ ApiKey: newApiKey }),
}));

export default useAPIStore;