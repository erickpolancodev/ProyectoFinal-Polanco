import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'

import { Navbar } from './components/NavBar'
import { HeroContainer } from './components/HeroContainer'
import { Footer } from './components/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { NotFound } from './components/NotFound'
export const App = () =>{

  return (
    <>
      <BrowserRouter>
        <Navbar />
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
      </BrowserRouter>
      
    </>
  )
}
