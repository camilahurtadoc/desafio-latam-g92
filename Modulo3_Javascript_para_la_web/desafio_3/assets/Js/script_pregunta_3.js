divs = document.querySelectorAll('.container');

for (i = 0; i < divs.length; i++) {
    divs[i].style.height = "200px";
    divs[i].style.width = "200px";
}

box1 = document.getElementById('box1');
box2 = document.getElementById('box2');
box3 = document.getElementById('box3');
box4 = document.getElementById('box4');

box1.style.backgroundColor = 'blue';
box2.style.backgroundColor = 'red';
box3.style.backgroundColor = 'green';
box4.style.backgroundColor = 'yellow';

box1.addEventListener('click', () => pintarNegro(box1));
box2.addEventListener('click', () => pintarNegro(box2));
box3.addEventListener('click', () => pintarNegro(box3));
box4.addEventListener('click', () => pintarNegro(box4));


function pintarNegro(box) {
    box.style.backgroundColor = 'black';
}