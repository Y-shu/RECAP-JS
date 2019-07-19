/*
*async and await are new features of EC8
*async and await just uses promises..
*/
window.onload=function(){
    // explanation of PROMISES....
const button=document.getElementById("mybtn");
console.log(button);

const div=document.getElementById("mytext");



const setText=(text)=>{
    div.textContent=text;
}

const checkAuth=()=>{
    return new Promise((resolve,reject)=>{
        setText('CheckingAuth...');
        setTimeout(()=>{
            resolve(true);
        },2000);
    });
  
};

const fetchUser=()=>{
    return new Promise((resolve,reject)=>{
        setText('Fetching User...')
        setTimeout(()=>{
            resolve({name:'yashu'});
        },2000);
    })
   
};
// async should go infront of function definition  
// we are turning a normal anonumous function to asynchronous using async 
// keyword over here so now javascript will consider all of the code inside 
// here can make use of await keyword to pause javascript execution 
button.addEventListener("click",async()=>{
// here javascript will wait for checkAuth promise to reslove then this 
// will get stored isAuth
    const isAuth=await checkAuth()
    let user = null;
    if(isAuth){
        // even here js will execute fetchUser() promise here and get the value 
        // stored in user until its done it waits   
        user=await fetchUser()
    }
    setText(user.name);
})
}