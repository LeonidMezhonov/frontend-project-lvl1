import game from '../index.js';

const gamesrule = 'Find the greatest common divisor of given numbers.';

function getRandomInt() {
  return Math.floor(Math.random() * 20);
}

const GCD = (a, b) => {
  if (a === 0) {
    return b;
  }

  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else { b -= a; }
  }
  return a;
};

const terms = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `${number1} ${number2}`;
  const answer = String(GCD(number1, number2));
  return [question, answer];
};

const brainGcd = () => game(gamesrule, terms);

export default brainGcd;
