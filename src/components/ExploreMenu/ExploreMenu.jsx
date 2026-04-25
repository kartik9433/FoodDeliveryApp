import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/frontend_assets/assets1'

function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
         <h1>Explore our menu</h1>
         <p className='explore-menu-text'>Explore our delicious menu, crafted to satisfy every taste with fresh and flavorful dishes.</p>
         <div className="explore-menu-list">
           {
            menu_list.map((item,idx)=>(
                  <div onClick={()=>setCategory(prev=>prev===item.menu_name==="All"?"All":item.menu_name)} key={idx} className="explore-menu-list-item">
                      <img className={category === item.menu_name?"active":""} src={item.menu_image}/>
                      <p>{item.menu_name}</p>
                  </div>
                  ))
           }
         </div>
    </div>
  )
}

export default ExploreMenu
