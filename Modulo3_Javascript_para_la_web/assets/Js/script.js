const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidadTotal = document.querySelector('.cantidad');

let valorTotal = document.querySelector('.valor-total');

valorTotal.innerHTML = cantidadTotal.innerHTML * precio;

const btnmas = document.querySelector('.btnmas');

const btnmenos = document.querySelector('.btnmenos');


btnmas.addEventListener("click", () => {
    valorTotal.innerHTML = Number(cantidadTotal.innerHTML) * Number(precio);
})

btnmenos.addEventListener("click",() => {
    valorTotal.innerHTML = Number(cantidadTotal.innerHTML) * Number(precio);
})