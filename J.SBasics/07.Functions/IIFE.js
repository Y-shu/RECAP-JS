//Immediately-Invoked Function Expression

//In J.S every function when invoked creates a new execution context
//coz variables and functions defined within a 
//function may only accessed inside but not outside
//that context invoking a function provides a very easy way to create privacy

//named function
function makeCounter(){
var i = 0; //local scope
console.log(i);

return function(){
    
        console.log(++i);
};
}
//counter and counter2 each have their own scope of i
var counter=makeCounter();
counter();

var counter2=makeCounter();
counter2();


//IIFE run as soon as its defined

(function(){
        document.write("<h3>Hei! Baby!</h3>");
})
();
//gets the output immediately --function that runs right away

//we can also write an named function expression and we can pass arguments

(favGreet=function(hay=7){
        document.write("<h3>"+hay+"</h3>");
})//it is function expression....function enclosed in side parens ()
favGreet();//if we dont pass any argument it will by default takes
//hay=7...

favGreet(9);

//the main purpose of using IIFE is to avoid clearing the varaiables
//in global scope and to create closures...


//javascript has function level scope...all the variables which are created in
//anonymous functions are local variables


