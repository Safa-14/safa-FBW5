document.querySelector('#sp1').innerText = '00:00:00'

let seconds = 0
let minutes = 0
let hours = 0
setInterval(() => {
    document.querySelector('#sp1').innerText = formater(hours, minutes,seconds)
    seconds++
    if (seconds == 60){
        seconds = 0
        minutes++
        if(minutes == 60) {
            minutes =0
            hours ++
            if(hours == 24) {
                hours =0
            }
        }
        
    }
    
}, 10);

function formater(hrs,mins,scs) {
    let result =''
    if(hrs < 10) {
        result = result + '0' + hrs.toString()
    }else {
        result = result + hrs.toString()
    }

    if(mins < 10) {
        result = result + ':0' + mins.toString()
    }else {
        result = result + ':' + mins.toString()
    }

    if(scs < 10) {
        result = result + ':0' + scs.toString()
    }else {
        result = result + ':' + scs.toString()
    }

    return result
}






// setInterval(() => {
//     document.querySelector('#sp1').innerText = formater(hours, minutes,seconds)
//     minutes++
//     if (minutes == 60){
//         minutes = 0
//     }
//     }, 600);

// setInterval(() => {
//     document.querySelector('#sp1').innerText = formater(hours, minutes,seconds)
//     hours++
//     if (hours == 24){
//          hours = 0
//     }
// }, 36000);



// let minutes = 00
// setInterval(() => {
//     document.querySelector('#sp1').innerText = formater(minutes)
//     minutes++
// }, 60000);


// let hours = 00
// setInterval(() => {
//     document.querySelector('#sp1').innerText = formater(minuthourses)
//     hours++
// }, 360000);
// let hours = 00
