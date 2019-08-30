/**
 * HANDLING ASYNCHRONOUS CODE!
 * 
    const getUser={
    setTimeout(() => {
       return {name:'max'}
     }, 2000);
    }
    const user = getUser();
    console.log(user.name);

 *the above code doesn't work coz getUser() function gets executed and its result gets
 used immediately.Immediate return value of function is void though.Returing something
 after two secs won't work.
 *IN REAL TIME:same would be the case for functions where you reach out to a web server,
 access the file system or do something else which isn't  finished immediately...
 *REASON:JAVACSRIPT CODE RUNS IN A NON-BLOCKING WAY...which means it won't wait for 
 async code to execute and return a value-it will execute line by lin until it is done
*/
const gettingUser_Callbacks= argTocatchReturnValue=>{
    setTimeout(() => {
        argTocatchReturnValue({name:'Serve1 is Loading...'})//passing an argument to callback function  
    }, 2000);
}
// calling above function using function as argument
// gettingUser_Callbacks(user=>{
//     console.log(user.name);//prints name after 2secs
// })
// OR 
// using named function also works
const handledUser=user=>{
    console.log(user.name);
    
}
gettingUser_Callbacks(handledUser);
console.log('This prints before Server gets loaded!');


/**
 * now we are not returning anything in gettingUser_Callbacks
 * we passed a callback function(user) to gettingUser_Callbacks
 * inside gettingUser_Callbacks(), this callback function is received as a normal
   function argument and executed once the timer completes
*WHY IS THIS HELPFUL?
*It allows us to pass data to code which is defined somewhere else but which will only run once 
the timer completes*/

//-------------------------------CALLBACK HELL-------------------------

/**
 *When we work with a lot of dependency asynchronous operations, you quickley
 end up in a callback hell  */
 
 const checkAuth = cb=>{
    //  in reality we don't have a timer but will probably reach out to a server
     setTimeout(() => {
         cb({isAuth:true})
     }, 2000);
 }
 const getUser=(authInfo,cb)=>{
     if(!authInfo.isAuth){
         cb(null)
         return
     }
     setTimeout(() => {
         cb({name:'This is the problem with callbacks--callback Hell!'})
     }, 2000);
 }
 checkAuth(authInfo=>{
     getUser(authInfo,user=>{
         console.log(user.name);
         
     })
 })
/*   checkAuth(authInfo=>{
    getUser(authInfo,user=>{
        console.log(user.name);
        
    })
})
*Using of multiple callbacks and nesting them into each other won't make your code
easier to read, understand and maintain--CALLBACK HELL

*Debugging also becomes painful once reaching three or four levels of nesting*/

// --------------------------------------------------PROMISES-----------------------------------

/*
*Callbacks are okay for single asynchronous operations
*ES6 introduces a new feature for this problem(callback hell)--PROMISES
* */

const get_User = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ name: 'Resolving using Promises!' })
      }, 2000)
    })
  }

  
//   get_User().then(user => {
//     console.log(user.name)
//   })
/*
*We simply call getting_user() there and then use then() to handle the asynchronous value.
*Inside getUser(), we create a new promise().  
*constructor function of that object receives a function as an argument
*function is executed automatically and can also receive two arguments: resolve and reject.
*Both are function you may execute inside the function passed to the promise constructor.
*When calling resolve(data), you resolve (= complete) the promise and return data to the 
function executed in the then block.
*You could also call reject(err) to throw an error.*/
get_User()
  .then(authStatus => {
    return get_User(authStatus) // returns a new promise which may use the authStatus we fetched
})
  .then(user => {
    console.log(user.name) // prints the user name
  }).catch(error=>{
      console.log('Rejected as the we failed to fulfilled Promise!');
      
  })

  // Simple example of a promise
  var x=true;
  var promise = new Promise((resolve,reject)=>{
    if(x==true){
      resolve({re:'FulFilled!'})
    }else{
      reject({er:'Failed to FulFilled!'})
    }
  });
  promise
  .then((result)=>{
    console.log('Successful')
  }).catch((error)=>{
    console.log('Failed!')
  })

// Real senario using Promises
/* for sending HTTP requests and reacting to responses
for example. It’s not really a great solution if
you want to handle asynchronous operations which 
don’t end after one “value”.*/

/* window.onload just runs when the browser gets to it.

window.addEventListener waits for the window to be 
loaded before running it.*/

// window.onload=()=>{
// const button=document.querySelector('button');
// const handleClick=()=>{
//   return new Promise(resolve=>{
//     button.addEventListener('click',()=>{
//       resolve(event)
//     })
//   })
// }
// handleClick().then(event=>{
//   console.log(event.target);//it only happen once
  
// })
// }
/**
 * In the above example, we are adding an eventListener to
 * a button in our DOM
 * 
 * this happens inside the promise 
 * but since a promise can only resolve once
 * we're only reacting to the first click.
 * Subsequent clicks will go into void 
 * 
 * It's this reason as well as one other important
 * advantage which made OBSERVABLES very popular
 */
// ------------------------------OBSERVABLES-----------------------------
/**
 * Here are two biggest arguments for using observables over promises
 *1.when we are working with STREAMS OF DATA instead of single values
 *2.got an AMAZING TOOLSET OF OPERATORS at your disposal to manipulate
 * transform and work with your async data
 */

/**
 *Stream of Data
 *dataSource(ex:a button getting clicked) may emit multiple values
 *best example to explain this is HTTPrequest+response(this can
  still treated as stream of data)
 * */
const button=document.querySelector('button');

const observable = Rx.Observable.fromEvent(button, "click");



// in this example observable observes click events on the button
// we passed to fromEvent()
observable.subscribe((event)=>{
  console.log("Data:"+event.target);
}
)