const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomIndex = (numbers) => getRandomNumber(0, numbers.length);

const getRandomInt = (max) => Math.floor(Math.random() * max);

export { getRandomNumber, getRandomIndex, getRandomInt };
