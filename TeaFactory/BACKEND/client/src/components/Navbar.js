import React, { Component } from 'react'



export default class Navbar extends Component{
    render(){
        return (


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item ">
        <a className="nav-link"  aria-current="page" href="/HH">Main Home</a>
        </li>
        <li className="nav-item ">
        <a className="nav-link"  aria-current="page" href="/MH">My Home</a>
        </li>
     {/*  <li className="nav-item ">
        <a className="nav-link"  aria-current="page" href="/mah">Machine</a>
      </li> */}
      <li className="nav-item ">
        <a className="nav-link"  aria-current="page" href="/">Vehicle</a>
      </li>
    </ul>
  </div>
</nav>

        )
    }
}