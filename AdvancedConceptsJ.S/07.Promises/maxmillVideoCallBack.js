// explanation of CALLBACKS....
window.onload=function(){
const button=document.querySelector("button");
const div=document.querySelector("div");


// text is an argument over here to an anonomous...
const setText=(text)=>{
    div.textContent=text;
}
// cb is an argument to our function
const checkAuth=cb=>{
    setText('CheckingAuth...');
    setTimeout(()=>{
        cb(true);//executing our function by passing argument
    },2000);
};

const fetchUser=cb=>{
    setText('Fetching User...')
    setTimeout(()=>{
        cb({name:'yashu'});//executing our function by passing argument
    },2000);
};
// event listener on the button 
button.addEventListener("click",()=>{
    // passing an anonomous function to checkAuth
    // and checkAuth requires another function cb
    // when cb timer is done again it calls back auth(argument to anonmous function)
    //  function.so auth will be true
    checkAuth(auth=>{
        // this gets done once the timer is completed only
        if(auth){
            fetchUser(user=>{
                setText(user.name)
            });
        }
    });
})
}