document.write("<h1>If..else control statements</h1>");
var x = 7;
//finding whether a given number is even or odd
if(x%2==0) //modulues gives us remainder and anything divided by 2 gives 0 when it is even
{
document.write("<h3>" + x + " is even number</h3>");
}
else{
document.write("<h3>" + x + " is odd number</h3>");

}

//finding whether a number is positive or negative or 0
var y = 8
if(y>0){
    document.write("<h3>"+ y + " is positive value");
}else if(y<0){
    document.write("<h3>" + y +" is negative number");
}else{
    document.write("<h3>" + y +" number is neither positive or negative");
}

//finding a number is positive and even 

var z = 11 ;
if(z>0){
    document.write("<h3>"+ z + " is positive value");
    if(z%2==0){
    document.write("<h3>" + z + " is even number</h3>");

    }
    else{
        document.write("<h3>"+z+"is neither positive but odd</h3>")
    }

}else{
    document.write("<h3>"+z+ " is a negative number</h3>");
}

//or use logical operator like && 
var p=9;
if(p>0 && p%2==0){
    document.write("<h3>" +p+ " is a positive number and it is even");
}else{
    document.write("<h3>" +p+ " didn't satisfied the condition!");
}
// using logical operator like !NOT
var l=true;
if(!l==true){
    document.write("<h1>"+l+"</h1>");
}else{
    document.write("<h1>eee!</h1>");
}
// using logical operator like || OR
var my_color="blue";
var ur_color="black";
if(my_color=="pinky"||ur_color=="red"){
    document.write("<h1>"+my_color+"</h1>");
}else{
    document.write("<h1>"+ur_color+"</h1>");
}
// conditional operator

// variable name = (condition)?"value1":"value2"
var he_is =("age"<18)? "he is a minor":"he is a major"
document.write("<h1>"+he_is+"</h1>");

var yashu = ("age">25 && "yashu.length"==5)?"true":"false"
document.write("<h1>"+yashu+"</h1>");
document.write("<h1>"+yashu.length+"</h1>");