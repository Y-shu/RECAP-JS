var d = new Date();
document.getElementById('demo').innerHTML=d.getTime();//returns the time in millisecs since January 1, 1970
document.getElementById('demo1').innerHTML=d.getDate();//gets the day as a number(1-31)
// similary getMonth(),getHours(),getSeconds(),getFullYear(),getDay(),getMilliseconds

function mydate(){
    var a = new Date();
    var WeekDays=new Array(7);
    WeekDays[0]='Sunday',
    WeekDays[1]='Monday',
    WeekDays[2]='Tuesday',
    WeekDays[3]='Wednesday',
    WeekDays[4]='Thursday',
    WeekDays[5]='Friday',
    WeekDays[6]='Saturday',
     r = WeekDays[a.getDay()];
     document.writeln('Today is :'+r+'.');
    
     document.writeln('Current time is :'+a.getHours()+ ':' +a.getMinutes()+':' +a.getSeconds()+'.')
}
mydate();   