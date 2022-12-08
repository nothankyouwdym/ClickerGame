import React, { Component } from "react"
import { Link } from "react-router-dom"

class Navbar extends Component{
  render(){

    return(
      <section>
        <nav>
          <div id="NavTitle">
            <h3>Nav</h3>
          </div>
          <div id="Links">
            <Link to="/" id="Link"><span>Home</span></Link>
           
          </div>
        </nav>
      </section>
    )
  }
}


export default Navbar