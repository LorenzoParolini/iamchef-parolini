import { useState, useEffect } from 'react';
import { useApi, getRecipeInformationURL } from './useApi';
import type { Recipe } from '../types';


export function useRecipeDetails(apiKey: string) {
  // stato della ricetta selezionata (dati completi)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // ID della ricetta da caricare (quando è null non fa chiamate)
  const [recipeId, setRecipeId] = useState<number | null>(null);

  // costruisce l'URL solo quando ci sono sia recipeId che apiKey
  const url = recipeId && apiKey ? getRecipeInformationURL(recipeId, apiKey) : '';
  
  // fa la chiamata API (useApi gestisce loading, error, ecc.)
  const { data: recipeDetails } = useApi<Recipe>(url);

  // quando arrivano i dettagli, aggiorna lo stato
  useEffect(() => {
    if (recipeDetails) {
      setSelectedRecipe(recipeDetails);
    }
  }, [recipeDetails]);

  // funzione per selezionare una ricetta (passi l'ID)
  const selectRecipe = (id: number) => {
    setRecipeId(id);
  };

  // funzione per deselezionare e resettare tutto
  const clearRecipe = () => {
    setSelectedRecipe(null);
    setRecipeId(null);
  };

  return { 
    selectedRecipe,  // dati completi della ricetta
    selectRecipe,    // chiama questa per caricare una ricetta
    clearRecipe      // chiama questa per resettare
  };
}
