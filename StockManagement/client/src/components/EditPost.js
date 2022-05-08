import React, { Component } from 'react'
import axios from 'axios';

export default class EditPost extends Component {

  constructor(props){
    super(props);
    this.state={
      stockId:"",
      noOfstocks:"",
      stockName:"",
      storeNumber:"",
      date:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const id = this.props.match.params.id;
    const {stockId,noOfstocks,stockName,storeNumber,date} = this.state;

    const data ={
      stockId:stockId,
      noOfstocks:noOfstocks,
      stockName:stockName,
      storeNumber:storeNumber,
      date:date
    }
    console.log(data)
    axios.put(`/post/update/${id}`,data).then((res)=>{
      if(res.data.success){
        alert("Stock updated sucessfully")
        this.setState(
          {
            stockId:"",
            noOfstocks:"",
            stockName:"",
            storeNumber:"",
            date:""
          }
        )
      }
    })
  }


  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`/post/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
              stockId:res.data.post.stockId,
              noOfstocks:res.data.post.noOfstocks,
              stockName:res.data.post.stockName,
              date:res.data.post.date
              
            });
            console.log(this.state.post);
        }
    });
}



  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update the Stock</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Stock Id</label>
            <input type="number"
            className="form-control"
            name="stockId"
            placeholder="Enter Stock Id"
            value={this.state.stockId}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Number of Stocks</label>
            <input type="number"
            className="form-control"
            name="noOfstocks"
            placeholder="Enter Number of Stocks"
            value={this.state.noOfstocks}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Stock Name</label>
            <input type="text"
            className="form-control"
            name="stockName"
            placeholder="Enter Stock Name"
            value={this.state.stockName}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Store Number</label>
            <input type="number"
            className="form-control"
            name="storeNumber"
            placeholder="Enter Store Number"
            value={this.state.storeNumber}
            onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Date</label>
            <input type="date"
            className="form-control"
            name="date"
            placeholder="Enter the date"
            value={this.state.date}
            onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp;Update
          </button>

          </form>
          
      </div>
    )
  }
}
