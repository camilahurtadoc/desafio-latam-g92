import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login/Login'
import Navbar from './components/Navbar'
import Register from './components/Register/Register'

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Register />
      <Login />
      <Footer />
    </>
  )
}

export default App
