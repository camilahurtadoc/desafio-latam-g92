// URL API sin moneda (se recibe de input en getMonedaEscogidaUsuario())
const url = "https://mindicador.cl/api/"
const btnBuscar = document.querySelector("#btnBuscar");
let chartInUse;


// Render de chart al clickear button
btnBuscar.addEventListener('click', async () => {
    const inputCLP = document.querySelector("#inputCLP").value;
    const monedaUsuario = document.querySelector("#monedaUsuario").value;
    const tooltiptextPesos = document.querySelector("#tooltiptextPesos");
    const tooltiptextMoneda = document.querySelector("#tooltiptextMoneda");

    // Asegura que usuario escoge una moneda
    if (inputCLP <= 0) {
        tooltiptextPesos.style.visibility = "visible";
    } else if (monedaUsuario == "seleccion") {
        tooltiptextMoneda.style.visibility = "visible";
    } else {
        tooltiptextPesos.style.visibility = "hidden";
        tooltiptextMoneda.style.visibility = "hidden";
        // Permite un chart nuevo si ya hay uno creado
        if (chartInUse != undefined) {
            chartInUse.destroy();
        }
        // Renderización de datos dentro de un try / catch
        chartInUse = await renderChart(monedaUsuario, inputCLP, chartInUse, url)
    }
})


// GET moneda escogida por usuario desde API
async function getMonedaEscogidaUsuario(monedaUsuario, url) {
    try {
        const res = await fetch(`${url}${monedaUsuario}`)
            .then((response) => {

                if (!response.ok) {
                    throw new Error(`HTTP Error Status ${response.status}`);
                }
                return response;
            })
        const moneda = await res.json();
        return moneda;
    } catch (e) {
        console.log("Error en get: ", e)
        const boxConversor = document.querySelector(".boxConversor")
        boxConversor.innerHTML = `
                    <h2>Error al buscar información</h2>
                    <p style="text-align: center">${e}</p>
                    `
    }
}


// Parseo de datos desde API
async function parsearMoneda(monedaUsuario, inputCLP, url) {
    try {
        const moneda = await getMonedaEscogidaUsuario(monedaUsuario, url);
        const valorPesos = moneda.serie[0].valor;
        mostrarResultado(inputCLP, valorPesos);

        // Parseo de datos para chart
        let labels = [];
        let fecha = "";
        let counter = 0;
        for (i = 9; i > -1; i--) {
            fecha = (moneda.serie[i].fecha).substr(0, 10);
            labels[counter] = fecha;
            counter += 1;
        }

        let ejeY = [];
        let valorDia = 0;
        counter = 0;
        for (i = 9; i > -1; i--) {
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

        return { labels, datasets }
    } catch (e) {
        console.log("Error en parsearMonedas():", e);
        throw new Error(e)
    }
}


// Modifica DOM y muestra resultado de moneda seleccionada por usuario
function mostrarResultado(inputCLP, valorPesos) {
    const pResultado = document.querySelector("#resultado");
    pResultado.innerHTML = `Resultado: $${(inputCLP / valorPesos).toFixed(2)}`;
}


// Parseo de datos para chart
async function parsearChart(monedaUsuario, inputCLP, url) {
    try {
        const data = await parsearMoneda(monedaUsuario, inputCLP, url);
        const plugin = {
            id: 'customCanvasBackgroundColor',
            beforeDraw: (chart, args, options) => {
                const { ctx } = chart;
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
    } catch (e) {
        console.log("error en parsearChart():", e)
    }
}


// Renderización del chart
async function renderChart(monedaUsuario, inputCLP, chartInUse, url) {
    const config = await parsearChart(monedaUsuario, inputCLP, url);

    const myChart = document.querySelector("#myChart");
    chartInUse = new Chart(myChart, config);

    return chartInUse;
}