import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
  render() {

    const {userid,uname,uemail,uphone,unic} = this.state.post;

    return (
     <div style={{marginTop:'20px'}}>
       <h4>{userid}</h4>
       <br></br>


       <dl className="row">
         <dt className='col-sm-3'>User Name</dt>
         <dd className='col-sm-9'>{uname}</dd>

         <dt className='col-sm-3'>Email</dt>
         <dd className='col-sm-9'>{uemail}</dd>

         <dt className='col-sm-3'>Phone</dt>
         <dd className='col-sm-9'>{uphone}</dd>

         <dt className='col-sm-3'>Nic</dt>
         <dd className='col-sm-9'>{unic}</dd>

       </dl>
        
     </div>
      
    )
  }
}