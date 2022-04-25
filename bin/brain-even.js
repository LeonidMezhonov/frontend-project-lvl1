import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = () => Math.floor(Math.random() * 100);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    console.log(`Question: ${number}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    // if the number is even
    if (number % 2 === 0) {
      if (yourAnswer === 'yes') {
        console.log('Correct!');
      }

      else if (yourAnswer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${name}`);
        return;
      }

      else {
        console.log('Incorrect data entry!');
        console.log(`Let's try again, ${name}`);
        return;
      }
    }

    // if the number is odd
    else {
      if (yourAnswer === 'no') {
        console.log("Correct!");
      }

      else if (yourAnswer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${name}`);
        return;
      }
        
      else {
        console.log('Incorrect data entry!');
        console.log(`Let's try again, ${name}`);
        return;
      }
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

game();
