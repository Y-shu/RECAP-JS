//creating an object in javascript has 3 ways out of which 
//function constructor way of creating an object is popular one

//Normal way of creating an object
var john={
    name:"john",
    yearOfBirth:1992,
    job:"teacher"
}
console.log( john.name );
console.log( john.yearOfBirth );
console.log( john.job );



//function constructor
var Person = function(name,yearOfBirth,job){
    //this keyword is also an object
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;

}
//instantiating -- creating an instance for Person 
var john = new Person('john',1992,"teacher");
console.log(john); 
/*
1.what new operator does?--
using new operatoe a brand new empty object is created then it calls already 
written function constructor using parameters/arguments in this case it calls person
function constructor using args like john,1992,teacher here calling this function 
creates a new execution context 

2.here 'this' key word points to?
we know in a regular call 'this' keyword points to global object
but here 'new' helps 'this' keyword points to empty object created by 'new' keyword.

3.the new empty object which was created has the properties that we defined in parent 
object all of them are simply assigned to newly created empty variable in this
case it is john.
*/