import './App.css'
import { Routes, Route } from 'react-router-dom'
import ContextProvider from './context/CartContext'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Pizza from './pages/Pizza/Pizza'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <>
      <ContextProvider>
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
      </ContextProvider>
      <Footer />
    </>
  )
}

export default App
