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
        argTocatchReturnValue({name:'serve1 is Loading...'})//passing an argument to callback function  
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
console.log('this prints before name gets printed as execution will not stops!');


/**
 * now we are not returning anything in gettingUser_Callbacks
 * we passed a callback function(user) to gettingUser_Callbacks
 * inside gettingUser_Callbacks(), this callback function is received as a normal
   function argument and executed once the timer completes
*WHY IS THIS HELPFUL?
*It allows us to pass data to code which is defined somewhere else but which will only run once 
the timer completes*/