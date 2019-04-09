//Two types of scopes- Global and Local depending on 
//where we created the variable

//scope means life of variable


var a="Hello!"; //global variable
document.write("<h3>"+a+"</h3>");

function happy(){
    var b="Hey Good Morning!"; //local variable
    document.write("<h3>"+b+"</h3>");
}
happy();//function call

//life of local variables are vanised once its execution is done

//life of global variables stays as long as programming is running

//--------------------------------------------------------------------------------
var x="Lenovo";
function lappy(){
    var y="Asus";
    document.write("<h3>"+y+"</h3>");
    //global variables can be accessed inside the function
    document.write("<h3>"+x+"</h3>");
}
lappy();
document.write("<h3>"+y+"</h3>");//prints nothing
//as local variables cannot be accessed outside the function


