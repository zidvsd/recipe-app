export const shuffleArray = (arr) => {
  // Remove duplicates based on idMeal
  const uniqueMap = new Map();
  arr.forEach((item) => {
    uniqueMap.set(item.idMeal, item);
  });
  const uniqueArr = Array.from(uniqueMap.values());

  // Shuffle (Fisher-Yates)
  const shuffled = [...uniqueArr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};
