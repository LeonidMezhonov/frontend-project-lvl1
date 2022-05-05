import game from '../index.js';

const gamesrule = 'What is the result of the expression?';

function getRandomInt() {
  return Math.floor(Math.random() * 20);
}

const char = ['+', '-', '*'];
const getRandomChar = Math.floor(Math.random() * char.length);

const getRandomCalc = (number1, number2, randomChar) => {
  switch (randomChar) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'error';
  }
};

const terms = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const randomChar = char[getRandomChar];
  const question = `${number1} ${randomChar} ${number2}`;
  const answer = `${getRandomCalc(number1, number2, randomChar)}`;
  return [question, answer];
};

const brainCalc = () => game(gamesrule, terms);

export default brainCalc;
