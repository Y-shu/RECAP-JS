/**
 * When ever we write variable declaration in javascript when the interpreter runs
 * the variable declartion are hoisted to the top its moved to the top
 * As compiler looks at var's and then the interpreter executes what the var's are
 * doing
 * Its like all the var's declarations are hoisted on the very top 
 *  */
// but below all are undeclared 
a=10; // variable a and write operation on 'a'
console.log(b); // read operation to 'b'
c++;//both write and read operation takes the value of c and add one to it
//now declaring them 
var a;
var b;
var c;  

/**
 * In Compilation step as it skips above line and get to variable declarations
 * Where ever we declare variables there are automatically hoisted to the top
 * ----called HOISTING
 * This works same in functions even
 */
myFun();//function called before function gets defined
function myFun(){
    console.log("Hey");
    
}
// this works fine 

// NOTE:recursive function---function calling itself 

// HOISTING HAPPENS FOR FUNCTION DECLARATIONS NOT FOR FUNCTION EXPRESSION

func();

var func=function(){

}
// Compilation step:
/**
 * ignores first step
 * goes to next line var func it creates a variable func in the global scope
 * compilation step doesn't take care about assigning as it is responsibility
 * of interpretation so value assigne to func is undefined
 */
// Interpretation step:
/**
 * as there is nothing to assign 
 * interpreter trys to execute func and it will be undefined so this is not
 * gona work
 */
// NOTE:A function declaration results in function object being created in the 
// compilation step itself