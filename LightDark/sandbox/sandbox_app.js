'use strict'

function poke() { //window alert called in HTML with 'onclick'
    alert("Alert! Alert! This is pop-up uses 'alert()'!");
}

function bonk() { //window prompt
    prompt('Bonk! (N.B. Your input will be lost! Variables defined in a function exist only as long as the function does)'); 
}

const spin = document.getElementById("spin");

var og = spin; // define 'spin' as original
var og_copy = og.cloneNode(true); //og_copy it

og_copy.id = 'og_copy'; // update the ID
og_copy.classList.add('largerbox'); //add class
og_copy.innerHTML = 's l o w  s p i n'

setInterval(og.after(og_copy),2000); //insert into DOM (will display right under 'spin' div, as if listed below it)

spin.onmouseover = function spinner() {  //quick spin
    spin.style.animationName="spin";
    spin.style.animationDuration="1s";
}

og_copy.onmouseover = function spinner() { // s l o w spin
    og_copy.style.animationName="spin";
    og_copy.style.animationDuration="5s";
}

// async tutorial: https://www.youtube.com/watch?v=PoRJizFvM7s&t=35s


const posts = [
 { title: 'One', body: 'Post one' },
 { title: 'Two', body: 'Post two' }  
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 5000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 10000);
}

//getPosts(); can be included below (why no parenthesis, again?)

createPost({ title: 'Three', body: 'Post three' }, getPosts)
