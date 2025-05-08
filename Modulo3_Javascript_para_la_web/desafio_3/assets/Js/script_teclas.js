div1 = document.getElementById('key')

div1.style.width = '200px';
div1.style.height = '200px';
div1.style.backgroundColor = 'white';
div1.style.border = 'solid black 1px'



document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'a' || keyName === 'A') {
        div1.style.backgroundColor = 'pink'
    } else if (keyName === 's' || keyName === 'S') {
        div1.style.backgroundColor = 'orange'
    } else if (keyName === 'd' || keyName === 'D') {
        div1.style.backgroundColor = 'lightblue'
    } else if (keyName === 'q' || keyName === 'Q') {
        createNewDiv('purple');
    } else if (keyName === 'w' || keyName === 'W') {
        createNewDiv('gray');
    } else if (keyName === 'e' || keyName === 'E') {
        createNewDiv('brown');
    }
})

function createNewDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.border = 'solid black 1px'
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.backgroundColor = color;
    document.querySelector('body').appendChild(nuevoDiv);
}