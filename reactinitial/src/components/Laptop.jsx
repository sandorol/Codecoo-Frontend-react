import React, { useState } from "react"
import '../style.css'

const Laptop = ({laptop}) => {
   const [isShown, setIsShown] = useState(false);
   const toggleDetails = () => {
      setIsShown(!isShown);
   } 

   return (
    
  <div>
<h2>{laptop.name}</h2>
{isShown && <p>Brand: {laptop.brand} Weight: {laptop.weigth}</p>}
     <button onClick={toggleDetails}>{isShown ? "Show less" : "Show more"}</button>
    
</div>
   )
   }


export default Laptop;