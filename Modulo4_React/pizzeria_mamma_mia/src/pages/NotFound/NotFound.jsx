import  ninjaTurtles from '../../assets/img/notfound.jpg'

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
        <h2>¿Pizzas?</h2>
        <h2>¡Acá solo comemos pizzas!</h2>
        <img src={ninjaTurtles} className='rounded w-50' alt='tortugas ninja comiendo pizza' />
        <h3 className='my-5'>La página que estás buscando no está acá.</h3>
    </div>
  )
}

export default NotFound