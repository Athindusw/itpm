import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Navbar';
//import PDFIE from './PDFIE';
import Pdf from "react-to-pdf";
const ref = React.createRef();

export default class vehiclereport extends Component {
    constructor(props){
        super(props);

        this.state={
            Vehicle:([])

        };
    }

    componentDidMount(){
        this.retreveVehicle();
   }


   retreveVehicle(){
       axios.get("http://localhost:8000/Vehicle/Vehicles").then(res =>{
           if(res.data.success){
               this.setState({
                   Vehicle:res.data.existingVehicles
               });

               console.log(this.state.Vehicle)
           }


   });
   }

 

//delete operation -----------------------------------------------------------------------------

onDelect = (id) =>{
 alert("Delected Successfully eeeeeeeeeeeeee");


   axios.delete(`http://localhost:8000/Vehicle/post/delect/${id}`).then (() =>{
       alert("Delected Successfully");

      /*  this.retreveVehicle(); */



   })
}

//Search operation ------------------------------------------------------------------------------

filterdata(Vehicle,searcheKey){
   const result = Vehicle.filter((post) =>
   post.Vehicle_no.toLowerCase().includes(searcheKey)||
   post.Vehicle_Type.toLowerCase().includes(searcheKey)||
   post.Drivername.toLowerCase().includes(searcheKey)||
   post.Vehicle_Service_Date.toLowerCase().includes(searcheKey)
 /*   post.Total_Fuel_Economy.toLowerCase().includes(searcheKey)
   */
    
   ) 

   this.setState({Vehicle:result})

}


handleSearchArea = (e) =>{
 const searcheKey=  e.currentTarget.value;


 axios.get("http://localhost:8000/Vehicle/Vehicles").then(res =>{
           if(res.data.success){
               this.filterdata(res.data.existingVehicles,searcheKey)

           }
              

   });

}


    render() {
        return (
            <><BrowserRouter>
          <div className="container">
          <Navbar />
            

          </div>
        </BrowserRouter>
            <header class="site-header sticky-top py-1">

            </header>
            
            <div className="container">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
               
              </div>
             
            </div>


                    <div className="Post" ref={ref}>

                    <p><h4>    ALL VEHICLE DETAILS</h4></p>


                    
                        <table className="table table-hover" style={{ marginTop: '40px' }}>
              <thead>
                <tr>
                <th scope="col">#</th>
                  <th scope="col">Vehicle No</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">Drivername</th>
                  <th scope="col">Service Date</th>
                  <th scope="col">Total Fuel Economy(L)</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                 
                </tr>
              </thead>

              <tbody>
                {this.state.Vehicle.map((Vehicle, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>

                    <td>

                      <a href={`/vpost/${Vehicle._id}`} style={{ textDecoration: 'none' }}>
                        {Vehicle.Vehicle_no}
                      </a>
                    </td>

                    <td>{Vehicle.Vehicle_Type}</td>
                    <td>{Vehicle.Drivername}</td>
                    <td>{Vehicle.Vehicle_Service_Date}</td>
                    <td>{Vehicle.Total_Fuel_Economy}</td>
                   

                  </tr>

                ))}

              </tbody>

            </table>

          

           
                            </div>
                    
                    <button className="btn btn-success">
                        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>Back to the Home</a></button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


                    <Pdf targetRef={ref} filename="VehicleReport.pdf">
                    {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Capture report as PDF</button>}
                     </Pdf>
                     </div>
                
                
                </>
        )
    }
}