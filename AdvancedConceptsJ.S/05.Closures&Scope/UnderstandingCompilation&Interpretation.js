// -----------Compilation step............
//During compilation it just looks at var
//assume that 'a' is global scope similarly with'b' 
var a = 10;
var b =20;
console.log(a+b); // compilation step ignores this step


// Along with there variable declarations one function declaration is considered
//in compilation step

var x=10;
//as functions are objects in javascript the moment we create ,
//we are actually creating a sort of variable which contains that object
//so this function declarations actually results in creating a variable called 
//myFun binding it to the function object 
function myFun(){
    var z = 20;
    var  y=z;
    console.log(x+z);
    
}
myFun();//execution of function doesnt have any variable declaration compilation
//skips this line as well
// *** so here there is a 4th hidden variable declaration which is myfun
/*Compilation Context:
Global Scope:
x
myfun
myfunScope(local scope):
z
y  */

var myName="yashu"; // compilation step:Global and takes myName
//compilation---greet and name  even though we are not using a var before name 
//when ever we are creating method argument means that the variable that gets created 
//when that method gets executed 
//'name' gets created in scope greet
function greet(name){
console.log("Hello"+name);

}
//we are calling greet over here and passing a value then that value get assigned
//to a variable(name)
greet(myName);