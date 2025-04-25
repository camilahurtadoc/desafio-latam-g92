const parrafo = document.querySelector('#respuesta');
const btn_verificar = document.querySelector('#verificar');

btn_verificar.addEventListener('click', verificarTotal);

function verificarTotal() {
    let sticker1 = document.querySelector('#sticker1').value;
    let sticker2 = document.querySelector('#sticker2').value;
    let sticker3 = document.querySelector('#sticker3').value;
    let suma = Number(sticker1) + Number(sticker2) + Number(sticker3);

    if(suma > 10) {
        parrafo.innerHTML = 'Llevas demasiados stickers &#128532'
    } else {
        parrafo.innerHTML = `Llevas ${suma} stickers`
    }
}