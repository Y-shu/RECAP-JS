// explanation of RxJs Observables....
/*
*RxJs is a third party varaibale.
*difference between promises and observables
  **promises handle one value
  **for observables we can handle streams of data..
*we can wrap an observable around a click listener..ever click it emit an new value..


*/
window.onload=function(){
const button=document.getElementById("mybtn");
const div=document.getElementById("mytext");
// text is an argument over here to an anonomous...
const setText=(text)=>{
    div.textContent=text;
}

const checkAuth=()=>{
    return Rx.Observable.create(observer=>{
        setText('CheckingAuth...');
        setTimeout(()=>{
            observer(true);//executing our function by passing argument
        },2000);
    });
    
}
const fetchUser=()=>{
    return Rx.Observable.create(observer=>{
        setText('Fetching User...')
        setTimeout(()=>{
            observer({name:'yashu'});//executing our function by passing argument
        },2000);
    })
  
};
// here we are creating a new observable from an event 
Rx.Observable.fromEvent(button,'click')
// operators
// the below operator handles first asyncronous value come from above click event
// and it reutrns checkAuth at the end,checkAuth gives us another observable..
.switchMap(event=>checkAuth())
// this takes the last observable from checkAuth and returns new observable
.switchMap(isAuth=>{
    if(isAuth){
        return fetchUser()
    }
})
// and we have to subscribe once our chain ends
// in the end we get user from fetchUser observable
.subscribe(user=>{
    setText(user.name)
})
}