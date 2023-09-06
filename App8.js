import React, {useState} from 'react'
import Nav from './components8/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './components8/Rout'
import Footer from './components8/Footer'
// import Product from './components8/Product'
import Productdetail from './components8/Productdetail'

const App8 = () => {
  const [cart, setCart] = useState([])
  const [close,setClose] = useState(false)
  // product detail
  const [detail,setdetail] = useState([])
  // filter product
  const [product,setProduct] = useState(Productdetail)
  const searchbtn = (product) =>{
    const change = Productdetail.filter((x)=>{
      return x.Cat === product;
    })
    setProduct(change);
  }
  const view = (product)=>{
    setdetail([{...product}])
    setClose(true)
  }
  const addtocart=(product)=>{
    const exsit = cart.find((x)=>{
      return x.id === product.id
    })
    if(exsit){
      alert("product is already added to cart")
    }
  else{
  setCart([...cart, {...product, qty:1}])
    alert("product is added to cart")

  }
    
  }

  return (
    <BrowserRouter>
      <Nav searchbtn={searchbtn} />
    <Rout product={product} setProduct ={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>   
      <Footer/>
    </BrowserRouter>
  )
}

export default App8
