//Arrays comes under Composite/complex datatypes 
//they are a type of objects..

//arrays are dynamic in nature..
//Arrays have indexing 

var myLappy=["Asus","Lenovo","Dell","Hp","Mac"]; //array
for(i=0;i<5;i++){
    document.write("<h3>"+myLappy[i]+"</h3>"); // looping array elements
}
document.write("<h3>"+myLappy[4]+"</h3>");//prints 4th element in array...

//array methods

//arrays to string--toString()
var bikes=['Access125','Activa3g','Activa5g','Vespa'];
document.write("<h3>"+bikes.toString()+"</h3>");
document.write("<h3>"+bikes+"</h3>");
document.write("<h3>"+bikes.join("/")+"</h3>"); // works same as toString()
document.write("<h3>"+bikes.join("*")+"</h3>"); // works same as toString()

var myNumList=[123,678,980];
document.write("<h3>"+myNumList.toString()+"</h3>");



//Popping
document.write(bikes.pop());   //removes last element
document.write("<h3>"+bikes+"</h3>");
//pop method returns the value that was popped out


//pusing
bikes.push("LML");
document.write(bikes);
//Push method returns the new array length...

//Shifiting 
//is equivalent to popping, working on the first element instead of the last
bikes.shift();
document.write("<h3>"+bikes+"</h3>");

//unshift pushs an element to the first position...
bikes.unshift("Intruder");
document.write("<h3>"+bikes+"</h3>");

//Splicing --method add new items to an array....
//arrayName.splice(postion element to be added,no.of elements to be removed,elements to be removed,elements to be added)
bikes.splice(2,0,"Avenger","Royal Enfield");
document.write("<h3>"+bikes+"</h3>");

//merging --concat() method create a new array by merging
var cars = ["Jagquar","Audi","Camray","Baleno"];
var Automotives = bikes.concat(cars);
document.write("<h3>"+Automotives+"</h3>");

//Slicing--slice out a piece of an array into a new array
var Auto=Automotives.slice(1);
document.write("<h3>"+Auto+"</h3>");//Slice method creates a new array
//It does not remove any element from the source array...
//Slice method can take two arguments...Slice(start argument,end argument);




















