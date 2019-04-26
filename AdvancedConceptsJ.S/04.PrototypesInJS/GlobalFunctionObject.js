/*In javascript run time environment we have global window
object we also have some global functions and one of those
global functions is called object.Name of function is object 
but the type is function...This is something thats avaliable 
globally..
As functions are just objects in Javascript, this global function
object is actually an object as well */

console.log(Object);//function Object
console.log(Object());//it returns an object

//When a javascript engine creates a object called function
//it creates two objects out of it as we know earlier
//one among them is prototype object

//one object is function itself and the other is prototype object
//function object holds property called prototype
//prototype object holds property called constructor
//these two properties points to each other...