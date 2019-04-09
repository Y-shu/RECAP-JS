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