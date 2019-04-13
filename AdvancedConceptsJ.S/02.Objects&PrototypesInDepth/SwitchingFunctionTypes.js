function createBicycle(price,color,type){
    var newBicycle={};//an empty object
    newBicycle.price=price;
    newBicycle.color=color;
    newBicycle.type=type;
    return newBicycle; //return object
}
//Calling a regular function in constructor mode using the new keyword still works!
var bicycle = new createBicycle(20000,"Blue","Disk-Break");
console.log(bicycle);//prints an object

//without 'new' keyword javascript interpret the 
//below function as a regular function...
//without 'new' keyword 'this' referes to
//global object

function DepartmentalStore(name,item,price){
    this.name=name;
    this.item=item;
    this.price;
    //if we are not returning any function
    //explicitly the function by default returns
    //value undefined
}
var dept=DepartmentalStore('VijayaLakshmi','groceries',5000);
console.log(dept);//undefined

/*Calling a constructor function without new keyword
doesn't work! No new object gets created , and the 
return value is undefined */




