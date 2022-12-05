import React, { Component } from "react"
import ClickerNavbar from "./ClickerNavbar"


class Clicker extends Component{
  render(){
    return(
      <section>
        <div className="Nav">
          <ClickerNavbar />
        </div>
        <div id="Title">
          <h1>Mouse Clicker</h1>
        </div>
      </section>
    )
  }
}


export default Clicker