var today = new Date();
var day = today.getDay();
var weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var hours = today.getHours();
var minutes = today.getMinutes();

var NoonOrMorning = (hours >= 12)? " PM" : " AM";
hours = (hours >= 12)? hours - 12 : hours;

if (hours === "0" && NoonOrMorning === " PM"){
  if(minutes === "0" && seconds === "0") {
    hours = 12;
    NoonOrMorning = " Noon";
  }
} 
else if (hours === "0" && NoonOrMorning === " AM") {
  if(minutes === "0" && seconds === "0") {
    hours = 12;
    NoonOrMorning = " Midnight";
  }
}

var todayHTML = document.getElementById("timer");
var timeHTML = document.getElementById("timerOutput");
document.write("today is " + weekDays[day] ,'<br>');
document.write  ("the time is " + hours + NoonOrMorning + " " + minutes,"<br>");

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0!
var year = today.getFullYear();

if(day<10) {
    day = '0'+day
} 

if(month<10) {
    month = '0'+month
} 

today = month + '/' + day + '/' + year;
document.write(today);

var firstSide = 5; 
var secondSide = 6; 
var thirdSide = 7; 
var perimeter = (firstSide + secondSide + thirdSide)/2;
var area =  Math.sqrt(perimeter*((perimeter-firstSide)*(perimeter-secondSide)*(perimeter-thirdSide)));
document.write('<br> areas of triangle where lengths of the three of its sides are 5, 6, 7. = ',area);


var wresource = 'w3resource';
var wresource_remove =  wresource[ wresource.length - 1] +  wresource.substring(0, wresource.length -1 );
document.write('<br>',wresource_remove);


theYear= prompt("Enter a Leap Year : ");
entered_year = (theYear % 100 === 0) ? (theYear % 400 === 0) : (theYear % 4 === 0);
if(theYear==true){
  console.log("A leap year you got it right Pal")
}
else{
  console.log('Failed not a leap Year')
}

for (var year = 2014; year <= 2050; year++)
    {
    var dat = new Date(year, 0, 1);
    if ( dat.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }

