import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';




export default class Editvehicle extends Component{



    constructor(props){
        super(props);
        this.state={

        
        Vehicle_no:"",
        Vehicle_Type:"",
        Drivername:"",
        Vehicle_Service_Date:"",
        Total_Fuel_Economy:"",

        noError:"",
        TypeError:"",
        nameError:"",
        serviceError:"",
        fuelError:""    
        
        }
    }

    validate =() =>{
        let noError="";
        let TypeError ="";
        let nameError="";
        let serviceError ="";
        let fuelError="";
       

        if(!this.state.Vehicle_no){
           noError = "Field cannot be blank"
       }
       if(!this.state.Vehicle_Type){
           TypeError = "Field cannot be blank"
       }
       if(!this.state.Drivername){
           nameError = "Field cannot be blank"
       }
       if(!this.state.Vehicle_Service_Date){
           serviceError = "Field cannot be blank"
       }
       if(!this.state.Total_Fuel_Economy){
           fuelError = "Field cannot be blank"
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

       
        if(noError || TypeError || nameError || serviceError || fuelError){
            this.setState({noError, TypeError, nameError, serviceError, fuelError,});
            return false;
        }

        return true;
   };


    handleInputChange=(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

       
        e.preventDefault();
        const id = this.props.match.params.id;

        
        const {Vehicle_no,Vehicle_Type,Drivername,avg_fuel_economy,Total_Fuel_Economy } = this.state;

        const data ={
            Vehicle_no: Vehicle_no,
            Vehicle_Type: Vehicle_Type,
            Drivername: Drivername,
            Vehicle_Service_Date: avg_fuel_economy,
            Total_Fuel_Economy: Total_Fuel_Economy,
        

            
    }

        console.log(data)

        axios.put(`http://localhost:8000/Vehicle/post/update/${id}`,data).then((res) =>{
             if(res.data.success){
                 alert("post updated successfully")


                 this.setState(
                   {
                    Vehicle_no: "",
                    Vehicle_Type: "",
                    Drivername: "",
                    Vehicle_Service_Datey: "",
                    Total_Fuel_Economy: "",

                    noError:"",
                    TypeError:"",
                    nameError:"",
                    serviceError:"",
                    fuelError:""    
            
            
                    
                   }  
                 )
             }
        })
    
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/Vehicle/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({

                   

                    Vehicle_no:res.data.post.Vehicle_no,
                    Vehicle_Type:res.data.post.Vehicle_Type,
                    Drivername:res.data.post.Drivername,
                    Vehicle_Service_Date:res.data.post. Vehicle_Service_Date,
                    Total_Fuel_Economy:res.data.post.Total_Fuel_Economy
                    


                    
                });

                console.log(this.state.post);
            }
        });
    }


   
    render() {
        return (
            <><BrowserRouter>
                <div className="container">
                    <Navbar />
                    <Navbar />

                </div>
            </BrowserRouter>
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">UPDATE VEHICLE</h1>&nbsp;
                    <form className="needs-validation" noValidate>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle no</label>
                            <input type="text"
                                className="form-control"
                                name="Vehicle_no"
                                placeholder="enter vehicle number"
                                value={this.state.Vehicle_no}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle Type</label>
                            <select className="form-control"
                                name="Vehicle_Type"
                                placeholder="Choose vehicle type"
                                value={this.state.Vehicle_Type}
                                onChange={this.handleInputChange} >
                                <option defaultValue>Choose Vehicle Type...</option>

                                <option> Delivery Vehicle </option>
                                <option> Transport Vehicle </option>
                                <option> Work Site Vehicle </option>
                                 </select>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Driver Name</label>
                            <input type="text"
                                className="form-control"
                                name="Drivername"
                                placeholder="enter Driver name"
                                value={this.state.Drivername}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle Service Date</label>
                            <input type="date"
                                className="form-control"
                                name="Vehicle_Service_Date"
                                placeholder="enter average fuel economy"
                                value={this.state.Vehicle_Service_Date}
                                onChange={this.handleInputChange} />
                        </div>

                       {/*  <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Rate</label>
                            <input type="text"
                                className="form-control"
                                name="Rate"
                                placeholder="enter Rate of the vehicle"
                                value={this.state.Rate}
                                onChange={this.handleInputChange} />
                        </div> */}

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Total Fuel Economy</label>
                            <input type="text"
                                className="form-control"
                                name="Total_Fuel_Economy"
                                placeholder="enter total destemce"
                                value={this.state.Total_Fuel_Economy}
                                onChange={this.handleInputChange} />
                        </div>



                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Save Changers
                        </button>


                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;




                        <button className="btn btn-success">
                        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Home</a>
                        </button> 

                    </form>

                </div></>
        )
    }

}