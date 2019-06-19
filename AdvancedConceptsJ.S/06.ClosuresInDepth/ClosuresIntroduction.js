var a = 10;//global varaiable
function outer(){
    var b = 20;//local variable
    // function inner(){
        // When interpreter searches for 'a' it will not be find inside function scope
        // it goes a level up there it will not be find and finally into global scope
        // compilation step creates scope chain and interpreted step looks at
        // scope chain

    //     console.log(a);//10
    //     console.log(b);//20 
        
        
    // }
    //Question is a function should execute where that is function is declared?
    //Answer-no
    // Concept of javascript of first class functions is we can take a function object
    //and pass it around some where else so function could be executed in a completely
    // different context and completely different scope from where it was declared
    
    // inner();

    // ....so converting function execution of inner() function to 
    //anonumous function(function expression)

    var inner = function(){
        console.log(a);
        console.log(b);
        }
        // now instead of executing the function we are 'returning' it.
        // as we are going to use it outside the function level
        return inner;

}
// outer();
// as the above function is going to return a value means we are going to hold
// it in some other place

var innerFun = outer();
// innerFun is going to get value which inner function Object this is what execution
// of outer is going to return...

// now as innerFun is holding an function we can execute

innerFun();

/*
NOTE:
there are two variables which are supposed to get printed which is 'a' & 'b'
as a is global it gets printed (we can access a with call innerFun())
but comming to b it is a local variable which is restricted with in
a scope(b is valid only when outer executes)
as we are executing outer in line no 39 so b is having a scope we can access
b inside outer
****but after line 39 ,in line 45 there is no outer function execution its just
a declaration its not executing the function outer THEN HOW IS IT POSSIBILY
PRINT 'b' as b is in the function scope outer which doesn't exist anymore..
Y IT PRINT???--- IS JAVASCRIPT HAS THE CONCEPT OF CLOSURES */ 