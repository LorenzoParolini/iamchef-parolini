export const isHealthy = (healthScore?: number): boolean => {
  if (!healthScore) return false;
  return healthScore >= 70;
};

export const getHealthCategory = (healthScore?: number): string => {
  if (!healthScore) return 'Unknown';
  
  if (healthScore >= 80) return 'Very Healthy';
  if (healthScore >= 60) return 'Healthy';
  if (healthScore >= 40) return 'Moderate';
  return 'Less Healthy';
};

export const formatHealthScore = (healthScore?: number): string => {
  if (!healthScore) return 'N/A';
  return `${healthScore}/100`;
};
