import game from '../index.js';

const gamesrule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const terms = () => {
  const number = getRandomInt();
  const question = `${number}`;
  const answer = String(isPrime(number));

  return [question, answer];
};

const brainPrime = () => game(gamesrule, terms);

export default brainPrime;
