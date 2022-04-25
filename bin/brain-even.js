import readlineSync from 'readline-sync';

const game = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(` Hello, ${name}! `);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  function getRandomInt() {
    return Math.floor(Math.random() * 100);
  }

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    console.log(`Question: ${number}`);
    const yourAnswer = readlineSync.question("Your answer: ");

    // if the number is even
    if (number % 2 === 0) {
      if (yourAnswer === 'yes') {
        console.log("Correct!");
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}`);
        return;
      }
    } else {
      if (yourAnswer === 'no') {
        console.log("Correct!");
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}`);
        return;
      }
    }
  }

  console.log(`Congratulations, ${name}!`);
};

game();
