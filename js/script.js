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



function changeColor(element,color) {
    element.style.color = color;
    
}

function backgroundColor(element, color) {
    element.style.backgroundColor = color;
}


changeColor(paragraph, 'red');

changeColor(heading, 'blue');

backgroundColor(section, 'pink');
