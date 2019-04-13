//Creating a object using function constructor //without new keyword
function createEmployeeObject(firstName,lastName,gender){
    var newObject={}; //empty object
    newObject.firstName=firstName;
    newObject.lastName=lastName;
    newObject.gender=gender;
    return newObject;//returing the object

}
var John=createEmployeeObject("john","Smith","Male");
var Sunny=createEmployeeObject("Sunny","Yarlagadda","Male");
console.log(John);
console.log(Sunny);
//by adding a new keyword the above function turns
//into constructor function--while using new keyword
//we can skip writting empty object and return statement...
//new keyword just tells java script that the function
//which followed by me is a constructor and that is used to create
//an object...this keyword is used to do this 
//this here refers to an empty object and takes care of returning object at
//the end
function EmpObject(fname,lname,gen){
    this.fname=fname;//populating object
    this.lname=lname;//populating object
    this.gen=gen;//population object
}
var yashu= new EmpObject("yashu","yarlagadda","female");
console.log(yashu);

//constructor mode in javascript is just happens
//to be in way we call a function 

//basically constructors use camel case naming convention
