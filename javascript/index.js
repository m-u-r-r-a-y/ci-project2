         let questions = [
                ["How many planets are in the solar system?", "4.webp", "2.webp", "5.webp", "8.webp", 4],
                ["Which planet is the largest?", "mars.gif", "jupiter.gif", "pluto.gif", "mercury.gif", 2],
                ["Which planet is the smallest?", "mercury.gif", "earth.gif", "neptune.gif", "mars.gif", 1],
                ["What colour is mars?", "red.png", "grey.png", "blue.png", "brown.png", 1],
                ["Which planet has rings?", "earth.gif", "jupiter.gif", "pluto.gif", "saturn.gif", 4],
                ["Which planet do people live on?", "earth.gif", "mercury.gif", "pluto.gif", "saturn.gif", 1],
                ["How do we get to the moon?", "bus.png", "bicycle.jpg", "rocket.jpg", "lift.png", 3],
            ];

            let backupQuestions = [...questions];

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
            }

            function clearScreen() {
                document.getElementById("questions").innerHTML = "";
                document.getElementById("choice1").innerHTML = "";
                document.getElementById("choice2").innerHTML = "";
                document.getElementById("choice3").innerHTML = "";
                document.getElementById("choice4").innerHTML = "";

                document.getElementById("score").innerHTML = score;
                document.getElementById("try").innerHTML = attempts;
            }

            function displayQuestion() {
                randInt = Math.floor(Math.random() * questions.length);
                document.getElementById("questions").innerHTML = questions[randInt][0];

                correctAnswer = questions[randInt][5];

                document.getElementById("choice1").innerHTML = `<img src=images/${questions[randInt][1]} alt="choice1">
                <h2>${questions[randInt][1].split('.')[0]}</h2>`;

                document.getElementById("choice2").innerHTML = `<img src=images/${questions[randInt][2]} alt="choice2">
                <h2>${questions[randInt][2].split('.')[0]}</h2>`;

                document.getElementById("choice3").innerHTML = `<img src=images/${questions[randInt][3]} alt="choice3">
                <h2>${questions[randInt][3].split('.')[0]}</h2>`;

                document.getElementById("choice4").innerHTML = `<img src=images/${questions[randInt][4]} alt="choice4">
                <h2>${questions[randInt][4].split('.')[0]}</h2>`;

                questions.splice(randInt, 1);
            }

            function checkAnswer(id, button) {

                let userAnswer = button;


                if (userAnswer == correctAnswer) {
                    score++;
                    playAudio("correct");
                } else {
                    playAudio("incorrect");
                }

                document.getElementById("score").innerHTML = score;
                attempts--;
                document.getElementById("try").innerHTML = attempts;

                if (score >= 3) {
                    window.alert("Well Done!");
                    startNewGame();
                } else if (attempts <= 0) {
                    window.alert("GAME OVER! Sorry..");
                    startNewGame();
                } else {
                    displayQuestion();
                }
            }

            function playAudio(result) {
                if (result === "correct") {
                    document.getElementById("correctSound").play();
                } else {
                    document.getElementById("incorrectSound").play();
                }
            }

            // Main Program starts here
            startNewGame();