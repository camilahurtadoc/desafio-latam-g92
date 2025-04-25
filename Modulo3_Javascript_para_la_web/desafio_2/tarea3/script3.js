const main = document.querySelector('main');

main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.alignItems = 'center'

const button = document.querySelector('button')

button.style.margin = '1em'
button.style.width = '30%'

const parrafo = document.querySelector('#parrafo')

const password = 911;

button.addEventListener('click', verificarPass)

function verificarPass() {
    let numero1 = document.querySelector('#numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    let numero3 = document.querySelector('#numero3').value;

    if (numero1 == 9 && numero2 == 1 && numero3 == 1) {
        parrafo.innerHTML = 'password 1 correcto'
    } else if (numero1 == 7 && numero2 == 1 && numero3 == 4) {
        parrafo.innerHTML = 'password 2 correcto'
    } else {
        parrafo.innerHTML = 'password incorrecto'
    }
}