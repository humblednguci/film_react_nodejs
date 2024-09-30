import { Route,Routes } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getAll } from './api/products'
import Homepage from './page/Home/homepage'
import Detailpage from './page/Detail/detailpage'
import WebsiteLayout from './layout/WebsiteLayout'
function App() {
  const [products, setProducts]=useState([])
  useEffect(()=>{
    getAll().then(({data})=>setProducts(data))
  },[])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<WebsiteLayout/>}>
        <Route index element={<Homepage products={products} /> }/>
        <Route path='video/:slug' element={<Detailpage products={products}/>}/>
        </Route>
          
      </Routes>
    </div>
  )
}

export default App