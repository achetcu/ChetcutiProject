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
do{
var x = prompt("Would you like to print your name?");
if(x == 'yes'){
var z = "Hello my name is Anthony";
var test = (z + e);
alert(test)
e += "!";
}
else if(x == 'no'){
i = i+1
}
}
while(i<1)
}



function four(){

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












