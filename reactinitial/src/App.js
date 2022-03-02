import React, { useEffect, useState } from "react"
import http from "axios"
import LoadingMask from "./components/LoadingMask"
import Laptop from "./components/Laptop"
import { Button } from '@material-ui/core';



const App = () => {
  const [laptops, setLaptops] = useState(null);

  const load = async() => {
    const response = await http.get("https://demoapi.com/api/laptop")
    // console.group(response.data);
    setLaptops(response.data);
  }

useEffect(() => {
  load();
 }, []);

  
  const [isDescending, setDescending] = useState(false);
  const [isAscending, setAscending] = useState(false);

  const toggleDescending = () => {
    setDescending(!isDescending);
 } 

 const toggleAscending = () => {
  setAscending(!isAscending);
} 

  return (
    <div>
    
    <h1>Laptop API final exam</h1>
         {laptops ? 
      laptops.map((laptop, i) => (
      <Laptop laptop={laptop} key={i}/>
      ))
      : <LoadingMask />}
    </div>
  )
}

export default App
