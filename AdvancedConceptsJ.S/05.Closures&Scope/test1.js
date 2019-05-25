var a = 10;
function x(){
    var b = a;
    console.log(b);//10
    function y(){
        var w=b;
        console.log(w);//undefined 
        /**
         * There are compiler step and interpretor 
         * Compiler takes care of all var's
         * and interpreter step which doen't even take care of var's
         * In the above inner scope first takes place compilation step
         * in which below var b is taken but it is undefined then comes
         * interpretation step which takes var w = b ;when interpreter
         * asks for b it gives in local scope but undefined!
         */
        var b=20;
         

        
    }
    y();
    
}
x();