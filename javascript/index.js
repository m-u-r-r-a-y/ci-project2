let questions = [
["How many planet in the solar system?","4","2","5","8"], 
["Which planet is the largest?","Mars","Jupiter","pluto","Mercury"],
["Which planet is the smallest?","Mercury","Earth","neptune","Mars"],
["Which planet is the coldest?","Earth","Mercury","pluto","Saturn"]];

let random = Math.floor(Math.random() * questions.length)
console.log(random)
document.getElementById("questions").innerHTML = questions[random][0];
document.getElementById("choice1").innerHTML = questions[random][1];
document.getElementById("choice2").innerHTML = questions[random][2];
document.getElementById("choice3").innerHTML = questions[random][3];
document.getElementById("choice4").innerHTML = questions[random][4];
