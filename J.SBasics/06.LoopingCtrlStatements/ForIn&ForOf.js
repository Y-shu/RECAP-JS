const array = ['a','b','c','d'];
for(let i=0;i<array.length;i++)
{
    document.write("<h3>"+array[i]+"</h3>");
}

//for in works for objects 
const obj={
    a:1,
    b:2,
    c:3,
    d:4
}
for (const key in obj){
    document.write("<h3>"+obj[key]+"</h3>");
}//1,2,3,4

var student={
    sname:"Karthik",
    sage:25
}
for (const key in student){
    document.write("<h4>"+student[key]+"</h4>");//this prints
    //values:Karthik and 25
}
//for of doesn't work with objects coz they are not iteratable
//it works for arrays and strings
const array1=['a','b','c','d'];
for (const y of array1){
 //a
 //b
 //c
 //d   
document.write("<h3>"+y+"</h3>");//prints single value in array

//array of elements runs for 4 times
document.write("<h3>"+array1+"</h3>");// prints all values in each iterartion
}

var myarray=['Ram','seetha','eswar','parvathi'];
for (const x of myarray){
    document.write("<h2>"+x+"</h2>");//Ram/seetha/neswar/nparvathi
    document.write("<h2>"+x[0]+"</h2>");//prints every 0th 
    //value of each string
    //R/ns/ne/np
}


/**
 * forEach-is only Arrays
 * forIn-is only Objects
 * forOf is ESC6 which is flexiable enough to use anywhere we want... */ 