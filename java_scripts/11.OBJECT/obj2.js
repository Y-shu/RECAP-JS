var fruit="apple";
var bag={
    //computed properties
    [fruit]:"oranges"
}
console.log(bag);// 'apple':'oranges'

var user="ram";
var userDetails={
    //computed properties
    [user]:"Yashu",
}
console.log(userDetails);// 'ram':'Yashu'

// ----------------------------------------------------------------------------------------------------
function User(name, age){
    return{
        name:name,
        age:age,
    };
}
let  usr = User();
usr.name="yashu";
usr.age=26
console.log(usr);
// -----------------------------------------------------------------------------------------------------
// accessing a non-exsisting property just returns undefined
var stud={
    name:"sam",
    age:22,
    dept:"CSE"

}
console.log(stud);
console.log(stud.course); //undefined
//having a special operator called "in" to check the key in object
console.log("age" in stud); // true
console.log("course" in stud);//false
// -----------------------------------------------------------------------
var Student={
    name:"Karthikeya",
    age:26,
    dept:"CSE",
}
for(age in Student){
    console.log(Student.name);
}
// ------------------------------------------------------------------------
var codes ={
    "12":"apple",
    "9":"orange",
    "67":"pineapple",
}
// codes[+87]="Custurd Apple";
// console.log(codes);
for(code in codes){
    // console.log(codes) //Ordered list of keys
    console.log(code);
    

    //non-intergeral properties are listed  in the creation order
}



