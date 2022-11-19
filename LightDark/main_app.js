'use strict'

document.getElementById("main").onclick = function() {alreadyHere()};

function alreadyHere() {
  document.getElementById("main").innerHTML = "Main Page (You're already here silly):";
}


const switcher = document.querySelector('.btn'); //reference

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className); 
    //shows that last class name takes precendent

});