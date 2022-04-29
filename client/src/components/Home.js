
import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            posts:([])

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

    onDelect = (id) =>{
      axios.delete(`/post/delete/${id}`).then((res) =>{
        alert("Deleted Successfully..");
        this.retrievePosts();

      })
    }

    filterData(posts,searchKey){
      const result = posts.filter((post) =>
      post.userid.toLowerCase().includes(searchKey) ||
      post.uname.toLowerCase().includes(searchKey) ||
      post.uemail.toLowerCase().includes(searchKey) ||
      post.uphone.toLowerCase().includes(searchKey) ||
      post.unic.toLowerCase().includes(searchKey) 

      )

      this.setState({posts:result})
    }

    handlesearchArea = (e) =>{
      const searchKey = e.currentTarget.value;

      axios.get("/posts").then(res =>{
        if(res.data.success){

          this.filterData(res.data.existingPosts,searchKey)
        }
      });
    }
  

  render() {
      return (
        <div className="container">
          <div className='row'>
            <div className='col-lg-9 mt-2 mb-2'>
              <h4>All Users</h4>
            </div>
            <div className='col-lg-3 mt-2 mb-2'>
              <input 
              className='form-control'
              type="search"
              placeholder='Search'
              name='searchQuery'
              onChange={this.handlesearchArea}>
              </input>

            </div>
          </div>

              <table className ="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User ID</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Nic</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {this.state.posts.map((posts, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1 }</th>
                    <td>
                        <a href={`/post/${posts._id}`} style={{textDecoration: 'none'}} >
                        {posts.userid}
                        </a>
                        
                        </td>
                    <td>{posts.uname}</td>
                    <td>{posts.uemail}</td>
                    <td>{posts.uphone}</td>
                    <td>{posts.unic}</td>
                    <td>
                       <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() => this.onDelect(posts._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delect
                      </a> 
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            <button className="btn btn-success">
              <a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Add New User</a>
            </button> &nbsp;
            <br></br>
            <br></br>

            <button className="btn btn-secondary">
              <a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Report generate</a>
            </button> &nbsp;

         
     </div>
      )
  }
}








    
