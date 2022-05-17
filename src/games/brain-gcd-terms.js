import game from '../index.js';

const gamesrule = 'Find the greatest common divisor of given numbers.';

function getRandomInt() {
  return Math.floor(Math.random() * 20);
}

const GCD = (a, b) => {
  let valA = a;
  let valB = b;
  if (valA === 0) {
    return valB;
  }

  while (valB !== 0) {
    if (valA > valB) {
      valA -= valB;
    } else {
      valB -= valA;
    }
  }
  return valA;
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
