import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import RoadBikes from './categories/RoadBikes'
import MtbBikes from './categories/MtbBikes'
import { ShoppingCartProvider } from './context/ShoppigCartContext'
import TTBikes from './categories/TTBikes'
import CxBikes from './categories/CxBikes'
import Trek from './categories/Trek'
import Futer from './components/Futer'
import HomeBikes from './categories/HomeBikes'
const App = () => {
  return (
    <ShoppingCartProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/road-bikes' element={<RoadBikes/>}/>
      <Route path='/mtb-bikes' element={<MtbBikes/>}/>
      <Route path='/tt-bikes' element={<TTBikes/>}/>
      <Route path='cx-bikes' element={<CxBikes/>}/>
      <Route path='/home-bikes' element={<HomeBikes/>}/>
     </Routes>
     <Futer/>
    </ShoppingCartProvider>
   
  )
}

export default App