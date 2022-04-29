import React, { Component } from 'react';

export default class NavBar extends Component{
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}

    <button class="navbar-toggler" type="button"
     data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" 
      aria-label="Toggle navigation">
      
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/"><b><h4>Users</h4></b></a>
        </li>
      </ul>


      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}


    </div>
  </div>
</nav>
     
      
    )
  }
}