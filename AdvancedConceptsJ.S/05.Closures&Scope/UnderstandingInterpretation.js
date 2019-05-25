//Execution step looks at initilizations
//but it looks at the scope chain that was created at compilation step inorder
//which variable is used and when to use 


// During execution step 
// It takes the value and assign it to the variable durig this process
// it just checks for compilation book in which it will get to know
// which value to be assigned to which variable
// As the below variable is in global scope browser check for a variable 
// by name myName in global scope and assigns this value to it
var myName="kittu";
function myFun(){
    console.log("hello"+name);
    
}
// myFun is variable and myName is also a variable
// myFun needs to access from the global scope 
// now the interpretor is going to check in global scope for the variable
// called greet---this variable holds function declaration 
myFun(myName);
// myName here is also in the global scope for a variable registered with 
// myName and sure enough it finds in the global scope

// we have an implicit assignment "name" this assignment is inside the scope
// of the greet function ...hey greet scope do you have A variable called name
// and assigns kittu to it

// console.log here this is an object reference there is an global object called
// 'console' then the interpreter asks greet function that do you have console 
// in your scope now the greet scope doesnot have it coz nothing is declared in the
// name of console so it goes ONE LEVEL UP it checks the global scope ...WHEN THE INTER
// -PRETER DOESN'T FIND SOMETHING IT THAT SCOPE IT GOES ONE LEVEL UP IF ITS NOT THERE
// IT KEEPS GOING TILL IT HITS THE GLOBAL SCOPE 

// As console is global object which .log method which gone call this and its gone
// pass in this string + name 

// WHAT HAPPENS WHEN IT DOESN'T FIND IT IN THE GLOBAL SCOPE?