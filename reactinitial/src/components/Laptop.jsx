import React, { useState } from "react"
import '../style.css'
import { Button } from '@material-ui/core';

const Laptop = ({laptop}) => {
   const [isShown, setIsShown] = useState(false);
   const toggleDetails = () => {
      setIsShown(!isShown);
   } 

   return (
    
  <div>
<h2>{laptop.name}</h2>
{isShown && <p>Brand: {laptop.brand} Weight: {laptop.weigth}</p>}
     <Button color="primary" onClick={toggleDetails}>{isShown ? "Show less" : "Show more"}</Button>
    
</div>
   )
   }


export default Laptop;