/*Global Variables are bad-->coz in browser environment everything we load executes
in a single space---a page links to different js files,each of these js files could
contain aode which written by completely different librarys,it could be..etc
all those scripts executes in a common space in the page(browser)--If one of those
scripts uses a global variable that means it can be avaliable for any of the scripts
to access or even worst modified

OR

Simply dont want to pollute the global name space....*/

//Solution to the above is IIFE---Immediately Invoked Functions

(function(){
    var a = 10;
    var b = 10;
    console.log(a+b);
})();
//function expression followed by immediately invoked function...

//By doing this we dont get clash near global name space and also it works as wrapper
//and works like self invoking function...