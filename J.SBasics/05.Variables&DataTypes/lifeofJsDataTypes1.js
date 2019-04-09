//If primitives have no properties, why does "abc".length return a value?

// let x = function () {
//     return this; 
// }
// x();
// console.log(this); // prints a window object

//Javascript will readily coerce between primitives and objects

//for example for string value is coerced to a string object 

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

