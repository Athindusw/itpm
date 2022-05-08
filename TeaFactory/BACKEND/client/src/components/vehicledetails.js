import React, { Component } from 'react'
import axios from 'axios'

import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

export default class vehicledetails extends Component{
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/Vehicle/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {

        <BrowserRouter>
                <div className="container">
                    <Navbar />

                </div>
            </BrowserRouter>

     
        const {Vehicle_no,Vehicle_Type,Drivername,Vehicle_Service_Date,Total_Fuel_Economy} = this.state.post;

        return (
            
            <div style={{marginTop:'20px'}}>
                <hr/>
            <h4>{Vehicle_no}</h4>
            <hr/><hr/>

            <dl className="row">
                {/* <dt className="col-sm-3">Income ID</dt>
                <dd className="col-sm-9">{Vehicle_no}</dd> */}

                <dt className="col-sm-3">Vehicle Type</dt>
                <dd className="col-sm-9">{Vehicle_Type}</dd>

                <dt className="col-sm-3">Driver name</dt>
                <dd className="col-sm-9">{Drivername}</dd>

                <dt className="col-sm-3">Service Date</dt>
                <dd className="col-sm-9">{Vehicle_Service_Date}</dd>

                <dt className="col-sm-3">Average Fuel Economy(L)</dt>
                <dd className="col-sm-9">{Total_Fuel_Economy}</dd>

                

            </dl>    

            <button className="btn btn-success">
                        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Home</a>
                        </button> 
            </div>
        )
    }
}

/* Vehicle_no:"",
Vehicle_Type:"",
Drivername:"",
Vehicle_Service_Date:"",
Total_Fuel_Economy:"", */
