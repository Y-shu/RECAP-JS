//J.s is object oriented does support inheritance,classes,objects,encapsulation..etc but implemented in a 
//different way 


//Object helps us to bundle all datamemebers and memeber functions together
//bike object
var bike={
   //bike properties
    bike_name:"Access125",
    bike_company:"Suzuki",
    bike_color:"blue",
    //when we create a function inside an object it is called as an Method
   //same for class
   //display method
    display:function(){
       document.write("<h3>"+bike.bike_name+""+bike.bike_company+""+bike.bike_color+"</h3>");
    }
    
}
//calling method of object bike
bike.display();

//------------------------------------------------------
//Another way of writing objects is to create object constructors
//this constructor template helps us create multiple object from
//this function constructor or constructor function

//syntax

// function functionName(placeholder or arguments){
//    this.variable=PropertyValue;
// }\
//creating objects using constructor functions
// var variableNAme=new functionName(values supposed to be passed);
// variableNAme.MethodNAme();
//we can create any number of objects from already created constructor function

function Cars(Car_name,Car_Company,Car_price){
   this.x=Car_name;
   this.y=Car_Company;
   this.z=Car_price;
   this.dis=function(){
      document.write("<h3>Good Morning!</h3>");
      document.write("<h3>"+this.x+"</h3>");
      document.write("<h3>"+this.y+"</h3>");
      document.write("<h3>"+this.z+"</h3>");
 }
}
var car=new Cars("Baleno","Suzuki",900000);
car.dis();
//we can create any number of variables using the created
//function constructor

var car1=new Cars("MarutiSuzuki125","Suzuki",600000);
car1.dis();




