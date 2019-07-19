var day = 0;
//number,string,expression
switch(day){
    case 0:
       document.write("<h3>" +day+ " is sunday</h3>");
       break;//break statement helps us to get out of switch case
    case 1:
    document.write("<h3"+day+ " is Monday </h3> ");
    break;
    case 2:
    document.write("<h3"+day+ " is Tuesday </h3> ");
    break;
    case 3:
    document.write("<h3>"+day+" is Wednesday</h3>");
    break;
    case 4:
    document.write("<h3>"+day+ " is Thursday</h3>");
    break;
    case 5:
    document.write("<h3>"+day+ " is Friday</h3>");
    break;
    case 6:
    document.write("<h3>"+day+ " is Saturday</h3>");
    break;
    default:
    document.write("<h3>Wrong Input</h3>");
}

var day1="Monday";
switch(day1){
    case "Sunday":
    document.write("<h3>Its Sunday</h3>");
    break;
    case "Monday":
    document.write("<h3>Its Monday!</h3>");
    break;
    default:
    document.write("<h3>You entered a wrong input!");
    

}

var day2 = "Yarlagadda";
switch(day2 + " Yashu")
{
    case "Yarlagadda Yashu":
    document.write("<h3>Yeah! Its my name...</h3>");
    break;
    default:
    document.write("<h3>Name you entered is wrong!</h3>")
}

// The break and the continue statements are the only JavaScript statements 
// that can "jump out of" a code block. ... The continue statement 
// (with or without a label reference) can only be used to skip one loop iteration. 

var color="blue";
switch(color){
    case "black":
            document.write("<h3>Yeah! Its black</h3>");
            break;
    case "blue":
            document.write("<h3>Yeah! Its blue</h3>");
            break;
    case "red":
            document.write("<h3>Yeah! Its red</h3>");
            break;
    default:
        document.write("<h1>Sorry its not a valid option!</h1>")
        
}

var test ="";
var i ;
for (i=0;i<10;i++){
    if(i==3){continue;}
    test +="The number is "+i+"<br>";
}
document.getElementById("demo").innerHTML=test;
