import React, { useContext } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext';
import Food from '../Food/Food';

function FoodItem({category}) {   
    const {food_list} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
         <h2>Top dishes near you</h2> 
         <div className="food-display-item">
            {
                food_list.map((item,idex)=>(
                    <Food 
                    key={idex} 
                    id={item.id}
                    foodName={item.name} 
                    image = {item.image}
                    price={item.price}
                    description={item.description}
                    category={item.category} 
                    />
                ))
            }
         </div>
    </div>
  )
}

export default FoodItem
