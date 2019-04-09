
//instead of copy pasting a piece of code n number of times
//it is better to iterate them using looping control statements
for(var i=1;i<=10;i++){
    document.write("<h3>"+(5*i)+"</h3>")
}
//for loop is used when we know no.of iterations
//in advance...


for(var j=1;j<=10;j++){
    if(j%2==0){
        document.write("<h3>" + j + "</h3>");
    }
}

//or
//+= is an assignment operator adds the content and add it to 2
//k+=2 --->k=k+2
for(var k=2;k<=10;k+=2){
    document.write("<h3>"+ k +"</h3>")
}