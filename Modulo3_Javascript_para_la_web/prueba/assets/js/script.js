const btnBuscar = document.querySelector("#btnBuscar");
let chartInUse;


// Render de chart al clickear button
btnBuscar.addEventListener('click', async () => {
    const inputCLP = document.querySelector("#inputCLP").value;
    const monedaUsuario = document.querySelector("#monedaUsuario").value;
    const tooltiptext = document.querySelector(".tooltiptext");

    // Asegura que usuario escoge una moneda
    if (monedaUsuario == "seleccion") {
        tooltiptext.style.visibility = "visible";
    } else {
        tooltiptext.style.visibility = "hidden";
        // Permite un chart nuevo si ya hay uno creado
        if (chartInUse != undefined) {
            chartInUse.destroy();
        }
        // Renderización de chart
        chartInUse = await renderChart(monedaUsuario, inputCLP, chartInUse)
    }
})


// GET moneda escogida por usuario desde API
async function getMonedaEscogidaUsuario(monedaUsuario) {
    const res = await fetch(`https://mindicador.cl/api/${monedaUsuario}`);
    const moneda = await res.json();
    return moneda;
}


// Parseo de datos desde API
async function parsearMoneda(monedaUsuario, inputCLP) {
    const moneda = await getMonedaEscogidaUsuario(monedaUsuario);
    const valorPesos = moneda.serie[0].valor;
    mostrarResultado(inputCLP, valorPesos);
    
    // Parseo de datos para chart
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


// Modifica DOM y muestra resultado de moneda seleccionada por usuario
function mostrarResultado(inputCLP, valorPesos) {
    const pResultado = document.querySelector("#resultado");
    pResultado.innerHTML = `Resultado: $${(inputCLP/valorPesos).toFixed(2)}`;
}


// Parseo de datos para chart
async function parsearChart(monedaUsuario, inputCLP) {
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
        
    return config;
}


// Renderización del chart
async function renderChart(monedaUsuario, inputCLP, chartInUse) {
    const config = await parsearChart(monedaUsuario, inputCLP);

    const myChart = document.querySelector("#myChart");
    chartInUse = new Chart(myChart, config);
    
    return chartInUse;
}


