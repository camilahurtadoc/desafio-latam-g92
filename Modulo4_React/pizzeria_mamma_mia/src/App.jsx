import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Pizza from './pages/Pizza/Pizza'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'


function App() {

  const { token } = useContext(UserContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={token ? <Navigate to="/"/> : <Register />} />
        <Route path='/login' element={token ? <Navigate to="/"/> : <Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizzas/:pizzaId' element={<Pizza />} />
        <Route path='/profile' element={token ? <Profile /> : <Navigate to="/"/>} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
