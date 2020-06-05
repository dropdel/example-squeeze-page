const timer = (endDate) => {
    const currDate = getTime(endDate); 
    const timeDifference = diffTime(currDate);
    const tObj = timeCalc(timeDifference);
    //dom stuff
    const clock = document.getElementById("clock");
    clock.innerHTML = tObj.day + "d " + tObj.hour + "h "
    + tObj.min + "m " + tObj.sec + "s ";
 }  
 
 const getTime = (endDate) => {
     const msTime = new Date(endDate).getTime();
     return msTime;
 }
 
 const diffTime = (endDate) => {
     const timeNow = new Date().getTime();
     const diff = endDate - timeNow;
     return diff;
 }
 
 const timeCalc = (diff) => {
   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
   class Time {
       constructor(day, hour, min, sec) {
           this.day = day;
           this.hour = hour;
           this.min = min;
           this.sec = sec;
       }
   }
   const timeCurr = new Time(days, hours, minutes, seconds);
 
   return timeCurr;
 } 

 setInterval(timer, 1000, "Nov 18, 2021 00:12:13");

const button = document.getElementById("submit");
button.addEventListener('click', ()=> {
    alert('Not really functional yet.')
});