import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

import PostDetails from './components/PostDetails'; 
import NavBar from './components/NavBar';
import UserReport from './components/UserReport';
import UserPDF from './components/UserPDF';

export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>

        <Route path="/report" component={UserReport}></Route>
        <Route path="./pdf" component={UserPDF}></Route>

      </div>
      
      </BrowserRouter>
      
    )
  }
}
