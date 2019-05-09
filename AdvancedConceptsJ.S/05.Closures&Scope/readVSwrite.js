var a = 10; //basically write operation
//assigning value 10 to variable a

console.log(a); // read operation 
b=a; //reading from a and writing to be

function greet(name){//there is a write operation on varibale name
    console.log(name);//read operation 
}
greet("Yashu");

//NOTE:Declarations are required in javascript

var foo;//declarations
console.log(foo);//gives undefined

x=10;//didnt declared
console.log(x);//prints 10 without declarations

/*when we do something like console.log(foo); with out declaring basically it is 
performing read operation.so if we use a variable without decalring its okay to do
write operation but its not okay to do read operation.If we do write operation on a 
variable without being declaring it works fine but if we do a read operation on a 
variable without being declaring it gives you an error....*/



