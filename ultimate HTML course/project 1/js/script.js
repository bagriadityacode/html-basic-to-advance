let text = document.querySelector("main p");

let messages = [

    "Discover the best food & drinks in India",

    "Order food from your favourite restaurant",

    "Fast delivery at your doorstep",

    "Enjoy hot & fresh meals anytime"

];

let index = 0;

setInterval(function(){

    index++;

    if(index >= messages.length){
        index = 0;
    }

    text.innerHTML = messages[index];

},3000);