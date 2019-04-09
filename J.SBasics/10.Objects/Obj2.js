//Normal Object writing
var Food={
    food_name:"Idly",
    food_type:"Indian",
    food_price:50,
    menu : function(){
      document.write("<h3>Menu</h3>");
      document.write("<h3>"+Food.food_name+"</h3>");
      document.write("<h3>"+Food.food_type+"</h3>");
      document.write("<h3>"+Food.food_price+"</h3>");

    }

}
Food.menu();
//we can add on more property
Food.food_Area="Andhra";
document.write(Food.food_Area);//Prints andhra

//we can add methods

Food.newfood=function(){
    document.write("<h3>Hello Welcome to andhra hotel!</h3>")
}

document.write(Food.newfood());

//when we are trying to delete an attribute of object
delete Food.food_price;

document.write("<h2>"+Food.food_price+"</h2>");//undefined

/*Boolean,Number and String can also be an objects
when they are defined by using new keyword

...dates are objects
...Maths are objects
...RegularExpressions are objects*/
//now this is a variable which is an object of string datatype
var str=new String();
//we have methods and properties in objects
document.write("<h3>"+typeof(str)+"</h3>");//object