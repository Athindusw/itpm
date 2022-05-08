import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './NavBar';
import {BrowserRouter} from 'react-router-dom';//v

export default class CreatePost extends Component {

  constructor(props){
    super(props);
    this.state={
      stockId:"",
      noOfstocks:"",
      stockName:"",
      storeNumber:"",
      date:"",

      stockIdError:"",//v
      noOfstocksError:"",//v
      stockNameError:"",//v
      storeNumberError:"",//v
      dateError:""//v
    }
  }

  validate =() =>{//v
    let stockIdError="";
    let noOfstocksError ="";
    let stockNameError="";
    let storeNumberError ="";
    let dateError="";
   

    if(!this.state.stockId){
       stockIdError = "Field cannot be blank"
   }
   if(!this.state.noOfstocks){
       noOfstocksError = "Field cannot be blank"
   }
   if(!this.state.stockName){
       stockNameError = "Field cannot be blank"
   }
   if(!this.state.storeNumber){
       storeNumberError = "Field cannot be blank"
   }
   if(!this.state.date){
       dateError = "Field cannot be blank"//v
   }
  /*  if(!this.state.total_distance){
       faxError = "Field cannot be blank"
   }
   if(!this.state.total_distance){
       addresssError = "Field cannot be blank"
   }
   if(!this.state.cus_designation){
       designationError = "Field cannot be blank"
   }
   if(!this.state.cus_email.includes("@")){
       emailError = "Enter a valid email"
   } */
   if(stockIdError || noOfstocksError || stockNameError || storeNumberError || dateError){
    this.setState({stockIdError, noOfstocksError, stockNameError, storeNumberError, dateError});//v
    return false;
}

return true;//v
};


  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  cancelCourse = () => { 
    this.setState({
    
    stockId:"",
    noOfstocks:"",
    stockName:"",      //v
    storeNumber:"",
    date:"",
    });
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const {stockId,noOfstocks,stockName,storeNumber,date} = this.state;

    const data ={
      stockId:stockId,
      noOfstocks:noOfstocks,
      stockName:stockName,
      storeNumber:storeNumber,
      date:date
    }
    console.log(data)
    axios.post("/post/save",data).then((res)=>{
      alert("Details Added successfully");
      if(res.data.success){
        this.setState(
          {
            stockId:"",
            noOfstocks:"",
            stockName:"",
            storeNumber:"",
            date:"",

            stockIdError:"",
            noOfstocksError:"",//v
            stockNameError:"",
            storeNumberError:"",
            dateError:""
          }
        )
      }
    })
  }

  render() {
    return (
      <><BrowserRouter>
                <div className="container">
                    <Navbar />

                </div>
            </BrowserRouter>
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create New Stock</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Stock Id</label>
            <input type="number"
            className="form-control"
            name="stockId"
            placeholder="Enter Stock Id"
            value={this.state.stockId}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.stockIdError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Number of Stocks</label>
            <input type="number"
            className="form-control"
            name="noOfstocks"
            placeholder="Enter Number of Stocks"
            value={this.state.noOfstocks}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.noOfstocksError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Stock Name</label>
            <input type="text"
            className="form-control"
            name="stockName"
            placeholder="Enter Stock Name"
            value={this.state.stockName}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.stockNameError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Store Number</label>
            <input type="number"
            className="form-control"
            name="storeNumber"
            placeholder="Enter Store Number"
            value={this.state.storeNumber}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.storeNumberError}
            </div>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Date</label>
            <input type="date"
            className="form-control"
            name="date"
            placeholder="Enter the date"
            value={this.state.date}
            onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
                    {this.state.dateError}
            </div>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp;Save
          </button>

          &nbsp;
          &nbsp;

          <button    type="reset"   className="btn btn-warning" style={{ marginTop: '15px' }}  onClick={this.cancelCourse}>
          <i className="far fa-check-square"></i>
          &nbsp;   Reset  
          </button> 
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
          
          <button className="btn btn-warning">
          <a href="/" style={{ textDecoration: 'none',color:'black' }}>
          <i className="far fa-check-square"></i>
          &nbsp; Back</a>
          </button> 

          </form>
          
      </div></>
    )
  }
}




