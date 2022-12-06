import React, { Component, useState } from "react"
import { Outlet } from "react-router-dom"
import Boomer from "./Boomer";
import Navbar from "./Navbar"



function App(){
    const [count,setCount] = useState(0);

    const handleClick = () =>{
      setCount(count+1);
    }

    document.addEventListener("keydown", (event) =>{
      if(event.key === "Space"){
        setCount(count+1);
      }
    })
    return(
      <section>
        <div className="Nav">
          <Navbar />
        </div>
        <div id="Title">
          <h1>Spacebar Clicker</h1>
          <p>*click on the button to use spacebar*</p>
        </div>

        <div id="Input">
          <h1>{count}</h1>
          <button onClick={handleClick}>Spacebar</button>
        </div>
        <Outlet />
      </section>
    )
}


export default App