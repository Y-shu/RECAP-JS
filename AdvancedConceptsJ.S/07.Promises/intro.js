/*
*Promises are ES6 features
 * Promises handle asyncronous operation in javascript
 *can handle multiple asyncronous operations where as CALLBACK
  CAN CREATE CALLBACKHELL
 *Prior to promises events and callback functionality are there but
  they lead to unmanageable code
 *Multiple callbacks can create callback hell
 *events are not good at handling asyncronous functionality...
 *Promises can provide better error handling than callbacks and events
 *Promises has four stages:
    fulfilled
    rejected
    pending
    settled
*Promise can be created using promise constructor
var promise = new Promise(function(resolve,reject){
    //do something
});
*Promise constructor takes only one argument , a callback function
*callback function takes two arguments,resolve and reject
*Perform operations inside the callback function and if everything 
 went well then call resolve. 
*If desired operations do not go well then call reject.*/

var promise=new Promise(function(resolve,reject){
    const x="Hey I am x!";
    const y="Hey I am x!"
    if(x==y){
        resolve();
    }else{
        reject();
    }

})

promise.then(function(success){
    // handles success
console.log("Successful!");

}).catch(function(error){
    // handles success
console.log("Failed!");

})
/*
*Promises can be consumed by registering functions using .then and .catch methods.
*then()
then() is invoked when a promise is either resolved or rejected.
*if promise is rejected and an error is received. 
(It is optional and there is a better way to hanlde error using .catch() method */

/*
*Applications
Promises are used for asynchronous handling of events.
Promises are used to handle asynchronous http requests. */