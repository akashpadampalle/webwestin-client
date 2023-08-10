import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"


function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  return (
    <>
    <Navbar windowWidth={windowWidth}/>
    </>
  )
}

export default App
