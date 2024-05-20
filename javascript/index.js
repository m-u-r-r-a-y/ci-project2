/* Questions & Choices : correct answer is stored as the final index of the choice sub array */
let questions = [
["How many planets are in the solar system?","4.webp","2.webp","5.webp","8.webp", 4], 
["Which planet is the largest?","mars.gif","jupiter.gif","pluto.gif","mercury.gif", 2],
["Which planet is the smallest?","mercury.gif","earth.gif","neptune.gif","mars.gif", 1],
["What colour is mars?","red.png","grey.png","blue.png","brown.png", 1],
["Which planet has rings?","earth.gif","jupiter.gif","pluto.gif","saturn.gif", 2],
["Which planet do people live on?","earth.gif","mercury.gif","pluto.gif","saturn.gif", 1],
["How to we get to the moon?","bus.png","bicycle.jpg","rocket.jpg","lift.png", 3],

];


//console.log(random)


/* Create a backup clone of the original array */
let backupQuestions = [...questions];


/* initialise global variables */
var correctAnswer = "";
var randInt = 0;
var score = 0;
var attempts = 6;

function startNewGame() {
    score = 0;
    attempts = 6;
    questions = [...backupQuestions]; // restore the questions array
    clearScreen();
    displayQuestion();

    /* end of function */
  }

  function clearScreen() {


    /* Clear previous choices shown on screen */

    /* Clear previous choices shown on screen */

    document.getElementById("questions").innerHTML = "";
    document.getElementById("choice1").innerHTML = "";
    document.getElementById("choice2").innerHTML = "";
    document.getElementById("choice3").innerHTML = "";
    document.getElementById("choice4").innerHTML = "";
  
    /* Display scores and lives on screen  */
    document.getElementById("score").innerHTML = score;
    document.getElementById("try").innerHTML = attempts;
  
    /* end of function */
  }
  function displayQuestion() {
    /* Function to randomly pick a question for display */
  
    /* Get a random number and use it to pick a question */
    randInt = Math.floor(Math.random() * questions.length);
    document.getElementById("questions").innerHTML = questions[randInt][0];
  
    /* Save the correct answer */
    correctAnswer = questions[randInt][5];

  /* Use string literal to build up the HTML IMG tag, using image names from the questions array */
    document.getElementById("choice1").innerHTML = `<img src=images/${questions[randInt][1]} >`;
    document.getElementById("choice2").innerHTML = `<img src=images/${questions[randInt][2]} >`;
    document.getElementById("choice3").innerHTML = `<img src=images/${questions[randInt][3]} >`;
    document.getElementById("choice4").innerHTML = `<img src=images/${questions[randInt][4]} >`;
    

  
    /* remove the question so that it doesn't come up again */
    questions.splice(randInt, 1);
  
    /* end of function */
  }
  
  function checkAnswer(element, userAnswer) {
    /* Check the user's answer against the correct answer */
  
    if (userAnswer == correctAnswer) {
      score++;
    }
  
    /* Update the score to display on screen */
    document.getElementById("score").innerHTML = score;
  
    /* Reduce the number of attempts left */
    attempts--;
    document.getElementById("try").innerHTML = attempts;
  
    /* If 3 correct questions answered, go on to the game */
    if (score >= 3) {
      window.alert("Well Done!");
      startNewGame();
    }
  
    /* If no more attempts left ... */
    if (attempts <= 0) {
      window.alert("GAME OVER ! Sorry..  ");
      startNewGame();
    } else displayQuestion();
  
    /* end of function */
  }
  
  /* --- Main Program starts here  ---------------*/
  
  startNewGame();