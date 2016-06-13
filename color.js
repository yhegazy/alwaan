/*global console, alert, prompt*/
/*
Author: Yahia Hegazy
Created: 2016-05-19
Updated: 2016-05-23
Final: 2016-05-23

Project: Color Changer (Background & Text)

The purpose of this project is to change the background & text color of not only the current page, but for all pages under the same domain name. 

*/

//Global Variables
var changeMe = document.getElementById('changeColor'),
    saveBG = document.getElementById('bgcolor'),
    saveTXT = document.getElementById('txtcolor');

//Change background color and use localStorage to retain that chosen color

function bgcolor(obj) {
    'use strict';
    changeMe.style.backgroundColor = obj.value;
    localStorage.setItem('bgcolor', obj.value);
    document.getElementById('bgcolor').reset();
}


function txtcolor(obj) {
    'use strict';
    changeMe.style.color = obj.value;
    localStorage.setItem('txtcolor', obj.value);
    document.getElementById('txtcolor').reset();
}


if ((saveBG !== '') || (saveBG !== null)) {
    changeMe.style.backgroundColor = localStorage.getItem('bgcolor');
}
if ((saveTXT !== '') || (saveTXT !== null)) {
    changeMe.style.color = localStorage.getItem('txtcolor');
}

function reset() {
    'use strict';
    location.reload();
    localStorage.clear();
}