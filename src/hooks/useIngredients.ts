import { useState } from 'react';

// custom hook per gestire gli ingredienti
// possiamo riutilizzare questa logica in più componenti
// separa la logica dallo stato visuale

export function useIngredients() {
  // stato che contiene l'array degli ingredienti
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  // aggiungi ingrediente (solo se non esiste già)
  const addIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  // rimuovi ingrediente
  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  // ritorna tutto quello che serve
  return {
    selectedIngredients,
    addIngredient,
    removeIngredient
  };
}
