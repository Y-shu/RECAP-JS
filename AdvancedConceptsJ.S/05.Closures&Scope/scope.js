//A portion of program where a particular variable is accessiable in a particular way

//Scope of a variable depends on where a particular variable is declared...

//basically two types of scopes: global scope and local scope...

var name="yashu";//global scope
function display(){
    console.log(name);//yashu
    var smily="good day";
}
display();
// console.log(smily);//smily cannot be accesed out of scope it throws
//error saying undefined...as it is a variable bounded to local variable

//NOTE:Global Scope Variables:Through out code they can be accessiable...
//Local Scope Variables:they can be accessed to certain level(Scope only)

//If we want to restrict the use of any variable we keep it under a block
//so that they cannot be accessed outside the box..

//Scope has hierarchy:
/*Code inside a scope cannot be accessed outside the scope but outside variables can
br accessed by inside scope
1.Creating a scope in javascript can be attained in many ways out of which the best
way is by keeping them in a function
2.Javascript interpreter checks inside function for the variable if not avaliable in
local scope it look up in global scope this is called as scope hierarchy.. */

var name="smily";//global scope
//can be used anywhere in the program
function allocateDepartment(){
    if(name==="smily"){
        var dept="Eng";//local scope
        //not avaliable outside the function
    }
}
allocateDepartment();
// console.log(dept);//undefined (runtime error)

//NOTE:when we are calling a function with an argument we are creating a local
//variable of local scope

var name="kittu";
function disp(name){
    console.log(name);//deepu
}
disp("deepu");





