import React, { Component } from 'react'
import axios from 'axios'

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }


  render() {
      const {stockId,noOfstocks,stockName,storeNumber,date} = this.state.post;
    return (
      <div style={{marginTop:'20px'}}>
         <h4>Stock Details</h4>
         <hr/>
         <d1 className="row">
             <dt className='col-sm-3'>Stock Id</dt>
             <dd className='col-sm-9'>{stockId}</dd>

             <dt className='col-sm-3'>Number of Stocks</dt>
             <dd className='col-sm-9'>{noOfstocks}</dd>

             <dt className='col-sm-3'>Stock Name</dt>
             <dd className='col-sm-9'>{stockName}</dd>

             <dt className='col-sm-3'>Store Number</dt>
             <dd className='col-sm-9'>{storeNumber}</dd>

             <dt className='col-sm-3'>Date</dt>
             <dd className='col-sm-9'>{date}</dd>

         </d1>
      </div>
    )
  }
}
