import game from '../index.js';

const gamesrule = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRandomInt() {
  return Math.floor(Math.random() * 20);
}

const terms = () => {
  const number = getRandomInt();
  const question = `${number}`;
  const answer = () => {
    if (number % 2 === 0) {
      return 'yes';
    } return 'no';
  };
  return [question, answer()];
};

const brainEven = () => game(gamesrule, terms);

export default brainEven;
