export const getDifficulty = (readyInMinutes?: number): string => {
  if (!readyInMinutes) return 'Unknown';
  
  if (readyInMinutes <= 15) return 'Very Easy';
  if (readyInMinutes <= 30) return 'Easy';
  if (readyInMinutes <= 60) return 'Medium';
  return 'Hard';
};

export const getDifficultyClass = (readyInMinutes?: number): string => {
  if (!readyInMinutes) return 'difficulty-unknown';
  
  if (readyInMinutes <= 15) return 'difficulty-very-easy';
  if (readyInMinutes <= 30) return 'difficulty-easy';
  if (readyInMinutes <= 60) return 'difficulty-medium';
  return 'difficulty-hard';
};
