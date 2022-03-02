import React, { useEffect, useState } from "react"
import http from "axios"
import LoadingMask from "./components/LoadingMask"
import Laptop from "./components/Laptop"



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
