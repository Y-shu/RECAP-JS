var Person= function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
  
}
//this helps in reducing memory
Person.prototype.calculateAge=function(){
    console.log(2019-this.yearOfBirth);
    
}
Person.prototype.lastName='Smith';
var john = new Person('john',1991,'teacher');
var sunny = new Person('Sunny',1988,'BusinessMan');
var deepu = new Person('Deepu',1992,'Designer');
john.calculateAge();
sunny.calculateAge();
deepu.calculateAge();

console.log(john.lastName);//smith
console.log(sunny.lastName);//smith
console.log(deepu.lastName);//smith

console.log(john.hasOwnProperty('job')); // hasOwnProperty helps check for property in object
console.log(john instanceof Person );// checking weather it an instanceOf parent object









