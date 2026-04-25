import React, { useState } from 'react'
import {assets} from "../../assets/admin_assets/assets"
import { assets1 } from '../../assets/frontend_assets/assets1'
import "./Navbar.css"

function Navbar() {
  const[color,setColor] = useState(false);
  const[detail ,setDetail] = useState("Home");
  return (
    <div className='Nav-container'>
       <img src={assets.logo} alt="" className='img-logo'/>
         <ul className='nav-mid'>
           <li onClick={()=>{setDetail("Home")}} className={detail == "Home" ?"active":""}>Home</li>
           <li onClick={()=>{setDetail("Menu")}} className={detail == "Menu" ?"active":""}>Menu</li>
           <li onClick={()=>{setDetail("ContactUs")}} className={detail == "ContactUs" ?"active":""}>ContactUs</li>
         </ul>  
         <div className='Nav-right'>
              <img src={assets1.search_icon} alt=""/>
              <img src={assets1.basket_icon} alt="" />
              <button className={color == false?"btn-signup":"btn-sing"} onClick={()=>setColor(!color)}>Sign in</button>
         </div>
    </div>
  )
}

export default Navbar
