import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import "./Cart.css"
const Cart = ({cart,setCart}) => {
  const incqty=(product)=>{
      const exsit= cart.find((x)=>{
          return x.id === product.id
      })
      setCart(cart.map((curElm)=>{
         return curElm.id === product.id ? {...exsit,qty : exsit.qty + 1} : curElm
      }))
  }
  const decqty=(product)=>{
      const exsit= cart.find((x)=>{
          return x.id === product.id
      })
      setCart(cart.map((curElm)=>{
         return curElm.id === product.id ? {...exsit,qty : exsit.qty - 1} : curElm
      }))
  }
  const removeproduct=(product)=>{
       const exsit= cart.find((x)=>{
          return x.id=== product.id
       })
       if(exsit.qty > 0){                                         
          setCart(cart.filter((x)=>{
              return x.id !== product.id

          }))
       }

       
  }
  const Totalprice= cart.reduce((price,item) => price = item.qty * item.Price, 0)

  return (
    <>
    <div className='cartcontainer'>
      {cart.length ===0 &&
      <div className='emptycart'>
        <h2 className='empty'>Cart is Empty</h2>
        <Link to='/product' className='emptycartbtn'>Shop Now</Link>

      </div>

      }
      <div className='contant'>
        {
          cart.map((curElm)=>{
            return(
              <div className='cart-item' key={curElm.id}>
                <div className='img-box'>
                  <img src={curElm.Img} alt={curElm.Title}/>
                </div>
                <div className='detail'>
                  <div className='info'>
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>Price: ${curElm.Price}</p>
                    {/* <button><AiOutlineClose/></button> */}
                    <div className='qty'>
                                <button className='incqty' onClick={()=> incqty(curElm)}>+</button>
                                <input type='text' value={curElm.qty}/>
                                <button className='decqty' onClick={()=> decqty(curElm)}>-</button>
                            </div>
                           <h4 className='subtotal'>Sub total: ${curElm.Price*curElm.qty}</h4>
                            </div>
                            <div className='close'>
                           <button onClick={()=> removeproduct(curElm)}><AiOutlineClose/></button>
                           </div>
                    </div>
                </div>
                )})
            }
        {/* <div className='cart-item'></div> */}
        </div>
        {
            cart.length > 0 &&
            <>
                   <h2 className='totalprice'>Total: ${Totalprice}</h2>
                   <buttton className='checkout'>Checkout</buttton>
            </>
        }
    </div>
    </>
  )
}

export default Cart