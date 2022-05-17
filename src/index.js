import readlineSync from 'readline-sync';

const game = (gamesrule, terms) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gamesrule);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = terms();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
