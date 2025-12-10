import { useState, useEffect } from 'react';
import { useApi, getRecipesByIngredientsURL } from './useApi';
import type { RecipeByIngredients } from '../types';


export function useRecipeSearch(ingredients: string[], apiKey: string) {
  // STATO INTERNO: URL per la chiamata API
  const [url, setUrl] = useState('');

  // EFFECT: Costruisce l'URL quando cambiano ingredienti o API key
  useEffect(() => {
    // Controllo che ci siano sia ingredienti che API key prima di costruire l'URL
    if (ingredients.length > 0 && apiKey) {
      // Usa la funzione helper per costruire l'URL con i parametri corretti
      setUrl(getRecipesByIngredientsURL(ingredients, apiKey));
    } else {
      // Se mancano ingredienti o API key, resetta l'URL (evita chiamate inutili)
      setUrl('');
    }
  }, [ingredients, apiKey]); // Dipendenze: riesegui quando cambiano

  // CHIAMATA API: Delega a useApi la gestione della fetch
  const { data, loading, error } = useApi<RecipeByIngredients[]>(url);

  // RETURN: Espone i dati rinominando 'data' in 'recipes' per chiarezza
  return { 
    recipes: data,  // Rinomina 'data' in 'recipes' per maggiore chiarezza
    loading,        // Passa attraverso lo stato di loading
    error          // Passa attraverso eventuali errori
  };
}
