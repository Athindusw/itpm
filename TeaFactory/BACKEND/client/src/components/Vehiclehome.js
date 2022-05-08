import React, { Component } from 'react'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';


import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
//import { post } from '../../../BACKEND/routes/MachineRepairs';
export default class Vehiclehome extends Component {
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





  alert("Delected Successfully");


    axios.delete(`http://localhost:8000/Vehicle/post/delect/${id}`).then (() =>{
        alert("Delected Successfully");

       this.retreveVehicle();



    })
}  

/* onDelect = (id) => {

  
  


  alert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      }
    ]
  });


  alert("Delected Successfully");


    axios.delete(`http://localhost:8000/Vehicle/post/delect/${id}`).then (() =>{
        alert("Delected Successfully");

       



    })

};
 */




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
        
        <div className="container">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <p><center><h4> ALL VEHICLE DETAILS</h4></center></p>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  name="searchQuery"
                  onChange={this.handleSearchArea}>
                </input>
              </div>

            </div>

            <table className="table table-hover" style={{ marginTop: '40px' }}>
              <thead>
                <tr>
                <th scope="col">#</th>
                  <th scope="col">Vehicle No</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">Drivername</th>
                  <th scope="col">Service Date</th>
                  <th scope="col">Total Fuel Economy(L)</th>
                  <th scope="col">Action</th>
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
                    <td>
                      <a className="btn btn-warning" href={`/vedit/${Vehicle._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() => this.onDelect(Vehicle._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delect
                      </a>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            <button className="btn btn-success">
              <a href="/vadd" style={{ textDecoration: 'none', color: 'white' }}>
              <i className="far fa-check-square"></i>
              &nbsp;
                Add New Vehicle</a>
                
            </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <button className="btn btn-success">
              <a href="/report" style={{ textDecoration: 'none', color: 'white' }}>
              <i className="far fa-check-square"></i>
                &nbsp;Generate Report</a>
            </button>




          </div></>
      )
    }
    }
      


    
