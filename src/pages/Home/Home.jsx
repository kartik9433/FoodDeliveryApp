import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodItem from '../../components/FoodDisplay/FoodItem';

function Home() {
  const[category,setCategory] = useState("All");
  return (
    <div>
       <Header/>
       <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodItem category={category}/>
    </div>
  )
}

export default Home
