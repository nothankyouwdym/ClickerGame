import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"



class App extends Component{
  render(){
    return(
      <section>
        <div className="Nav">
          <Navbar />
        </div>
        <div id="Title">
          <h1>Spacebar Clicker</h1>
        </div>
        <Outlet />
      </section>
    )
  }
}


export default App