$.("#form").submit(function(event){
  event.preventDefault();
  var theQuery = $("input[name=question]").val();
});
var answer = ["crit!", "cursed die!","difficult terrain", "the DM likes you", "save failed", "bio break", "roll for initiative", "re-roll", "no line of sight", "it's a trap!", "+5 CHA, you handsome devil!", "yes (if 3rd edition)", "natural 20", "no (house rules)", "run away!", "meh", "gazebo", "not valid in 4th edition", "roll for sass", "roll for 360 no scope"];
var random = answer[Math.floor(Math.random() * answer.length)];
var magic8Ball = new Promise(function(resolve,reject){
  if (theQuery.length != 0) {
    setTimeout(function(){
      resolve(random), 5000
    });
  } else {
    reject(alert("Please enter a question in the input box!"))
  }
});
magic8Ball.then(function(theQuery){
  var answer = ["crit!", "cursed die!","difficult terrain", "the DM likes you", "save failed", "bio break", "roll for initiative", "re-roll", "no line of sight", "it's a trap!", "+5 CHA, you handsome devil!", "yes (if 3rd edition)", "natural 20", "no (house rules)", "run away!", "meh", "gazebo", "not valid in 4th edition", "roll for sass", "roll for 360 no scope"];
  var random = answer[Math.floor(Math.random() * answer.length)];
  $("#answer").innerHTML = random;
});

$("#theQuery").bind("keyup", function () {
	if (keyCode == 13) {
		preventDefault();
	}
});

// $("#clickIt").click(function () {
// 	$("#home").fadeOut(2000);
// 	$("#query").fadeOut(2000);
// 	$("#bored").fadeIn(4000);
//   	$("#behaveDrop").fadeIn(4000);
// 		var behaviorDefined = ["Your cat thinks your mother was a hamster and your father smelled of 
// 		var definition = behaviorDefined[Math.floor(Math.random()*behaviorDefined.length)];
// 			result = definition;
// 		document.getElementById("behave").innerHTML=result;

// 	});
