'use strict'

const img = document.getElementById("main");
const txt = document.getElementById("click");
const btn = document.querySelector("button"); //byID doesn't work?

const img_0 = document.getElementById("middle");
const img_1 = document.getElementById("side1");
const img_2 = document.getElementById("side2");
const img_3 = document.getElementById("main1");


img.addEventListener('click', function() {
    img.src=""
    img.src="young duck.jpg"
    img.onmouseout = function () {img.src="young duck.jpg"}
    img.onmouseover = function () {img.src="young duck.jpg"} //can this be done in fewer lines?
    img.style.top = "10%"
    img.title = "little duck" // is there an better way to get a hover label?
    txt.innerHTML = "A little bread is good for ducks, but not too much!"
    btn.style.visibility = "visible" 
});


btn.addEventListener('click', function() {
    img.remove()
    txt.innerHTML=""
    img_0.src="seeds.png"
    img_0.title="Seeds?"
    img_0.onmouseover = function () {txt.innerHTML="Seeds are rich in omega-3, omega-6 and packed full of nutrients"; txt.style.left="30.7%"}
    img_0.onmouseout = function () {txt.innerHTML=""}
    img_1.src="oats.png"
    img_1.title="Oats?"
    img_1.onmouseover = function () {txt.innerHTML="Oats are a great source of protein and easy for ducks to digest"; txt.style.left="31.5%"}
    img_1.onmouseout = function () {txt.innerHTML=""}
    img_2.src="berries.png"
    img_2.title="Berries?"
    img_2.onmouseover = function () {txt.innerHTML="Berries are packed with vitamins and antioxidants—a nutritious sweet treat!"; txt.style.left="28%"}
    img_2.onmouseout = function () {txt.innerHTML=""}
    btn.remove()
});


img_0.addEventListener('click', function() {
    img_1.remove()
    img_2.remove()
    img_0.remove()
    img_3.src="big duck.jpg"
    txt.innerHTML="You fed your duckling seeds! Now he's a happy, healthy mallard!" 
    txt.style.left="30.5%"
});

img_1.addEventListener('click', function() {
    img_1.remove()
    img_2.remove()
    img_0.remove()
    img_3.src="big duck.jpg"
    txt.innerHTML="You fed your duckling oats! Now he's a happy, healthy mallard!" 
    txt.style.left="30.5%"
});

img_2.addEventListener('click', function() {    //can I avoid this codeblock repeating?
    img_1.remove()
    img_2.remove()
    img_0.remove()
    img_3.src="big duck.jpg"
    txt.innerHTML="You fed your duckling berries! Now he's a happy, healthy mallard!" 
    txt.style.left="30.5%"
});

