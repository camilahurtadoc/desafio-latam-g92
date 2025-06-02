# Prueba - "Javascript para la web" (G92)

## index.html
index.html contiene el programa de un conversor de monedas a partir de un monto en pesos chilenos. 
- Se consulta la API miindicador.cl usando el método fetch(), se calcula el cambio y se muestra el resultado modificando el DOM.
- El conversor está implementado para 2 monedas distintas, Dólar observado y Euro.
- Se usa try / catch para ejecutar el método fetch() y capturar los posibles errores mostrando el error en el DOM en caso que haya problemas.
- Se implementa un gráfico utilizando la librería Chart.js donde se muestra la variación de la moneda escogida en los 10 días previos.

## style.css
### assets/css/style.css
Contiene los estilos de la página web desarrollada.

## script.js
### assets/js/script.js
Contiene  el código javascript y las funciones para llevar a cabo la prueba. 
- Se recopila información de API miindicador.cl usando el método fetch()
- Se implementan diversos try / catch para solucionar posibles problemas.
- Como los errores de servidor (HTTP 400 y 500) no tiran error, se implementa una lectura de Promesa para el caso en que, por ejemplo, se escribe mal la url, para luego tirar un Error que sea reconocible por el desarrollador.
- En las funciones dependientes de los datos que se obtienen de la API se implementa una también un try / catch para evitar que el programa tire error al correr funciones que utilizan los datos de la API.
- Se modifica el DOM mostrando el resultado de la conversión de moneda y el gráfico correspondiente, usando la librería de Chart.js.

> Nota: `Este es un trabajo personal con fines académicos. Favor no realizar copias directas del material disponible.`