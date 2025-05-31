
// Ver que moneda escogió (eventlistener)
const btnBuscar = document.querySelector("#btnBuscar");

btnBuscar.addEventListener('click', () => {
    const inputCLP = document.querySelector("#inputCLP").value;
    const monedaUsuario = document.querySelector("#monedaUsuario").value;
    const tooltiptext = document.querySelector(".tooltiptext");

    if (monedaUsuario == "seleccion") {
        tooltiptext.style.visibility = "visible";
    } else {
        tooltiptext.style.visibility = "hidden";
        renderChartyResultado(monedaUsuario, inputCLP);
    }
})


// if else para ver qué conversión traigo? 
//      => hacer function p traer cada moneda? /api/codigo
//      => una sola función y `/api/${codigo}`
async function getMonedaEscogidaUsuario(monedaUsuario) {
    const res = await fetch(`https://mindicador.cl/api/${monedaUsuario}`);
    const moneda = await res.json();
    return moneda;
}

//traer conversión hoy (async function) y (parsear info)
//parsearDatosChart()
async function parsearMoneda(monedaUsuario, inputCLP) {
    const moneda = await getMonedaEscogidaUsuario(monedaUsuario);
    const valorPesos = moneda.serie[0].valor;
    const pResultado = document.querySelector("#resultado");
    pResultado.innerHTML = `Resultado: $${(inputCLP/valorPesos).toFixed(2)}`;
    
    let labels = [];
    let fecha = "";
    let counter = 0;
    for (i = 9; i > -1; i --) {
        fecha = (moneda.serie[i].fecha).substr(0, 10);
        labels[counter] = fecha;
        counter += 1;
    }

    let ejeY = [];
    let valorDia = 0;
    counter = 0;
    for (i = 9; i > -1; i --) {
        valorDia = moneda.serie[i].valor;
        ejeY[counter] = valorDia;
        counter += 1;
    }

    const datasets = [{
        label: "Historial últimos 10 días",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(165, 28, 58)",
        data: ejeY
    }]
    
    return {labels, datasets}
}

//renderChartyResultado
//      => render queryselector("#resultado") y innerhtml = `${valor}`
//      => render chart

async function renderChartyResultado(monedaUsuario, inputCLP) {
    const data = await parsearMoneda(monedaUsuario, inputCLP);
    const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
            const {ctx} = chart;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || '#ededed';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
            }
    };
    const config = {
        type: "line",
        data,
        options: {
            plugins: {
                customCanvasBackgroundColor: {
                    color: "#ededed"
                }
            }
        },
        plugins: [plugin],
    }

    const myChart = document.querySelector("#myChart");
    new Chart(myChart, config);

}


