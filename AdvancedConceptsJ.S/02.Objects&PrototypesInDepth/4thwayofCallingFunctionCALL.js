//call method??
/*Call function lets you call another function
call property takes an argument which could be an object
what js interpreter do it calls the function and when it gets
executed the function it binds the this reference on the function to
the object it is passed as an argument to call function*/

//in this four way of function execution we have a choice
//of point our this value to what ever object (argument in call method),
//basically object of our choice

//in the previous way of function executions we don't 
//have a choice of changing the this context unlike in fourth
//method

function Dept(name,fname,classes){
    this.name=name;
    this.fname=fname;
    this.classes=classes;
    this.student=function(){
        this.name="Sunitha";
    }

}
var fac1=new Dept("CSE","SatyaNarayana",10);
console.log(fac1);
fac1.student();

function Faculty(name){
    this.name=name;
}

var coll=new Faculty("Shanthi");

