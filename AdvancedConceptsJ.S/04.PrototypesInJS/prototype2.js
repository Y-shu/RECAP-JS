//__proto__ in an object is called dunder-proto
//double underscore is called as dunder

//function has a property called prototype property
//and in return prototype property has a property which points back
//to function called constructor

function foo(){

}
var proto = foo.prototype;
console.log(proto);//constructor
console.log(proto.constructor);//function
var a = new foo();
//what was the functio which created a particular object??
//object.__proto__.constructor

console.log(a.__proto__.constructor);//foo

//NOTE:Actually dunder proto is not recommonded to us
/*When we have bunch of objects and we want to create a behaviour
just going to that function from which these objects are constructed 
and then get the prototype object out of it using prototype and 
set things on it */



