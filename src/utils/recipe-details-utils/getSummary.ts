export const getSummary = (summary?: string, maxLength: number = 180): string => {
  if (!summary) return 'No description available.';
  
  const cleanText = summary.replace(/<[^>]*>/g, '');
  
  if (cleanText.length > maxLength) {
    return cleanText.substring(0, maxLength).trim() + '...';
  }
  
  return cleanText;
};

export const getShortSummary = (summary?: string): string => {
  if (!summary) return 'No description available.';
  
  const cleanText = summary.replace(/<[^>]*>/g, '');
  const firstSentence = cleanText.split('.')[0];
  return firstSentence ? firstSentence + '.' : cleanText;
};
