// hook non più necessario con react router
// la navigazione è gestita tramite useNavigate

/*
import { useState } from 'react';

export function usePageNavigation(initialPage: string) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // funzioni helper per cambiare pagina in modo semantico
  const goToSearch = () => setCurrentPage('search');
  const goToDiscover = () => setCurrentPage('discover');
  const goToDetails = () => setCurrentPage('details');
  const goToSetApi = () => setCurrentPage('setApi');

  return { 
    currentPage,
    setCurrentPage,
    goToSearch,
    goToDiscover,
    goToDetails,
    goToSetApi
  };
}
*/
