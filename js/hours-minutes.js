"use strict";

const DOMhoursMinutes = document.querySelector('.clock');

// hh:mm:ss

let HTML1 = '';

for ( let h=0; h<24; h++ ) {
    let hours = h;
    if ( hours < 10 ) {
        hours = '0' + hours;
    }

    for ( let m=0; m<60; m++ ) {
        let minutes = m;
        if ( minutes < 10 ) {
            minutes = '0'+minutes;
        }
        
        HTML1 += `<div class="time">${hours}:${minutes}:00</div>`;
    }
}


DOMhoursMinutes.innerHTML = HTML1;