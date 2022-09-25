import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name? ');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
};
