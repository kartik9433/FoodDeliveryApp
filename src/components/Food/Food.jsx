import React, { useState } from 'react'
import './Food.css'
import { assets1 } from '../../assets/frontend_assets/assets1'

function Food({id,foodName,image,price,description,category}) {
     const[itemCount,setItemCount] = useState(0);
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
               <img src={image} className='food-item-img'/>
               {
                !itemCount?<img className='add' 
                src={assets1.add_icon_white} alt=''
                 onClick={()=>setItemCount(prev=>prev+1)}/>:
                 <div className="food-item-container">
                   <img onClick={()=>setItemCount(prev=>prev-1)} src={assets1.remove_icon_red} alt="" className='img1' />
                   <p>{itemCount}</p>
                   <img onClick={()=>setItemCount(prev=>prev+1)}src={assets1.add_icon_green} alt=""  className='img2'/>
                 </div>
               }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{foodName}</p>
                <img src={assets1.rating_starts} alt="" />
            </div>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default Food
