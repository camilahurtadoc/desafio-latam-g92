import  ninjaTurtles from '../../assets/img/notfound.jpg'

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-2 mt-5">
        <h2>¿Pizzas?</h2>
        <h2>¡Acá solo comemos pizas!</h2>
        <img src={ninjaTurtles} className='w-50' alt='tortugas ninja comiendo pizza'/>
        <h3 className='my-5'>La página que estás buscando no está acá.</h3>
    </div>
  )
}

export default NotFound