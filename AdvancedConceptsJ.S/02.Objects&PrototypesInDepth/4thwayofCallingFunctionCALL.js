//Function meant to be called in constructor mode.
function Bicycle(cadence,speed,gear,tirepressure){
this.cadence=cadence;
this.speed=speed;
this.gear=gear;
this.tirepressure=tirepressure;
this.inflateTires= function(){
    this.tirepressure +=3;
}
}
//Calling the function in constructor mode
var bicycle1=new Bicycle(50,20,4,25);
bicycle1.inflateTires();

var bicycle2=new Bicycle(50,20,4,30);
bicycle2.inflateTires();

function Mechanic(name){
    this.name=name;
}
var  mike = new Mechanic("mike");
//taking instance of Bicycle instance and creating a new instance for mechanic
mike.inflateTire=bicycle1.inflateTires;
/*calling the about function Bicycle the property inside inflatetires , 
tirepressure is undefined in the case of mechanic
*/
// mike.inflateTire(); 
console.log(bicycle1);
console.log(mike.inflateTire.call(bicycle1));
console.log(bicycle1);//it works


/*Solution:When ever we uses "this" keyword in "this" context it points to that
particular object or function! So here we tell JavaScript interpretor to bind "this"
keyword to the other object by calling the above object by using call() method..*/

//CHANGING THE CONTEXT OF "this" KEYWORD

/*............Fourth way of calling a function........
a function in javascript is an object, that object can have property that mean
every function object in javascript has an out of the box property which happens
to be another function THAT PROPERTY IS CALLED--CALL()--It lets you call function*/

//NOTE: functionName.call() is exactly same as functionName().

/*Then what is there in using call() method on function when we have exact replica 
of it..Basically call() method takes arguments which could be an object..
WHY PASSING AN OBJECT TO CALL PROPETY??---call propety takes this object and binds
it to the this reference on the calling function ..if we call a function 

functionName.call({}); like this it binds the this reference of calling function
to the object that passed as an argument to the call function..
ACTUALLY WE AN CHOOSE WHICH OBJECT TO POINT TO THIS REFERENCE...this is different 
from the another three methods of executing a function...*/

/*IN CASE OF EXECUTING A NORAML FUNCTION WITHOUT ANY CONTEXT THIS REFERES TO FIRST TO 
GLOABL , IF IT IS IN THE CONTEXT OF AN OBJECT THIS REFERES TO THE OBJECT OF NEW, IT REFERSE
TO NEWLY CREATED OBJECT....BUT HERE WE HAVE A CHOICE OF THIS REFERENCE POINTS TO WHATEVER YOU
WANT*/

