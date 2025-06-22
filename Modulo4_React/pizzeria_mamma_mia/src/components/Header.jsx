import Carousel from 'react-bootstrap/Carousel';
import pizzaHeader1 from '../assets/img/Header.jpg';

function Header({ title, description}) {
  return (
    <Carousel>
        <Carousel.Item style={{backgroundColor: 'rgba(0, 0, 0)'}}>
        <img src={pizzaHeader1} text="First slide" style={{height: '300px', width: '100%', objectFit: 'cover', opacity: '50%'}}/>
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>

             
    </Carousel>
  )
}

export default Header