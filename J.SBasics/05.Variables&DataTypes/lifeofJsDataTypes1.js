//If primitives have no properties, why does "abc".length return a value?

// let x = function () {
//     return this; 
// }
// x();
// console.log(this); // prints a window object

//Javascript will readily coerce between primitives and objects
/* WRAPPER OBJECTS: whenever you try to access a property of a 
string str, JavaScript coerces the string value to an object, 
by new String(str). This object is called a wrapper object. 
It inherits all string methods, and is used to resolve the 
property reference. Once the property has been resolved, 
the wrapper object is discarded.*/


String.prototype.returnMe=function(){
    return this;
}
//The string object is only used for a fraction of 
//second after which it is sacrificed to the Gods of garbage collection 

var a = "abc";
var b= a.returnMe();

console.log(a); //abc
console.log(typeof a); // string (still a primitive)
console.log(b); //abc
console.log(typeof b);//object

