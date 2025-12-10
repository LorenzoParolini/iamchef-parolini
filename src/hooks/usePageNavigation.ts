import { useState } from 'react';
import type { Page } from '../types';


export function usePageNavigation(initialPage: Page) {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);

  // funzioni helper per cambiare pagina in modo semantico
  const goToSearch = () => setCurrentPage('search');
  const goToDiscover = () => setCurrentPage('discover');
  const goToDetails = () => setCurrentPage('details');
  const goToSetApi = () => setCurrentPage('setApi');

  return { 
    currentPage,      // pagina attualmente visualizzata
    setCurrentPage,   // funzione generica per cambiare pagina
    goToSearch,       // vai alla pagina di ricerca
    goToDiscover,     // vai alla pagina delle ricette trovate
    goToDetails,      // vai ai dettagli di una ricetta
    goToSetApi        // vai alla pagina per impostare l'API key
  };
}
