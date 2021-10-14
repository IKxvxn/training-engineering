export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
