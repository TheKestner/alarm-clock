let clock = document.getElementById("clock");

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":"+ today.getMinutes() + ":"+ today.getSeconds();
let dateTime = date+' '+time;
clock.innerHTML = dateTime;

setInterval(updatingTime, 1000)

function updatingTime(){

}


