//named/anonymous function expression difference??

//Answer: how we call them is same but difference lies in
//how browser loads them intp the execution context

//1.Function declarations load before any code is executed--Hoisting
//2.Function expressions load only when the interpreter reaches that line of code


//function declaration
bluebell(); //Hoisting
//declartions are loaded before any code can run...
function bluebell(){
    document.write("<h3>I Love My Blue Bell!</h3>")
};

//function expression
mybaby(); // error! it will not get loaded
var mybaby=function(){
    document.write("<h3>I just love you baby!</h3>")
};



