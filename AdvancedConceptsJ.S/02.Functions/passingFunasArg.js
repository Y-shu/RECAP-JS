//Passing Function as an argument

var years = [1992,1998,1957,1991,2019];

function arrayCalc(arr,fun){
var arrRev=[];
for(var i=0;i<arr.length;i++){
    arrRev.push(fun(arr[i]));
}
return arrRev;
}
function CaluculateAge(el){
    return 2016-el;
}