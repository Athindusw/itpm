import React, { Component } from 'react';
import axios from 'axios';
export default class EditPost extends Component{

  constructor(props){
    super(props);
    this.state={
      userid:"",
      uname:"",
      uemail:"",
      uphone:"",
      unic:"",
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
    const {userid,uname,uemail,uphone,unic} = this.state;

    const data ={
      userid:userid,
      uname:uname,
      uemail:uemail,
      uphone:uphone,
      unic:unic
    }

    console.log(data);

    axios.put(`/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("User Details updated successfully")
        this.setState(
          {
            userid:"",
            uname:"",
            uemail:"",
            uphone:"",
            unic:""


          }
        )
      }
    })
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        
        this.setState({
  
          userid:res.data.post.userid,
          uname:res.data.post.uname,
          uemail:res.data.post.uemail,
          uphone:res.data.post.uphone,
          unic:res.data.post.unic,

        });
        console.log(this.state.post);
      }
    });
  }


  render() {
    return (
     <div className='col-md-8 mt-4 mx-auto'>
       <h1 className='h3 mb-3 font-weight-normal'> Edit User Details</h1>
       <form className='needs-validation' noValidate>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>UserId</label>
           <input type="text"
           className='form-control'
           name='userid'
           placeholder='Enter UserID'
           value={this.state.userid}
           onChange={this.handleInputChange}/>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>User Name</label>
           <input type="text"
           className='form-control'
           name='uname'
           placeholder='Enter User Name'
           value={this.state.uname}
           onChange={this.handleInputChange}/>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Email</label>
           <input type="text"
           className='form-control'
           name='uemail'
           placeholder='Enter Email Address'
           value={this.state.uemail}
           onChange={this.handleInputChange}/>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Phone No</label>
           <input type="text"
           className='form-control'
           name='uphone'
           placeholder='Enter Phone number'
           value={this.state.uphone}
           onChange={this.handleInputChange}/>
         </div>

         <div className='form-group' style={{marginBottom:'15px'}}>
           <label style={{marginBottom:'5px'}}>Nic</label>
           <input type="text"
           className='form-control'
           name='unic'
           placeholder='Enter Nic NO'
           value={this.state.unic}
           onChange={this.handleInputChange}/>
         </div>

         <button className='btn btn-success' type='submit' style={{marginTop:'15px'}}
         onClick={this.onSubmit}>
           <i className='far fa-check-square'></i>
           &nbsp;Update

         </button>
       </form>
         
     </div>
      
    )
  }
}