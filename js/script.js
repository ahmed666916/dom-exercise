const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey I'm red";

container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.classList.add('heading');
heading.textContent = "Hey I'm blue h3";

container.appendChild(heading);

const section = document.createElement('div');
section.classList.add('section');

container.appendChild(section);

const marker = document.createElement('h1');
marker.classList.add('marker');
marker.textContent = "I'm in a div";

section.appendChild(marker);

const text = document.createElement('p');
text.classList.add('text');
text.textContent = "ME TOO!";

section.appendChild(text);

container.appendChild(section);



function changeColor(element,color) {
    element.style.color = color;
    
}

function backgroundColor(element, color) {
    element.style.backgroundColor = color;
}


changeColor(paragraph, 'red');

changeColor(heading, 'blue');

backgroundColor(section, 'pink');


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


const button = document.querySelector('#button');
button.addEventListener('click', () => {
    alert("Hello World");
})


function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const buttonBaby = document.querySelector("#btn-baby");

//buttonBaby.onclick = alertFunction;

buttonBaby.addEventListener('click', alertFunction);


btn.addEventListener('click', function (e) {
    console.log(e);
  });