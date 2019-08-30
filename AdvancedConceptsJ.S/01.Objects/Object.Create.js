/*------Another way of creating Objects is to use Object.Create------
1.difference between object.create and function constructor ??
  object.create builds an object that inherits directly from the one 
  that we passed into first argument.while on the other hand function
  constructor the newly created object inherits from the constructor's 
  prototype property 
//**OBJECT.CREATE REALLY HELPS US TO CREATE COMPLEX INHERITANCE STRUCTURE IN AN 
//EASIER WAY THAN FUNCTION CONSTRUCTOR
*/
//create a prototype
var personProto = {
    calculateAge:function(){
     console.log(2016-this.yearOfBirth);
    }
};
var john = Object.create(personProto);
console.log(john);//we are creating a john object
john.name='john';
john.yearOfBirth=1992;
john.job='teacher';
john.calculateAge();

var sunny=Object.create(personProto,{
    name:{value:'sunny'},
    yearOfBirth:{value:1988},
    job:{value:'designer'},
    
    });
    sunny.calculateAge();

