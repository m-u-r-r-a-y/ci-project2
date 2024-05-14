let questions = [
["what color is the sky","red","blue","green","white"], 
["q2","c1","c2","c3","c4"],
["q3","c1","c2","c3","c4"],
["q4","c1","c2","c3","c4"]];

let random = Math.floor(Math.random() * questions.length)
console.log(random)
document.getElementById("questions").innerHTML = questions[random][0];
document.getElementById("choice1").innerHTML = questions[random][1];
document.getElementById("choice2").innerHTML = questions[random][2];
document.getElementById("choice3").innerHTML = questions[random][3];
document.getElementById("choice4").innerHTML = questions[random][4];
