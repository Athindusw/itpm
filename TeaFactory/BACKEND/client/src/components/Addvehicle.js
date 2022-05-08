import React, { Component } from 'react'
import axios from 'axios'

import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

export default class Addvehicle extends Component{

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

    cancelCourse = () => { 
        this.setState({
        
        Vehicle_no:"",
        Vehicle_Type:"",
        Drivername:"",
        Vehicle_Service_Date:"",
        Total_Fuel_Economy:"",
        });
      }

   

    onSubmite = (e) =>{
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){

        const {Vehicle_no,Vehicle_Type,Drivername,Vehicle_Service_Date,Total_Fuel_Economy} = this.state;

        const data ={
                Vehicle_no:Vehicle_no,
                Vehicle_Type:Vehicle_Type,
                Drivername:Drivername,
                Vehicle_Service_Date:Vehicle_Service_Date,
                Total_Fuel_Economy:Total_Fuel_Economy
                
        }

        console.log(data)

        axios.post("http://localhost:8000/Vehicle/add",data).then((res) =>{
            alert("Vehicle Details Added successfully");
             if(res.data.success){
                 this.setState(
                   {
                   
                   /*  Vehicle_no: "",
                    Income_ID: "",
                    Drivername: "",
                    avg_fuel_economy: "",
                    Rate: "",
                    total_distance: "",
                    idError:"",
           nameError:"",
           dobError:"",
           emailError:"",
           phoneError:"",
           faxError:"",
           addresssError:"",
           designationError:"" */

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


                   }  )
             }
        })

    }
    }

    render() {
        return (

            <><BrowserRouter>
                <div className="container">
                    <Navbar />

                </div>
            </BrowserRouter><div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">ADD NEW VEHICLE</h1>&nbsp;

                    <form className="needs-validation" noValidate>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle No</label>
                            <input type="text"
                                className="form-control"
                                name="Vehicle_no"
                                placeholder="Enter vehicle number   eg:NS5738"
                                value={this.state.Vehicle_no}
                                onChange={this.handleInputChange} />
                             <div style={{ color: "red" }}>
                                 {this.state.noError}
                             </div>
                        </div>

                        {/*  <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle Type</label>
                            <input type="text"
                                className="form-control"
                                name="Vehicle_Type"
                                placeholder="Choose vehicle type"
                                value={this.state.Vehicle_Type}
                                onChange={this.handleInputChange} />
                             <div style={{ color: "red" }}>
                                 {this.state.TypeError}
                             </div>
                        </div>  */}

                        

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
                            <div style={{ color: "red" }}>
                                 {this.state.TypeError}
                             </div>
                        </div> 





                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Driver Name</label>
                            <input type="text"
                                className="form-control"
                                name="Drivername"
                                placeholder="Enter Driver name   (eg:Weerasingha)"
                                value={this.state.Drivername}
                                onChange={this.handleInputChange} />
                             <div style={{ color: "red" }}>
                                 {this.state.nameError}
                             </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Vehicle Service Date</label>
                            <input type="date"
                                className="form-control"
                                name="Vehicle_Service_Date"
                                placeholder="Enter vehicle service date  eg:2022-04-23"
                                value={this.state.Vehicle_Service_Date}
                                onChange={this.handleInputChange} />
                             <div style={{ color: "red" }}>
                                 {this.state.serviceError}
                             </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Average Fuel Economy(L)</label>
                            <input type="text"
                                className="form-control"
                                name="Total_Fuel_Economy"
                                placeholder="Enter average fuel economy       (eg:350)"
                                value={this.state.Total_Fuel_Economy}
                                onChange={this.handleInputChange} />

                            <div style={{ color: "red" }}>
                                 {this.state.fuelError}
                             </div>
                        </div>

                      {/*   <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Total Destance</label>
                            <input type="text"
                                className="form-control"
                                name="total_distance"
                                placeholder="enter total destemce"
                                value={this.state.total_distance}
                                onChange={this.handleInputChange} />
                        </div>

 */}

                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmite}>
                            <i className="far fa-check-square"></i>
                            &nbsp;Add Details
                        </button>
                        &nbsp;
                        &nbsp;

                         <button    type="reset"   className="btn btn-success" style={{ marginTop: '15px' }}  onClick={this.cancelCourse}>
                         <i className="far fa-check-square"></i>
                         &nbsp;   Reset  
                        </button> 
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  




                        <button className="btn btn-success">
                        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Home</a>
                        </button> 

                       
                        

                    </form>


                </div></>
        );
    }
}