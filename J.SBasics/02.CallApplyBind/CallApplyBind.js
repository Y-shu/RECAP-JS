
//Inorder to get data members and member funtions from one function another function or
//one obj to another obj we use call () , apply () and bind ()
//this process chaning is called "this context change"
//as we are changing from window object to object of particular function.....



//Object
var person={
    firstName:"yashu",
    lastName:"yarlagadda",
    getFullDetails:function(){
        document.write("<h3>"+this.firstName+ " "+this.lastName+"</h3>" ); 
        // this refers to this particular object
    }
}
person.getFullDetails(); //function call

//object
var data={
    name:"Mahadev",
    
};

//anonymous function and stand alone function
var functionName=function(){
    document.write("<h3>"+this.firstName+ " "+this.lastName+"</h3>" ); //undefined
    document.write("<h3>"+this.name+"</h3>"); //Mahadev on call of data object
    //according to ecmscript "this" keyword for stand alone functions represnts to window object
    

}
functionName(); //function call
functionName.call(person); // call method
functionName.call(data); //calling data object

//Call-Syntax

//NameOfCallingFunction.call (objectName/FunctionName,function arguments) syntax
var functionName1=function(arg1,arg2)
{
    document.write("<h3>"+this.firstName+ " "+this.lastName + " "+ arg1 + " "+ arg2+"</h3>");
}
functionName1.call(person,"hello","hai");

//---------------------------------------------------------------------------------
// apply(object,[,,,])
// or
// apply(object,arrayName)

var functionName2=function(arg3,arg4,arg9){
    document.write("<h2>"+this.firstName+ " "+this.lastName + " "+ arg3 + " "+ arg4+" "+arg9+"</h2>");
}
functionName2.apply(person,["Good","Morning"]);

var smily=["Hey","Rowdy","Fellow"];
functionName2.apply(person,smily);

// ----------------------------------------------------------------------------------
// bind()-- binding of function and object together and sends function declration as argument

var functionName3=function(arg5,arg6){
    document.write(this.firstName+ " "+this.lastName+" "+arg5+" "+arg6 );

}
console.log(functionName3.bind(person));
var result = functionName3.bind(person);
result("Kittu","ilu");

//when to use bind?
// resuablity 


