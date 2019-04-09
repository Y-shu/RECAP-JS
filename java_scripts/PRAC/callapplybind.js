var user={
    name:"YashuY",
    age:26,
    getDetails(){
        console.log(this.name+" "+this.age);
        
    }
}
console.log(user);
user.getDetails();
var smily={
    name:"Happy",
    age:28,
    Details(){
      console.log(this.name+ " " +this.age);
      
    }
}
smily.call(user);


