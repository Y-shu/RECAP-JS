//object vs primitives
//objects they are stored and copied by a reference
// A variable stores not the object itself, but its 
// “address in memory”, in other words “a reference” to it.
//object which holds a memory
var user={
    name:"Kittu"
    }
    //here admin is holding the reference to object user
    var admin=user;
    console.log(admin); // prints object user

    admin.name="Hari";
    console.log(admin);
    
//------------------------------------------------------------------
//Comparison operator
// Two objects are equal only if they are the same object.
var a ={
    say:"Hello World!",
} 
var b = a;

console.log(a==b);//true
console.log(b===a); // true
// The equality == and strict equality === operators for objects 
// work exactly the same.

// --------------------------------------------------------------------

// CONSTANT 
// An object declared as const cannot be changed.
const User1={
    name:"Gopi"
};
User1.age=26;
User1.name="yashu";
console.log("my name is :"+User1.name);

// we can add something with is already exisiting object but we cannot rewrite it when declared constant
// const v=30;
// const v=40;
// console.log(v);// redeclaration and re initilization is not possible 

//with "var" we can redeclare
var x={
    name:"ammu"
};
console.log(x);//ammu
var x={
    name:"Krish"
}
console.log(x);//Krish

// with "let" we cannot redeclare
let w={
    name:"kiran"
}
console.log(w);//kiran
let s={
    name:"nimrah"
}
console.log(s);// error






    