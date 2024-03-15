import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/NavBar'
import { Footer } from './components/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { NotFound } from './components/NotFound'
import { CarritoProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const App = () =>{

  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
            <Route path='/' element={<ItemListContainer actual={'Tienda'}/>} />
            <Route path='/category/:cid' element={<ItemListContainer actual={'Tienda'}/>} />
            <Route path='/item/:pid' element={<ItemDetailsContainer actual={'Tienda'}/>} />
            <Route path='/cart' element={<Cart actual={'Carrito'} />} />
            <Route path='/checkout' element={<Checkout actual={'Finalizar Compra'} />} />
            <Route path='*' element={<NotFound actual={'404'}/>} />
        </Routes>
        <Footer/>
        </CarritoProvider>
      </BrowserRouter>
      
    </>
  )
}
