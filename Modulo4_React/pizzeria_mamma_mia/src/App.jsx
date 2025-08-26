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
import Logout from './pages/Logout/Logout'


function App() {

   const token_jwt = localStorage.getItem("token_jwt")
   
   console.log("token_jwt app: ", token_jwt)

   const { isLoggedIn } = useContext(UserContext)
   console.log("loggen in?: ", isLoggedIn)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={isLoggedIn ? <Navigate to="/"/> : <Register />} />
        <Route path='/login' element={isLoggedIn ? <Navigate to="/"/> : <Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizzas/:pizzaId' element={<Pizza />} />
        <Route path='/profile' element={isLoggedIn ? <Profile /> : <Navigate to="/"/>} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/logout' element={isLoggedIn ? <Logout /> : <Navigate to="/" />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
