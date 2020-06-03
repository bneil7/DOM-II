// Your code goes here

/* PSEUDO CODE */
// the element -> the event -> the code we want to run


// mouseover
const newLogo = document.querySelector('.logo-heading');

newLogo.addEventListener('mouseenter', (event)=>{
    event.target.style.color = 'hotpink';
    event.target.textContent = 'Funk 🅱️us';
});

const oldLogo = document.querySelector('.logo-heading');
oldLogo.addEventListener('mouseleave', (event)=>{
    event.target.style.color = 'black';
    event.target.textContent = 'Funky Busssss';
});
// keydown

// wheel
const zoomImg = document.querySelectorAll('img');

console.log(zoomImg);

// drag & drop

// click event
const pinkLinks = document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('click', (event)=>{
        el.style.color = 'hotpink';
    });
    el.addEventListener('dblclick', (event)=>{
        el.style.color = 'limegreen';
    })
});
// load

// focus

// resize

// scroll

// select

// dblclick
const schoolBus = document.querySelector('img');
schoolBus.addEventListener('dblclick', ()=>{
    schoolBus.src='https://image.shutterstock.com/image-photo/yellow-bus-isolated-on-white-260nw-17008966.jpg';
});

// Nest two similar events somewhere in the site and prevent the event propagation properly
const bubbleButtons = document.getElementsByClassName('btn');

//  Stop the navigation items from refreshing the page by using preventDefault()