let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":"+ today.getMinutes(); + ":" + today.getSeconds();
let dateTime = date+' '+time;
let clock = document.getElementById("clock");
clock.innerHTML = dateTime;

setInterval(updatingTime, 1000)

function updatingTime(){

}


