
/*

Q1: Write a fortune called "fortune" that will take one argument (your vistor's name) and prints a random "fortune teller style" fortune into an element of your page.

Probably what I Have To Do...
-Set up input box in html (using the input tag); give that input an ID for simplicity

-Declare an array of possible fortunes

-Start with the 1st event "DomContentLoaded"; this is where we're going to take our variables and give them "values"

-Make a button w/ .addEventListener so that when you click it, it randomizes the array and outputs the fortune

-Concatenate input with the randomized array function to create the output

*/
var inputText = document.getElementById ("inputBox");
var outputText = document.getElementById ("outputText");
var exeButton = document.getElementById ("runButton");

/*
document.addEventListener("DomContentLoaded", function() {
  var inputText = document.getElementById ("inputBox");
  var outputText = document.getElementById ("outputText");
  var exeButton = document.getElementById ("runButton");
});
*/



exeButton.addEventListener("click", function (){
  var pulledInputText = inputText.value;
  var fortuneNames = ['a beautiful, smart, and loving person will be coming into your life.', 'a faithful friend is a strong defense.', 'a friend asks only for your time not your money.', 'a lifetime of happiness lies ahead of you.', 'all your hard work will soon pay off.', 'disbelief destroys the magic.', 'curiosity kills boredom. Nothing can kill curiosity.', 'don’t be discouraged, because every wrong attempt discarded is another step forward.', 'don’t just spend time. Invest it.', 'don’t worry; prosperity will knock on your door soon.', 'failure is the chance to do better next time...unless your name is Sam. As a Sam in this universe, you are guaranteed a life of awesomeness.', 'get your mind set – confidence will lead you on.', 'Help! I’m being held prisoner in a bakery!', 'how you look depends on where you go.', 'if certainty were truth, we would never be wrong.'];
  var randomFortune = Math.floor(Math.random() * fortuneNames.length);
  outputText.innerText = pulledInputText + "," + " " +  fortuneNames [randomFortune] + " ";

});



///////////

/*
Q2: Write a function called 'restyle' that applies new CSS styles to the 'fortune' texts in a random manner each time it fires. Modify at least 3 CSS properties.

-We create a new button event listener so that everytime it fires, something happens to the class CSS
-We have to randomize an array of colors (One CSS thing)





*/
