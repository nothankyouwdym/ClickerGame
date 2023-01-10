import React, { Component, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"



function App(){
    const [count,setCount] = useState(parseInt(localStorage.getItem("count")));
    const [boomerCount,setBoomerCount] = useState(parseInt(localStorage.getItem("boomercount")))
    const [babyCount,setBabyCount] = useState(parseInt(localStorage.getItem("babycount")))
    const [genzCount,setGenZCount] = useState(parseInt(localStorage.getItem("genzcount")))
    const [gamerCount,setGamerCount] = useState(parseInt(localStorage.getItem("gamercount")))

    const [boomerPrice,setBoomerPrice] = useState(30)
    const [babyPrice,setBabyPrice] = useState(80)
    const [genzPrice,setGenZPrice] = useState(120)
    const [gamerPrice,setGamerPrice] = useState(500)

    const [boomerBuyNewPrice,setBoomerBuyNewPrice] = useState(15);
    const [babyBuyNewPrice,setBabyBuyNewPrice] = useState(25);
    const [genzBuyNewPrice,setGenZBuyNewPrice] = useState(45);
    const [gamerBuyNewPrice,setGamerBuyNewPrice] = useState(80);

    const [cps,setCPS] = useState(parseInt(localStorage.getItem("cps")))

    

    const handleClick = () =>{
      setCount(parseInt(localStorage.getItem("count"))+1);
    }

    useEffect(() =>{
      localStorage.setItem("count", count)
    },[count])

    useEffect(() =>{
      localStorage.setItem("cps", cps)
    },[cps])

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
      setInterval(function (){
        setCount(0)
        setCPS(0);
      },1)
      localStorage.setItem("count", 0);
      localStorage.setItem("boomercount", 0)
      localStorage.setItem("babycount", 0)
      localStorage.setItem("genzcount", 0)
      localStorage.setItem("gamercount", 0)
      location.reload();
    }

    document.addEventListener("keypress", (event) =>{
      if(event.key === "Space"){
        setCount(count+1);
      }
    })

    const Boomer = () =>{
      if(count >= boomerPrice){
        setBoomerCount(parseInt(localStorage.getItem("boomercount"))+1);
        setCount(count-boomerPrice)
        setBoomerPrice(price => price+boomerBuyNewPrice)
        if(boomerCount >= 0){
          setInterval(function (){
            setCount(count => (count+1))
          },1000)
          setCPS(parseInt(localStorage.getItem("cps"))+1)
        }
      }
    }

 
    const Baby = () =>{
      if(count >= babyPrice){
        setBabyCount(parseInt(localStorage.getItem("babycount"))+1);
        setCount(count-babyPrice)
        setBabyPrice(babyPrice+babyBuyNewPrice);
        if(babyCount >= 0){
          setInterval(function (){
            setCount(count => (count+5))
          },3000)
                    setCPS(parseInt(localStorage.getItem("cps"))+5)
        }
      }
    }

    const GenZ = () =>{
      if(count >= genzPrice){
        setGenZCount(parseInt(localStorage.getItem("genzcount"))+1);
        setCount(count-genzPrice)
        setGenZPrice(genzPrice+genzBuyNewPrice);
        if(genzCount >= 0){
          setInterval(function (){
            setCount(count => (count+10))
          },2000)
          setCPS(parseInt(localStorage.getItem("cps"))+25)
        }
      }
    }


    const Gamer = () =>{
      if(count >= gamerPrice){
        setGamerCount(parseInt(localStorage.getItem("gamercount"))+1);
        setCount(count-gamerPrice)
        setGamerPrice(gamerPrice+gamerBuyNewPrice);
        if(gamerCount >= 0){
          setInterval(function (){
            setCount(count => (count+25))
          },1000)
          setCPS(parseInt(localStorage.getItem("cps"))+50)
        }
      }
    }
    return(
      <section>
        <div className="Nav">
          <Navbar />
        </div>
        <div id="Title">
          <h1>Spacebar Clicker</h1>
          <p>*click on the spacebar button to use spacebar(physical) do this again if you buy something clicks refer to the amount of clicks you need to get an item. If clicks don't show and say Nan when you start the game press reset at bottom of page. Also don't refresh the page due to the behaviour of a certain element I used in my script if you do it will reset the CPS the CPS will show but it won't actually go up. *</p>
        </div>

        <div id="Input">
          <h1>{count}</h1>
          <button onClick={handleClick} id="spacebar" autoFocus={true} >Spacebar</button>
          <div>
            <h1>CPS: {Math.floor(cps)}</h1>
          </div>
        </div>


        <div id="Shop">
        <h3>Boomer ({boomerPrice} clicks)</h3>
        <button onClick={Boomer}>Buy</button>
        <h4>Total: {boomerCount}</h4> 

        <h3>Baby ({babyPrice} clicks)</h3>
        <button onClick={Baby}>Buy</button>
        <h4>Total: {babyCount}</h4> 

        <h3>Gen Z Bozo ({genzPrice} clicks)</h3>
        <button onClick={GenZ}>Buy</button>
        <h4>Total: {genzCount}</h4> 

        <h3>Gamer ({gamerPrice} clicks)</h3>
        <button onClick={Gamer}>Buy</button>
        <h4>Total: {gamerCount}</h4> 
        </div>
        <div id="Input">
          <h1>Click here to reset your game.</h1>
          <button onClick={resetGame} id="reset">Reset Game</button>
        </div>
        <Outlet />
      </section>
      
    )
}




export default App