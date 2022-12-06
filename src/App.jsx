import React, { Component, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"



function App(){
    const [count,setCount] = useState(parseInt(localStorage.getItem("count")));

    const handleClick = () =>{
      setCount(parseInt(localStorage.getItem("count"))+1);
    }

    useEffect(() =>{
      localStorage.setItem("count", count)
    },[count])

    const resetGame = () =>{
      localStorage.setItem("count", 0);
      location.reload();
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
          <p>*click on the spacebar button to use spacebar(physical)*</p>
        </div>

        <div id="Input">
          <h1>{count}</h1>
          <button onClick={handleClick}>Spacebar</button>

        <div id="Input">
          <button onClick={resetGame}>Reset</button>
        </div>
          
        </div>
        <Outlet />
      </section>
    )
}


export default App