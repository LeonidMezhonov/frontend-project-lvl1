import game from '../index.js';

const gamesrule = 'What number is missing in the progression?';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const progression = (numbersOfProgression, stepOfProgression, lengthOfProgression) => {
  const aProgression = [];
  let result = numbersOfProgression;

  for (let i = 1; i <= lengthOfProgression; i += 1) {
    result += stepOfProgression;

    aProgression.push(result);
  }

  return aProgression;
};

const terms = () => {
  const numbers = getRandomInt(1, 100);
  const step = getRandomInt(1, 5);
  const length = getRandomInt(5, 10);
  const arithmeticProgression = progression(numbers, step, length);
  const missingIndexOfProgression = getRandomInt(1, (arithmeticProgression.length - 1));

  const answer = String(arithmeticProgression[missingIndexOfProgression]);
  arithmeticProgression[missingIndexOfProgression] = '..';
  const question = arithmeticProgression.join(' ');
  return [question, answer];
};

const brainProgression = () => game(gamesrule, terms);

export default brainProgression;
