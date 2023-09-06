import React from 'react'
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./Img/logo.svg' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>We are a team of designer and developers that create high quality WordPress</p>
                    <div className='icon'>
                    <li><AiOutlineFacebook/></li>
                    <li><AiOutlineInstagram/></li>
                    <li><BsTwitter/></li>
                    <li><AiFillYoutube/></li>
                    </div>
                </div>

            </div>

            <div className='account'>
                <h3>My account</h3>
                <ul>
                    <li>Accounnt</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shoppig</li>
                    <li>return</li>
                </ul>

            </div>

            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>

            </div>
            
            
        </div>

    </div>
      
    </>
  )
}

export default Footer
