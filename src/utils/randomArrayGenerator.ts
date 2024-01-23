export const generateRandomArr = () => {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 20) + 1);
};
