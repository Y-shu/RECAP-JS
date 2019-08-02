//each variable holds its own copy of data it won't refere to anything...
// non-primitives are mutable(which can be changed and holds the differences) and primitives
// are immutable
// primitives-string,number,boolean,null,undefined,symbol

// non-primitives-object and arrays
var a = "Yashu";
var b = a;
document.writeln(a);//Yashu
document.writeln(b);//Yashu
a="Pinky";
document.writeln(a);//Pinky
document.writeln(b);//Yashu

//In case of Non-Primitives--Objects don't have any copy of data 
//just we create new reference which points to same object.......
var x={
    name:"smily",
    age:26
};
console.log(x.name);//smily
var y = x; // created new reference to same object
console.log(y.name);//smily
y.name="Kittu";
console.log(y.name);//kittu
console.log(x.name);//kittu


//NOTE:In functions also same thing applies..
var w=4;
var obj={
    oname:"disney",
    age:12
};
//function declaration 
function change(v1,v2){
    v1=25;
    w=6;
    obj.age=65;
    console.log(w);//6
    console.log(v1);//25
    console.log(v2.age);//65
    console.log(obj.age);//65

}
change(w,obj);
console.log(w);//6
console.log(obj.age);//65


//typeof returns the typeof an unevaluated operand
console.log(typeof true); //Boolean

console.log(typeof Boolean(true)); //Boolean

console.log(typeof new Boolean(true)); //Object

//valueOf() method returns the primitive value of that particular object

console.log(typeof new Boolean(true).valueOf());//Boolean

console.log(typeof "abc"); //string

console.log(typeof String("abc")); // string

console.log(typeof new String("abc")); //object

console.log(typeof new String("abc").valueOf()); //string

console.log(typeof 123); // number

console.log(typeof Number(123));//number

console.log(typeof new Number(123));//object

console.log(typeof new Number(123).valueOf());//number








