//first way of creating a function
function firstWay(){
    console.log("It's First Way of Writting a function");
    
}
firstWay();//calling function

//second way in executing functions in javascript using object
var obj = {};
obj.secWay=function(){
    console.log("Second Way of writing a Function using object!");
}
obj.secWay();

//Third way of executing function in Js using constructor
function ThirdWay(){
    console.log("Third Way of writing a Function using Constructor!");
}
var thirdway=new ThirdWay();

function Way(message,name){
    this.message=message;
    this.name=name;
}
var conway=new Way("Greetings for the day!","yashu");
console.log(conway.message);
console.log(conway.name);

//Fourth is based on execution context
/*Execution Context--When function gets called 
it will be called in a particular context
1.One of the variable is 'this' of execution context
2.There are two different arguments to every function call:arguments and this..
3.this variable always points to something..and depends on what type of function
call we are using..
4.If we identify the type of function call we are using we 
can predict the value of this keyword
*/

//method #1
//Calling standalone functions directly 'this' reference 
// the global object --window
function Message(){
    console.log("here the value of this keyword is global!");
    console.log(this);//prints window object
    
}
Message();//here the value of this keyword is global
//if we are running in a browser global object is window

//method #2
//Calling functions as property of an object reference 
//this reference to that particulare object refrence 
var emptyObject={"oneMoreProperty":"adding one more property to check"};
emptyObject.someProperty=function(){
    console.log(this);
    console.log("Here this refer to that particular object!");
}
emptyObject.someProperty();

//method #3
//Calling standalone function using 'new' keyword 
//this references to newly created object

function ConFun(){
    console.log("Calling using function constructor!");
    console.log(this);//ConFun 

}
var confun=new ConFun();


//method #4
function Smily(name,age){
    this.name=name;
    this.age=age;
    this.message=function(){
       this.age +=2;
    }
}
//there two different functions here which are beinging called
//in different ways one is being called as constructor function 
//another is being called as property of an object..
var fun = new Smily("yashu",26);
console.log(fun);

var dimple=new Smily("Sunny",30);
dimple.message(dimple);
console.log(dimple);

//each function will have its own value of this
//even then it is inside another function..

/*Looking at code above there is one top
level function which is what the constructor 
called as constructor mode and having an inner
function and not being called in constructor 
mode --so here it is clearly possible this value  
can be different and actually are! the this reference
of constructor function is and is called in constructor
mode where as the this reference of the inner function 
above is what the object is on whose property it is being 
called! */