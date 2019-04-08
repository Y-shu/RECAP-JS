var Person= function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge=function(){
        console.log(2019-this.yearOfBirth);
        
    }
}
var john = new Person('john',1992,'teacher');
john.calculateAge();

var sunny = new Person('Sunny',1988,'BusinessMan');
sunny.calculateAge();

var deepu = new Person('Deepu',1992,'Designer');
deepu.calculateAge();

console.log(sunny);
console.log(john);

