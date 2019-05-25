/**
 * Using a variable that is not declared for a read operation it gives an error 
 * but when we are using an undeclared variable for a write operation it acutally
 * creates a variable in the global scope 
 * And told global scopes are bad and unfortunatly javascript as such is doing
 * this automatically ... if we dislike this behaviour of javascript 
 * STRICT MODE:
 * when we run a javascript engine we have mode in which we run it and normal mode
 * which we are seeing so far the other is whats called as strict mode
 * This mode is introduced in ECMASCRIPT5
 * If we want our scripts to work in strict mode then there certain things that 
 * javascript does that makes it a bit stricter
 * syntax: "use strict";
 * example when we tried to initilize(write) a value to an undeclared variable
 * javascript with strict mode will through an reference error
 */
var myName;

myname="yashu"; //yashu

/**
 * "use strict";
 * var myName;
 * myname="yashu";
 * this code throughs a reference error.....
 */

//  we can use certain function in strict mode let say we are using library  
// dont work in strict mode use only for our code 

function myf(){
    "use strict";   
    var myName;
    myname="yashu";
}
// apart from this function other code will be normal 