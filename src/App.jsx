import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/NavBar'
import { HeroContainer } from './components/HeroContainer'
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
        <HeroContainer/>
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:cid' element={<ItemListContainer/>} />
            <Route path='/item/:pid' element={<ItemDetailsContainer/>} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
        </CarritoProvider>
      </BrowserRouter>
      
    </>
  )
}
