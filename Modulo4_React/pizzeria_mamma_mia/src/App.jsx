import './App.css'
import { Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Pizza from './pages/Pizza/Pizza'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile'
import AxiosPizzasProvider from './context/AxiosPizzasContext'
import AxiosPizzaP001Provider from './context/AxiosPizzaP001Context'

function App() {

  return (
    <>
      <AxiosPizzasProvider>
        <CartProvider>
          <AxiosPizzaP001Provider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/pizza/p001' element={<Pizza />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/404' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </AxiosPizzaP001Provider>
        </CartProvider>
      </AxiosPizzasProvider>
      <Footer />
    </>
  )
}

export default App
