export const isExpensive = (pricePerServing?: number): boolean => {
  if (!pricePerServing) return false;
  return pricePerServing > 300;
};

export const formatPrice = (pricePerServing?: number): string => {
  if (!pricePerServing) return 'N/A';
  
  const dollars = pricePerServing / 100;
  return `$${dollars.toFixed(2)}`;
};

export const getCostCategory = (pricePerServing?: number): string => {
  if (!pricePerServing) return 'Unknown';
  
  if (pricePerServing < 150) return 'Budget';
  if (pricePerServing < 300) return 'Moderate';
  return 'Expensive';
};
