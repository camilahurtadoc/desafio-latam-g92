import CardPizza from '../Cardpizza/CardPizza'
import Header from '../Header/Header'
import { pizzas } from '../../assets/js/pizzas'
import { useState } from 'react'


function Home() {

    const [listaPizzas, setListaPizzas] = useState(pizzas)

    return (
        <>
            <Header
                title="¡Pizzería Mamma Mia!"
                description="¡Tenemos las mejores pizzas que podrás encontrar!" />

            <div style={{display: 'flex', justifyContent: 'center', gap: '2em', paddingTop: '2em'}}>
                {
                    listaPizzas.map(item => (
                        <CardPizza 
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            ingredients={item.ingredients}
                            img={item.img}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default Home