function test(){
    alert("first function is called");
}

function one(){
var num = prompt("Please enter a number:")
var total = 0
for (var i = 0; i <=num; i++ )
(total = total + i)
alert(total);
}


function two(){


var i =0;
var words = [];
do {
var x = prompt("Do you want to play?");
if (x == 'yes'){
var y = prompt("Enter a word");
words.push(y);
}
if(x== 'no'){
i = i+1;
alert(words);
}
}
while(i<1)
}


function three(){
var i =0;
var e ='';
var x = prompt("Would you like to print your name?");
do{

if(x == 'yes'){
var z = "Hello my name is Anthony";
alert(z);
x = prompt("Would you like to print this again?");
var test = (z + e);
alert(test)
e += "!";
}
else if(x == 'no'){
i = i+1
}
}
while(i<1)}

function four(){

var stop = prompt("Would you like to print your name?");
if (name != "stop"){
var s = alert("Hello. My Name is Anthony");
while (name != "stop" || name != "no"){
stop=prompt("Would you like to print this again?");
alert("Hello. My name is Anthony" + "!")}
}}



function five(){

var meals = prompt("What time of day is it?");

switch(meals) {
    case "morning":
        alert("Since it is " + meals + ", you should be eating breakfast. We suggest eggs and toast."
        );break
    case "noon":
       alert("Since it is " + meals + ", you should be eating lunch. We suggest a salad."
        );break
    case "evening":
        alert("Since it is " + meals + ", you should be eating dinner. We suggest chicken and rice."
        );break
    default:
        alert("I have never heard of that time for eating...please enter morning, noon, or evening");
        break
}}














//var name = prompt ("Insert your name")
//var secret; 

//while (secret !== "yes") {
    //secret = prompt("Would you like to print your name?");
  //}
  //if (secret === "yes") {
 //prompt("Hello. My name is " + name)
//if (secret === "yes")
//prompt("hello")
//}

//var secret; 
/*
2 function four() {
var stop = "yes";
var name = "";
var name1 = "";

while (name != stop){
  name = prompt ("Would you like to print your name?", "");

  if (name == stop){
    alert ("Hello. My Name is Anthony");
  } var name1 = prompt ("Would you like to print this again?")
  if (name1 == stop)
  for (name1 === stop; name1 === "yes"; name1++){ //big loop
    prompt("Hello. My Name is Anthony" + "!")
  }
}}


function two(){


var play = prompt("Do you want to play?");
if (play >= "yes"){
var word = prompt("Enter a word");
if (word >= "dog"){
var last = prompt("Enter another word");
}else if (last = "yes"){
document.write(word)}
if (word >= "cat"){
do{
var again = prompt("Do you want to play again");
x++;}
while (again <= "yes");}

}}

function three(){
var stop = "no";
var name = "";
while (name != stop){
  name = prompt ("Would you like to print your name?", "");
  if (name == stop){
    prompt ("Would you like to print this again?");
  } else {
    alert ("Hello. My Name is Anthony");
  }
}}

while (secret !== "yes") {
    secret = prompt("Would you like to print your name?");

  }

alert("Hello. My name is Anthony");
var secret1; 

while (secret1 !== "yes") {
    secret1 = prompt("Would you like to print this again?");
  }
  alert("Hello. My name is Anthony!")
  var secret2; 

while (secret2 !== "yes") {
    secret2 = prompt("Would you like to print this again?");
  }
  alert("Hello. My name is Anthony!!")

  var secret3; 

while (secret3 !== "yes") {
    secret3 = prompt("Would you like to print this again?");
  }
  alert("Hello. My name is Anthony!!!")
  
  
  
  
  prompt("Wanna play?");


var name = prompt("What's your name?");
while (name.length == 0) {
    alert("Please enter your name!");
    name = prompt("What's your name?");
}
document.write("Welcome to my game " + name + "!" + "<br>");*/