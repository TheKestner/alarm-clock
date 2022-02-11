let clock = document.getElementById("clock");

let today = new Date();
let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
let time = today.getHours() + ":"+ today.getMinutes() + ":"+ today.getSeconds();
let dateTime = date+' '+time;
clock.innerHTML = dateTime;

function updatingTime(){
    let today = new Date();
    let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    let time = today.getHours() + ":"+ today.getMinutes() + ":"+ today.getSeconds();
    let dateTime = date+' '+time;
    clock.innerHTML = dateTime;

    if (today.getHours() > 5) {
        alert("Time for Stand up!")
    }

}

setInterval(updatingTime, 1000)

