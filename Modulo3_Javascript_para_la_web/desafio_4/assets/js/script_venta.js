const propiedades_venta = [
{
nombre: 'Mágica casa al borde del lago',
id: '157', //se utiliza para obtener el src de la img
descripcion: 'Hermosa casa con vista y ambiente inigualable al borde del lago',
ubicacion: 'Camino del lago 12, Distrito 4',
habitaciones: 20,
costo: 15000000000 ,
smoke: false,
pets: true
},
{
nombre: 'Casa en el cerro',
id: '9528',
descripcion: 'Casa en sector privado, tranquilo y seguro. Excelente ambiente familiar',
ubicacion: 'Calle del cerro 453, Distrito 6',
habitaciones: 5,
costo: 800000000 , 
smoke: true,
pets: true
},
{
nombre: 'Home studio en barrio universitario',
id: '12288',
descripcion: 'Ideal para estudiantes, home studio con cocina equipada',
ubicacion: 'Avenida del universitario 6575, Distrito 2',
habitaciones: 1,
costo: 120000000,
smoke: false,
pets: false
},
{
nombre: 'Casa con amplio jardín',
id: '12900',
descripcion: 'Pintoresca casa en sector tranquilo, cercano a la playa con amplio jardín',
ubicacion: 'Sendero a la playa 3278, Distrito 8',
habitaciones: 3,
costo: 200000000,
smoke: true,
pets: false
},
{
nombre: 'Departamento nuevo en icónico barrio',
id: '14696',
descripcion: 'Amplio departamento con terraza en sector familiar y seguro',
ubicacion: 'Av. La familia 5689, Distrito 9',
habitaciones: 4,
costo: 500000000,
smoke: false,
pets: true
},
]



const row = document.querySelector(".row");
let html_venta = "";
let fumar = "";
let mascotas = "";

for (let venta of propiedades_venta) {
    if (venta.smoke) {
        fumar = `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                 </p>`
    } else {
        fumar = `<p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>`
    }

    if (venta.pets) {
        mascotas = `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
    } else {
        mascotas = `<p class="text-danger">
                        <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`
    }

    html_venta += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="assets/img/Venta/${venta.id}.jpg"
                class="card-img-top"
                alt="Imagen de ${venta.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                  ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${venta.ubicacion} 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo.toLocaleString()}</p>
                ${fumar}
                ${mascotas}
              </div>
            </div>
        </div>
    
    `
}

row.innerHTML = html_venta;