// explanation of PROMISES....
window.onload=function(){
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
// event listener on the button 
button.addEventListener("click",()=>{
//   main use of promises is we will not have deep nesting of callbacks
    checkAuth()
    .then(isAuth=>{
        if(isAuth){
            return fetchUser()
        }
    })
    .then(user=>{
        setText(user.name)
    })
    
    });
}