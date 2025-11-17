import { useState } from 'react';

// hook per gestire gli ingredienti
export function useIngredients() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const addIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };
  return {
    selectedIngredients,
    addIngredient,
    removeIngredient
  };
}
