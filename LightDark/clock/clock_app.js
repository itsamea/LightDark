'use strict'

function showTime(){
    var date = new Date(); //if new is gone it creates a string not an object, property is designed to work on objects thst have the getHours property
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h; //adds a 0 where a blank would be
    m = (m < 10) ? "0" + m : m; //ternary operators
    s = (s < 10) ? "0" + s : s; // ? = 'if true' return 0+s, : 'otherwise' return s (truthy, falsy, and true and false)
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time; // renders HTML element (if it existed in the string)
    document.getElementById("MyClockDisplay").textContent = time; //do you need both? (No)
    
    setTimeout(showTime, 1000); //call showTime function after 1000ms
    
}

showTime();

const switcher = document.querySelector('.btn'); //reference

function realTime(){
    var date = new Date();
    var h = date.getHours();
    if(h < 6 || h > 18) {      // &&: 'and , !: 'not'
        document.body.className = ('dark-theme');
        switcher.textContent = "Day";
    } 

    else {
        document.body.className = ('light-theme');
        switcher.textContent = "Night";
    }

};

realTime();


switcher.addEventListener('click', function() { 

    document.body.classList.toggle('dark-theme')
    
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Night";
    }
    else {
        this.textContent = "Day";
    } // without first block the theme just straight doesn't toggle at all

    document.body.classList.toggle('light-theme')

    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Day";
    }
    else {
        this.textContent = "Night";
    } // without second block button content does not change

});



//Real time themes: initially was not working because it was added AFTER 0 to 12 statment below
    //could not be overridden by button, because it was in a function that runs every 1000ms
    //moved into own function block -- this worked but button now reads 'Night' 'Day' 'Day' 'Day'
    
//Button Content:
    //repeating button from 'switcher...' with night/day/dark/light reversed has resulted in button always saying 'Night'
    //repeating from 'document.body...' but within same 'switcher...' block, did the same thing
    //nvm I was calling it 'night theme' not 'dark theme', mb
    //repeating from 'switcher...' and fron 'document.body...' initially read wrong, then work after second click
    //swapping block order somehow does nothing, starts at 'Night' regardless
    //put empty string in body class for HTML and added else clause so theme is set only by funtion--behaviour as above
    
    //HTML Element sets initial textContent manually, hence above

//Following Empty String class: 
    //else {
    //    document.body.className = ('light-theme');
    //}  -- not needed even with empty  class? Nope is totally needed if its day time