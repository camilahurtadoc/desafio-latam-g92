import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx';
import AxiosPizzasProvider from './context/AxiosPizzasContext.jsx';
import AxiosPizzaIdProvider from './context/AxiosPizzasIdContext.jsx';
import CartProvider from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AxiosPizzasProvider>
          <AxiosPizzaIdProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AxiosPizzaIdProvider>
        </AxiosPizzasProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
