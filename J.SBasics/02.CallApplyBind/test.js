// var smily={
//     num:2
    
// }
// var getNum=function(arg1,arg2){
//     console.log(this.num+arg1+arg2);
    
// }
// getNum.call(smily,3,5);
// getNum.apply(smily,[8,9]);
// var x=getNum.bind(smily);
// x(6,9);

// -----------------------------------------------------------------------------
var data=[
    {f:"p"},
    {l:"k"}
];
var users={
    data:[
        {f:"ben"},{l:"son"}
    ],
    showDetails:function(){
     console.log(this.data[0].f+" "+this.data[1].l);

     
    }
    
}
// console.log(users.showDetails); // function declaration
var x=users.showDetails;
console.log(x());


var y=users.showDetails.bind(users);
console.log(y());


