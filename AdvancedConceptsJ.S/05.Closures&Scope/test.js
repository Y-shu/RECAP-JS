var a = 10;
function x(){
    var b = a;
    console.log(b);//10
    function y(){
        var b=20;
        var w=b;
        console.log(w);//20
        
    }
    y();
    
}
x();