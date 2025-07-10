import { useEffect, useState } from "react";
import axios from 'axios'

const Pizza = () => {

    const [pizza, setPizza] = useState({})

    async function getPizza() {
  try {
    const { data } = await axios.get('http://localhost:5000/api/pizzas/p001');
    setPizza(data)
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
    getPizza()
}, [])

  return (
    <div>
        <h2>Pizza</h2>
    </div>
  )
}

export default Pizza