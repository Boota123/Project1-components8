import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import "./Contact.css"
const Contact = () => {
    const { loginWithRedirect, logout,user, isAuthenticated } = useAuth0();

    const [users,setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name,value
    const data=(e)=>
    {
        name= e.target.name;
        value= e.target.value;
     setUser({...users, [name]: value})
    }
    const senddata = async (e) => 
    {
        const{ Name, Email, Subject, Message} = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = fetch('https://e--commerence-contact-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res)
        if(res)
        {
            alert("Your Message sent")
        }
        else
        {
            alert("An error occured")
        }
    }
  return (
    <>
    <div className='contact-container'>
        <div className='contant'>
            <h2># Contact us</h2>
            <div className='form'>
                <form method='POST'>
                <input type='text' name='Name' value={users.Name} placeholder='Enter Your full Name' required autoComplete='off' onChange={data}/>
                <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail'  autoComplete='off' onChange={data}/>
                <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject' autoComplete='off' onChange={data}/>
                <textarea name='Message' value={users.Message} placeholder='Your Message'  autoComplete='off' onChange={data}></textarea>                  
                
                {
                    isAuthenticated ?
                    <button type='submit' onClick={senddata}>Login to send</button>
                    :
                    <button type='submit' onClick={()=>loginWithRedirect()}>Login to send</button>

                }
                {/* <button type='submit' onClick={senddata}>Login to send</button> */}

                </form>


            </div>

        </div>

    </div>
      
    </>
  )
}

export default Contact
