import React, { useEffect, useState } from "react"
import http from "axios"
import LoadingMask from "./components/LoadingMask"

const App = () => {
  const [laptops, setLaptops] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const load = async() => {
    const response = await http.get("https://demoapi.com/api/laptop")
    // console.group(response.data);
    setLaptops(response.data);
  }

useEffect(() => {
  load();
  setTimeout(() => {
    setIsShown(true)
  }, 2 * 1000);

}, []);
  return (
    <div>
      Todo...
    </div>
  )
}

export default App
