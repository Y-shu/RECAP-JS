function foo(){};
console.log(foo);//function
console.log(foo.prototype);//constructor function
var fooObj = new foo();
console.log(fooObj);//fooObj now contains __proto__ which is
//gonna points to object

foo.prototype.test="Hey Buddy!";//adding a test property to prototype
console.log(foo.prototype.test);//Hey Buddy

console.log(fooObj.__proto__.test);//Hey Buddy

//so they proved those two objects are same 

console.log(foo.prototype.test===fooObj.__proto__.test);//true

//---WHEN WE ARE REFERING ANY PROPERTY ON ANY OBJECT---
//Javascript engine does some activities:
//1.if we have any property on the object it gives
foo.hello="hello foo!";
console.log(foo.hello);//hello foo!
//If object says no to any property then js engine searches(LOOKUP)
//in its prototype object(__proto__) and checks there for its existence

//FINALLY Y DO WE NEED THIS???
//there could be multiple objects which can be created from function
//and called as constructor then all objects share the same prototype
//so as every object share the same prototype so we will add what every
//property we want here in prototype which is shared by every object related
//to that function.

function Employee(name){
    this.name=name;
}
var emp1=new Employee("Jim");
console.log(emp1);
var emp2=new Employee("Emi");
console.log(emp2);

//we want a property to be in all objects
//only one copy of data in prototype object
//which can be used my many objects created out of one function..
Employee.prototype.playPranks = function (){
console.log("Hey Its Just Prank!");
}
console.log(Employee.prototype.playPranks());

console.log(emp1.playPranks());
console.log(emp2.playPranks());

//after this what ever object we create it also holds
//this prototype property...
var emp3=new Employee("Yashu");

console.log(emp3.playPranks());
//we can add these properties to the prototype property at run time










