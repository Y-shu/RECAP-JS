// WHAT HAPPENS WHEN IT DOESN'T FIND IT IN THE GLOBAL SCOPE?

/*
1.Function create scopes
2.All the variables that we are declared with "var" keyword
3.When the variables are properly declared and then they are used
no issues if problem arises when they are not properly declared */

var a = 10;
function myFun(){
    var b = a;
    console.log(b);
    // variable haven't declared
    console.log(c);
    
    
}
myFun();
//above function compilation phase
/*
1.a global scope
2.myFun global scope
   Function scope:myFun()
       1.b*/ 

// now interpreter runs
/*
1.it looks in global scope for variable called 'a' and assign 10
2.Executing function call myFun(); again it looks at global scope..there
will be a variable called myFun which is a function 
3.again we are in line four var b =a ;so it looks in myFun scope to get b 
and checks for scope of a in function scope but it will not find
so it goes to one level up goes to global scope now it will assign value 10 to b
4.with help of function scope gets the value of b and consoles it 
5.now its gona come to console.log(c) ; it checks for c in function scope it
will not find then it checks in global scope no it will not be found...now what 
the interpreter does is as it is a read operation and not able to find and doesn't 
know what to read from it is going to through an error 
6.instead of read operation if we have write operation c =100; actually we are
assigning value to c..now interpreter says myFun do you have variable with c myfun says
no and checks with the global scope then it says no ....but...since its a write 
operation it doesn't give an error as it don't have to read from it so if the variable
doesn't exsist let me actually create one (so interpreter assumes need for this variable)
here QUESTION IS WHICH SCOPE DOES IT GETS CREATED??THESE VARIABLES GETS CREATED IN THE 
GLOBAL SCOPE

Say suppose we have var before c=100; then as there is no var compiler phase 
just ignores it , interpreter checks all the way till global scope

As we dicussed global variables are bad  but javascript has a very bad habbit of 
creating undeclared variables in global scope 

MORAL OF THE STORY: ALWAYS USE VAR...*/ 