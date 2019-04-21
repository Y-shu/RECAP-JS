/*Prototype is a concept in javascript which lets 
you built an object using a template or a blueprint */

//NOTE:Javascript don't have a concept of classes instead it have PROTOTYPE

//Javascript objects don't own methods .They just have properties and
//any property can be a function.

function Bicycle(cadence,speed,gear,tirepressure){
    this.cadence=cadence;//primitive type
    this.speed=speed;//primitive type
    this.gear=gear;//primitive type
    this.tirepressure=tirepressure;//primitive type
    //non primitive(function) each and every time this Bicycle function gets 
    //called this inflateTires function get invoked and it turned
    //to be an funnction object and attachs reference
    //of this function get attached to inflateTire
    this.inflateTires= function(){
        this.tirepressure +=3;
    }
    }
//every time this inline function get called essentially a new function gets 
//created every time this bicycle function gets called creates a new copy of this  
    var bicycle1=new Bicycle(50,20,4,25);


/*NOTE:Objects with Classes ,class is a blueprint that has all inside it when we create
an object based on the class the object own those methods so object knows what those
methods are because it is associated the class...

Coming to constructor function each object gets a copy 

There is no concept of classes in javascript but we have class keyword in
the newer version of javascript ES6 that stimulates class like behaviour*/