//Переменные 
let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00";

// Дисплей

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    
    workTittle.classList.add('active');
}

function start () {

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    //изменение времени
    seconds = 5
    
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    breakCount = 0;


//countdown

let timeFunction = () => {
    //change display
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = seconds;

    //change the seconds
    seconds = seconds - 1;

    if(seconds === 0){
        workMinutes -= 1
        if(workMinutes === -1){
            if(breakCount % 2 === 0){
                //start break
                workMinutes = breakMinutes;
                breakCount++

                workTittle.classList.remove('active');
                breakTittle.classList.add('active')
                 
            } else
            //continue work
            workMinutes = workTime;
            breakCount++
            breakTittle.classList.remove('active')
            workTittle.classList.add('active');
            
        }
        seconds =59
    }
}

setInterval(timeFunction, 1000);//1000 = 1s


}
//start countdown
