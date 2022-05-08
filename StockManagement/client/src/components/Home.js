import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res =>{
   if(res.data.success){
     this.setState({
       posts:res.data.existingPosts
     });

     console.log(this.state.posts)
   } 
  });
}

onDelete = (id) =>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Deleted successfully")
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.stockId.includes(searchKey)||
  post.stockName.toLowerCase().includes(searchKey)||
  post.date.includes(searchKey)
  )
  this.setState({posts:result})
}

handleSearchArea = (e) =>{
  const searchKey=e.currentTarget.value;
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchKey)
    } 
   });
}

  render() {
    return (
      <div className="container">
       <p>Stock Details</p>
       <div className="row">
         <div className="col-lg-9 mt-2 mb-2">
           <h4>All Stocks</h4>
         </div>
         <div className="col-lg-3 mt-2 mb-2">
           <input
           className="form-control"
           type="search"
           placeholder="Search"
           name="searchQuery"
           onChange={this.handleSearchArea}>

           </input>
         </div>
       </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Stock Id</th>
              <th scope="col">Number of Stocks</th>
              <th scope="col">Stock Name</th>
              <th scope="col">Store Number</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index)=>(
              <tr>
              <th scope="row">{index+1}</th>
              <td>
                  <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}> 
                   {posts.stockId}
                   </a>
             </td>
              <td>{posts.noOfstocks}</td>
              <td>{posts.stockName}</td>
              <td>{posts.storeNumber}</td>
              <td>{posts.date}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
            ))}
          </tbody>
        </table> 
        <button className="btn btn-success"  ><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Stock</a></button>       
    </div>  
    )
  }
}
