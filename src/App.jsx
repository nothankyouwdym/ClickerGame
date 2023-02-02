import React, { Component, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"



function App(){
    const [count,setCount] = useState(parseInt(localStorage.getItem("count")));
    const [boomerCount,setBoomerCount] = useState(parseInt(localStorage.getItem("boomercount")))
    const [babyCount,setBabyCount] = useState(parseInt(localStorage.getItem("babycount")))
    const [genzCount,setGenZCount] = useState(parseInt(localStorage.getItem("genzcount")))
    const [gamerCount,setGamerCount] = useState(parseInt(localStorage.getItem("gamercount")))
    const [aiCount,setAICount] = useState(parseInt(localStorage.getItem("aicount")))

    const [boomerPrice,setBoomerPrice] = useState(50)
    const [babyPrice,setBabyPrice] = useState(100)
    const [genzPrice,setGenZPrice] = useState(250)
    const [gamerPrice,setGamerPrice] = useState(1000)
    const [aiPrice,setAIPrice] = useState(5000)

    const [newspaperPrice,setNewspaperPrice] = useState(100000)
    const [milkPrice,setMilkPrice] = useState(300000)
    const [tiktok,setTikTokPrice] = useState(500000)
    const [mousePrice,setMousePrice] = useState(800000)
    const [internetPrice,setInternetPrice] = useState(1100000)

    const [newspaperCount,setNewspaperCount] = useState(0)
    const [milkCount,setMilkCount] = useState(0)
    const [tiktokCount,setTikTokCount] = useState(0)
    const [mouseCount,setMouseCount] = useState(0)
    const [internetCount,setInternetCount] = useState(0)



    const [boomerBuyNewPrice,setBoomerBuyNewPrice] = useState(50);
    const [babyBuyNewPrice,setBabyBuyNewPrice] = useState(100);
    const [genzBuyNewPrice,setGenZBuyNewPrice] = useState(150);
    const [gamerBuyNewPrice,setGamerBuyNewPrice] = useState(300);
    const [aiBuyNewPrice, setAIBuyNewPrice] = useState(750)


    const [bupgradeBuyNewPrice, setbUpgradeBuyNewPrice] = useState(200000)
    const [baupgradeBuyNewPrice, setbaUpgradeBuyNewPrice] = useState(400000)
    const [gupgradeBuyNewPrice, setgUpgradeBuyNewPrice] = useState(600000)
    const [gaupgradeBuyNewPrice, setgaUpgradeBuyNewPrice] = useState(800000)
    const [aupgradeBuyNewPrice, setaUpgradeBuyNewPrice] = useState(100000)

    const [cps,setCPS] = useState(parseInt(localStorage.getItem("cps")))


    window.addEventListener("beforeunload", function(event){
      event.returnValue = "Hi"
    })

    

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

    useEffect(() =>{
      localStorage.setItem("aicount", aiCount)
    }, [aiCount])

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
      localStorage.setItem("aicount", 0)
      location.reload();
    }

    document.addEventListener("keypress", (event) =>{
      if(event.key === "Space"){
        setCount(count+10000);
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
            setCount(count => (count+15))
          },3000)
          setCPS(parseInt(localStorage.getItem("cps"))+15)
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
            setCount(count => (count+40))
          },2000)
          setCPS(parseInt(localStorage.getItem("cps"))+40)
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
            setCount(count => (count+100))
          },1000)
          setCPS(parseInt(localStorage.getItem("cps"))+100)
        }
      }
    }

    const AI = () =>{
      if(count >= aiPrice){
        setAICount(parseInt(localStorage.getItem("aicount"))+1);
        setCount(count-aiPrice)
        setAIPrice(price => price+aiBuyNewPrice)
        if(aiCount >= 0){
          setInterval(function (){
            setCount(count => (count+225))
          },1000)
          setCPS(parseInt(localStorage.getItem("cps"))+225)
        }
      }
    }

    const BoomerSpecial = () =>{
      if(count >= newspaperPrice){
        setNewspaperCount(p => p + 1)
        setCount(count-newspaperPrice)
        setNewspaperPrice(price => price+bupgradeBuyNewPrice)
        setInterval(function (){
          setCount(count => (count+500))
        },1000)
          setCPS(parseInt(localStorage.getItem("cps"))+500)
      }
    }

    const BabySpecial = () =>{
      if (count >= milkPrice){
        setMilkCount(p => p + 1)
        setCount(count-milkPrice)
        setMilkPrice(baupgradeBuyNewPrice + milkPrice)
        setInterval(function (){
          setCount(count => (count+5000))
        },1000)
        setCPS(parseInt(localStorage.getItem("cps"))+5000)
      }
    }

    const GenZSpecial = () =>{
      if (count >= tiktok){
        setTikTokCount(p => p + 1)
        setCount(count-tiktok)
        setTikTokPrice(gupgradeBuyNewPrice + tiktok)
        setInterval(function (){
          setCount(count => (count+50000))
        },1000)
        setCPS(parseInt(localStorage.getItem("cps"))+50000)
      }
    }

    const GamerSpecial = () =>{
      if (count >= mousePrice){
        setMouseCount(p => p + 1)
        setCount(count-mousePrice)
        setMousePrice(gaupgradeBuyNewPrice + mousePrice)
        setInterval(function (){
          setCount(count => (count+100000))
        },1000)
        setCPS(parseInt(localStorage.getItem("cps"))+100000)
      }
    }

    const AISpecial = () =>{
      if (count >= internetPrice){
        setInternetPrice(p => p + 1)
        setCount(count-internetPrice)
        setInternetPrice(aupgradeBuyNewPrice + internetPrice)
        setInterval(function (){
          setCount(count => (count+1000000))
        },1000)
        setCPS(parseInt(localStorage.getItem("cps"))+1000000)
      }
    }

    return(
      <section id="main">
        <div id="Title">
          <h1>Spacebar Clicker</h1>
          <p>*click on the spacebar button to use spacebar(physical) do this again if you buy something clicks refer to the amount of clicks you need to get an item. If clicks don't show and say Nan when you start the game press reset at bottom of page.</p>
        </div>

        <div id="Input">
          <h1>{count}</h1>
          <button onClick={handleClick} id="spacebar" autoFocus={true} >Spacebar</button>
          <div>
            <h1 style={{position: "fixed", top: "60px"}}>CPS: {Math.floor(cps)}</h1>
          </div>
        </div>


        <div id="Shop">
          <div id="borderpro">
            <h3>Boomer ({boomerPrice} clicks)</h3>
            <h4>{(boomerCount + 1) * 1} cps</h4>
            <div id="btn-group">
              <button onClick={Boomer}>Buy</button>
              <h4>Total: {boomerCount}</h4>
              <h3>{newspaperPrice} clicks</h3>
              <button onClick={BoomerSpecial}>Newspaper: +500 CPS</button>
              <h4>Total: {newspaperCount}</h4>
            </div>
          </div>

         <div id="borderpro"> 
          <h3>Baby ({babyPrice} clicks)</h3>
          <h4>{(babyCount+ 1) * 15} cps</h4>
          <div id="btn-group">
            <button onClick={Baby}>Buy</button>
            <h4>Total: {babyCount}</h4>
            <h3>{milkPrice} clicks</h3>
            <button onClick={BabySpecial}>Milk: +5,000 cps</button>
            <h4>Total: {milkCount}</h4>
          </div>
        </div> 

        <div id="borderpro">
          <h3>Gen Z Bozo ({genzPrice} clicks)</h3>
          <h4>{(genzCount + 1) * 40} cps</h4>
          <div id="btn-group">
            <button onClick={GenZ}>Buy</button>
            <h4>Total: {genzCount}</h4> 
            <h3>{tiktok} clicks</h3>
            <button onClick={GenZSpecial}>TikTok: +50,000 cps</button>
            <h4>Total: {tiktokCount}</h4>
          </div>
        </div>

        <div id="borderpro">
        <h3>Gamer ({gamerPrice} clicks)</h3>
        <h4>{(gamerCount + 1) * 100} cps</h4>
        <div id="btn-group">
          <button onClick={Gamer}>Buy</button>
          <h4>Total: {gamerCount}</h4> 
          <h3>{mousePrice} clicks</h3>
          <button onClick={GamerSpecial}>Gaming mouse: +100,000 cps</button>
          <h4>Total: {mouseCount}</h4>
        </div>
        </div>

        <div id="borderpro">
          <h3>A.I ({aiPrice} clicks)</h3>
          <h4>{(aiCount + 1) * 225} cps</h4>
          <div id="btn-group">
            <button onClick={AI}>Buy</button>
            <h4>Total: {aiCount}</h4>
            <h3>{internetPrice} clicks</h3>
            <button onClick={AISpecial}>The Internet: +1,000,000 cps</button>
            <h4>Total: {internetCount}</h4>
          </div>
        </div>

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