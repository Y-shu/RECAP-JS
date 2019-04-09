//either of patterns can be used immediately
//here we are using function's execution context to create "Privacy"
(function (){
    document.write("<h3>Hey!Hello...</h3>");
})();
//OR
(function(){
    document.write("<h3>Hey!GoodMorning</h3>");

}
());


var i = function(){
    return document.write("<h3>Hello</h3>");
    
}
();



true&&function(){
document.write("<h3>283</h3>")
}();

0,function(){
    document.write("<h3>Good Day Buddy!</h3>")
}
();

  // If you don't care about the return value, or the possibility of making
  // your code slightly harder to read, you can save a byte by just prefixing
  // the function with a unary operator.

  !function(){
    document.write("<h3>Monday!</h3>")
 
  }();

  ~function(){
    document.write("<h3>Tuesday!</h3>")

  }();

  -function(){
      document.write("<h3>Wednessday!</h3>")
  }();

  +function(){
    document.write("<h3>Thursday!</h3>")
  }();

  new function(){
    document.write("<h3> Buddy!</h3>")

  }

  new function(arg)
  {
    document.write("<h3>Good Bublli!"+arg+"</h3>")

  }("Proud Of You!");