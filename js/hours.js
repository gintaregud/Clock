"use strict";

const DOMhours = document.querySelector('.clock');

// hh:mm:ss

let HTML2 = '';

for ( let h=0; h<24; h++ ) {
    let hours = h;
    if ( hours < 10 ) {
        hours = '0' + hours;
    }
    
    HTML2 += `<div class="time">${hours}:00:00</div>`;
}


DOMhours.innerHTML = HTML2;