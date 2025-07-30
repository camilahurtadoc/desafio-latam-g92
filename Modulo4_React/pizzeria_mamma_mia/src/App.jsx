import './App.css'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Pizza from './pages/Pizza/Pizza'
import Register from './pages/Register/Register'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      {/* <Home /> */}
      <Pizza />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
