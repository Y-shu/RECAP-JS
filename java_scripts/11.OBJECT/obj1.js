//object 
var user = {
    name:"Yashu",
    age:26,
    hobby:"reading books"
}
console.log(user); //prints user object
console.log(user.name); // Yashu

//adding a property to user object
user.father="Hema Sundar";

console.log(user);//prints object along with user.father

//deleting property from user
delete user.age;

console.log(user); //prints user except user.age as it is deleted

//multi worded property
var user1={
    // multi worded property are to be kept with in double quotes....
    "say hello":"Hey Hello Kittu!"
}
console.log(user1);
//accessing multi worded property 
console.log(user1["say hello"]); 
//setting...
user1["wish them"]="Happy Weekend!";
//getting..
console.log(user1["wish them"]);
console.log(user1);







