import React, { Component, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"



function App(){
    const [count,setCount] = useState(parseInt(localStorage.getItem("count")));
    const [boomerCount,setBoomerCount] = useState(parseInt(localStorage.getItem("boomercount")))
    const [babyCount,setBabyCount] = useState(parseInt(localStorage.getItem("babycount")))
    const [genzCount,setGenZCount] = useState(parseInt(localStorage.getItem("genzcount")))
    const [gamerCount,setGamerCount] = useState(parseInt(localStorage.getItem("gamercount")))

    const [boomerPrice,setBoomerPrice] = useState(10)
    const [babyPrice,setBabyPrice] = useState(25)
    const [genzPrice,setGenZPrice] = useState(50)
    const [gamerPrice,setGamerPrice] = useState(100)

    const [buynewPrice,setBuyNewPrice] = useState(50);

    

    const handleClick = () =>{
      setCount(parseInt(localStorage.getItem("count"))+1);
    }

    useEffect(() =>{
      localStorage.setItem("count", count)
    },[count])

    useEffect(() =>{
      localStorage.setItem("boomercount", boomerCount)
    },[boomerCount])

    useEffect(() =>{
      localStorage.setItem("babycount", babyCount)
    },[babyCount])

    useEffect(() =>{
      localStorage.setItem("genzcount", genzCount)
    },[genzCount])

    useEffect(() =>{
      localStorage.setItem("gamercount", gamerCount)
    },[gamerCount])

    const resetGame = () =>{
      localStorage.setItem("count", 0);
      localStorage.setItem("boomercount", 0)
      localStorage.setItem("babycount", 0)
      localStorage.setItem("genzcount", 0)
      localStorage.setItem("gamercount", 0)
      location.reload();
    }

    document.addEventListener("keydown", (event) =>{
      if(event.key === "Space"){
        setCount(count+1);
      }
    })

    const Boomer = () =>{
      if(count >= boomerPrice){
        setBoomerCount(parseInt(localStorage.getItem("boomercount"))+1);
        setCount(count-boomerPrice)
      }
    }

    const Baby = () =>{
      if(count >= babyPrice){
        setBabyCount(parseInt(localStorage.getItem("babycount"))+1);
        setCount(count-babyPrice)
        setGamerPrice(babyPrice+buynewPrice);
      }
    }

    const GenZ = () =>{
      if(count >= genzPrice){
        setGenZCount(parseInt(localStorage.getItem("genzcount"))+1);
        setCount(count-genzPrice)
        setGamerPrice(genzPrice+buynewPrice);
      }
    }

    const Gamer = () =>{
      if(count >= gamerPrice){
        setGamerCount(parseInt(localStorage.getItem("gamercount"))+1);
        setCount(count-gamerPrice)
        setGamerPrice(gamerPrice+buynewPrice);
      }
    }
    return(
      <section>
        <div className="Nav">
          <Navbar />
        </div>
        <div id="Title">
          <h1>Spacebar Clicker</h1>
          <p>*click on the spacebar button to use spacebar(physical) do this again if you buy something*</p>
        </div>

        <div id="Input">
          <h1>{count}</h1>
          <button onClick={handleClick}>Spacebar</button>  
        </div>


        <div id="Shop">
        <h3>Boomer</h3>
        <button onClick={Boomer}>Buy</button>
        <h4>Total: {boomerCount}</h4> 

        <h3>Baby</h3>
        <button onClick={Baby}>Buy</button>
        <h4>Total: {babyCount}</h4> 

        <h3>Gen Z Bozo</h3>
        <button onClick={GenZ}>Buy</button>
        <h4>Total: {genzCount}</h4> 

        <h3>Gamer</h3>
        <button onClick={Gamer}>Buy</button>
        <h4>Total: {gamerCount}</h4> 
        </div>
        <div id="Input">
          <h1>Click here to reset your game.</h1>
          <button onClick={resetGame}>Reset Game</button>
        </div>
        <Outlet />
      </section>
      
    )
}




export default App