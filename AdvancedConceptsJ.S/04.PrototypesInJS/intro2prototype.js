//when every we create a empty function 

function foo(){

}
//when a javascript engine parses the above function it creates
//an object which happens to be a function object 

//NOTE:Whenever javascript parses a function it creates two objects
//first object is created by functionName and the second object that
//gets created is called prototype object..

//Javascript interpreter creates the property on the functional objects
//that points to the prototype object...so each and every function
//created has a prototype property ...so we can access them by
//functionName.prototype

//when ever we created any object using new keyword followed by function
//then its time for the prototype object to get busy...we can check this 
//property __proto__ this is again a thing which is created by javascript engine
//this get created by every object created by a new keyword followed by function 
//this __proto__ points to an object which is a prototype object of the function we created
