//operators are just symbols they are just helpful to assign,compare and perform arithmetic operations
//variables are operands
//operations is defined by operators 

//addition - arithematic operator
var a = 1; // right to left associativity when using = sign
var b = 7;
var c = 2;
var result = c+a+"Yashu"+a+b; // left to right associativity when using + sign
document.write("<h1>Result:"+result+"</h1>")
// console.log(result);

//operator precedence

var result2 = a+b*c; // 15 BODMAS
document.write("<h1>Result:"+result2+"</h1>")

