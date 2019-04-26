//Javascript is both compiled and interpreted language..there is a compilation
//step which lasts for a fraction of seconds.

//Functions actually are objects in javascript
//function are basically two types:Function declarations and function expression

//Function Declaration
function smily(){
    //Name of the function acts as variable pointing to function....
    console.log("Its an example to show function declaration!");
    
}
smily();//function call

//Function Expression
//creating a function and assigning it to a variable...
var funny=function(){
    console.log("Its an example to show function expression!");
    
}
funny();//function call
//NOTE:Initilizing a function and assign it to a variable and we are not executing
//a function and assigning its value to a variable...as functions are objects 
//instances of an function is itself an instance of an object...

//NOTE:Calling function declaration and function expression both are same...
