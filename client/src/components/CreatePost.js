import axios from 'axios';
import React, { Component } from 'react';

export default class CreatePost extends Component{

  constructor(props){
    super(props);
    this.state={
      userid:"",
      uname:"",
      uemail:"",
      uphone:"",
      unic:"",

      idError:"",
      nameError:"",
      emailError:"",
      phoneError:"",
      nicError:""

    }
  }
  validate =() =>{
    let idError="";
    let nameError ="";
    let emailError="";
    let phoneError="";
    let nicError="";
  
    if(!this.state.userid){
       idError = "User Id is required!"
   }
   if(!this.state.uname){
       nameError = "Username is required to fill!"
   }
   if(!this.state.uemail){
       emailError = "User Email is required!"
   }
   if(!this.state.uphone){
       phoneError = "User Phone number is required to fill"
  }
  if(!this.state.unic){
      nicError = "User Nic number required!"
  }
  
    if(idError || nameError || emailError || phoneError || nicError ){
        this.setState({idError, nameError,emailError,phoneError,nicError,});
        return false;
    }

    return true;
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
    
    userid:"",
    uname:"",
    uemail:"",
    uphone:"",
    unic:""
    
    });
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const isValid = this.validate();
        if (isValid){

    const {userid,uname,uemail,uphone,unic} = this.state;

    const data ={
      userid:userid,
      uname:uname,
      uemail:uemail,
      uphone:uphone,
      unic:unic

    }

    console.log(data);

    axios.post("/post/save",data).then((res) =>{
      alert("User Details Added successfully");
      if(res.data.success){
        this.setState(
          {
            userid:"",
            uname:"",
            uemail:"",
            uphone:"",
            unic:"",


            idError:"",
            nameError:"",
            emailError:"",
            phoneError:"",
            nicError:""


          }
        )
      }
    })
  }
  }


  render() {
    return (
     <div className='col-md-8 mt-4 mx-auto'>
       <h1 className='h3 mb-3 font-weight-normal'> Create new User</h1>
       <form className='needs-validation' noValidate>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>UserID</label>
           <input type="text"
           className='form-control'
           name='userid'
           placeholder='Enter UserId'
           value={this.state.userid}
           onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
              {this.state.idError}
            </div>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>User Name</label>
           <input type="text"
           className='form-control'
           name='uname'
           placeholder='Enter User Name'
           value={this.state.uname}
           onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
              {this.state.nameError}
            </div>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Email</label>
           <input type="text"
           className='form-control'
           name='uemail'
           placeholder='Enter Email'
           value={this.state.uemail}
           onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
              {this.state.emailError}
            </div>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Phone</label>
           <input type="text"
           className='form-control'
           name='uphone'
           placeholder='Enter Phone Number'
           value={this.state.uphone}
           onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
              {this.state.phoneError}
            </div>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Nic</label>
           <input type="text"
           className='form-control'
           name='unic'
           placeholder='Enter Nic'
           value={this.state.unic}
           onChange={this.handleInputChange}/>
            <div style={{ color: "red" }}>
              {this.state.nicError}
            </div>
         </div>

         <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} 
         onClick={this.onSubmit}>
           <i className='far fa-check-square'></i>
           &nbsp;save
         </button>

         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         <button    type="reset"   className="btn btn-success" style={{ marginTop: '15px' }} 
          onClick={this.cancelCourse}>
             <i className="far fa-check-square"></i>
                &nbsp;   Reset  
        </button> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button className="btn btn-success"  style={{ marginTop: '15px' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'white'  }}>
            <i className="far fa-check-square"></i>
              &nbsp; Back</a>
        </button> 

        

       </form>
         
     </div>
      
    )
  }
}
