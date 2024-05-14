/* Questions & Choices : correct answer is stored as the final index of the choice sub array */
let questions = [
["How many planet in the solar system?","4","2","5","8", 4], 
["Which planet is the largest?","Mars","Jupiter","pluto","Mercury", 3],
["Which planet is the smallest?","Mercury","Earth","neptune","Mars", 2],
["Which colour is mars?","Red","Grey","Blue","Brown", 2]
["Which planet has rings?","Earth","Jupiter","pluto","Saturn", 4]
["Which planet do people live on?","Earth","Mercury","pluto","Saturn", 2]
["How to we get to the moon?","Bus","Bicyle","Spaceship","Lift", 4]

];

let random = Math.floor(Math.random() * questions.length)
console.log(random)
document.getElementById("questions").innerHTML = questions[random][0];
document.getElementById("choice1").innerHTML = questions[random][1];
document.getElementById("choice2").innerHTML = questions[random][2];
document.getElementById("choice3").innerHTML = questions[random][3];
document.getElementById("choice4").innerHTML = questions[random][4];
