/*
1.Numbers,String,Boolean,undefined and null are primitives rest of all are
objects
2.variables containing primitive holds data inside of variable itself
and variable associated with objects dont actually contain object but instead they
contain reference(memory where objects sits) 
means variable declared as object dont hold a copy of object but refernece which
points to that object  */

//variables holds their own data they dont hold any reference
var a = 24;
var b=a;
a= 46;
console.log(a);//46
console.log(b);//24

var obj1={
    name:'yashu',
    age:26
}
//we created a new reference which points to first object

var obj2=obj1;//we didnt acutally create a new object 
obj1.age=27;
console.log(obj1.age);//27
console.log(obj2.age);//27

//function
//when passing an primitive and object to a function
var age=12;
var obj={
    name:'honey',
    city:'perth'
};
function change(a,b) {
    a=15;
    b.city='Sedney';
}
change(age,obj);
console.log(age);//12
console.log(obj.city);//sedney




