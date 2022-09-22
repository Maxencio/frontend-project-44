import readlineSync from "readline-sync";

// Определение функции приветствия
export const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const getName = () => readlineSync.question("May I have your name? ");
  const userName = getName();
  console.log(`Hello, ${userName}!`);

  // Определение функции, дающее рандомное целое число
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  // Определение функции игры на четность

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log("Question: ", number);
    const answerUser = readlineSync.question("Your answer: ");

    const checking1 = number % 2 === 0 && answerUser === "yes";
    const checking2 = number % 2 !== 0 && answerUser === "no";
    const checking3 = number % 2 === 0 && answerUser === "no";
    const checking4 = number % 2 !== 0 && answerUser === "yes";

    if (checking3 === true) {
      return `"no" is wrong answer ;(. Correct answer was "yes". /n Let's try again, ${userName}!`;
    }
    if (checking4 === true) {
      return `"yes" is wrong answer ;(. Correct answer was "no". /n Let's try again, ${userName}!`;
    }
    if (checking1 === true || checking2 === true) {
      console.log("Correct!");
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
