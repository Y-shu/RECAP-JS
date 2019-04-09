//functions are fundamental buliding blocks of javascript


//a block of code which is being given a particular name---so that we 
//can reuse that particular block of code
function smily(){
    document.write("<h3>Hey! Buddy Good Morning...</h3>")
}
//A javascript function is executed when something invokes it
smily();//invoking the function

//named function
function add(a,b){
    document.write("<h3>"+(a+b)+"</h3>");
}
add(2,3);

//anonymous function--unnamed functions
//also called as function expression 
var myfun= function (){
document.write("<h3>Have a Nice Day!</h3>")
}
myfun();
document.write("<h2>"+myfun+"</h2>");//function body

//arrow functions....
var lucky=()=>{
    document.write("<h3>Happy Weekend!</h3>");
}
lucky();


