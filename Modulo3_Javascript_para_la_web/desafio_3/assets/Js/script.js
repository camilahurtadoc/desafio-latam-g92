// ----------------------------------
// PREGUNTA 2.1 - Separar html y javascript
// ----------------------------------

function pintar(){
    ele.style.backgroundColor = 'yellow';
}
    
const ele = document.getElementById("ele1");
//Se comenta la linea 10 para poder correr los siguientes ítems del desafío
//ele.addEventListener("click", pintar);


// ----------------------------------
// PREGUNTA 2.2 - Modificar función para que reciba elemento clickeado
// ----------------------------------

function pintar2(elementoClickeado) {
    elementoClickeado.style.backgroundColor = 'yellow';
}

//Se comenta linea 23 para funcionalidad del código que sigue
//ele.addEventListener('click', () => pintar2(ele))


// ----------------------------------
// PREGUNTA 2.3 - Modificar función para que reciba también un color
// ----------------------------------

function pintar3(elementoClickeado, color = 'green') {
    elementoClickeado.style.backgroundColor = color;
}

ele.addEventListener('click', () => pintar3(ele, 'yellow'));

