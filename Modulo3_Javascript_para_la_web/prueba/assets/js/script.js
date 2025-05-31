
// Ver que moneda escogió (eventlistener)
const btnBuscar = document.querySelector("#btnBuscar");

btnBuscar.addEventListener('click', () => {
    const inputCLP = document.querySelector("#inputCLP").value;
    const monedaUsuario = document.querySelector("#monedaUsuario").value;


})


// if else para ver qué conversión traigo? 
//      => hacer function p traer cada moneda? /api/codigo
//      => una sola función y `/api/${codigo}`

//traer conversión hoy (async function) y (parsear info)
//parsearDatosChart()
//renderChartyResultado
//      => render queryselector("#resultado") y innerhtml = `${valor}`
//      => render chart



async function getMonedasHoy() {
    const res = await fetch("https://mindicador.cl/api/");
    const monedasHoy = res.json();
    return monedasHoy;
}

async function parsearMonedas() {
    
}