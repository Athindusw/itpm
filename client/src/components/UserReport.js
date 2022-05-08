import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter,Route} from 'react-router-dom';
//import Navbar from './Navbar';
//import PDFIE from './PDFIE';
import Pdf from "react-to-pdf";
const ref = React.createRef();

export default class UserReport extends Component {
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
            <><BrowserRouter>
          <div className="container">
        
            

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

                    <p><h4>    ALL USER DETAILS</h4></p>
            


                    
                    <table className ="table">
              <thead>
                <tr>
                  <th width="1" scope="col">#</th>
                  <th width="100" scope="col">User ID</th>
                  <th width="220" scope="col">User Name</th>
                  <th width="210" scope="col">Email</th>
                  <th width="100" scope="col">Phone</th>
                  <th width="100" scope="col">Nic</th>
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
                  {/* <th scope="col">Action</th> */}
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
                    {/* <td>
                       <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() => this.onDelect(posts._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delect
                      </a> 
                    </td> */}

                  </tr>

                ))}

              </tbody>

            </table>

          

           
                            </div>
                    
                    <button className="btn btn-success">
                        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>Back to the Home</a></button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


                    <Pdf targetRef={ref} filename="UserReport.pdf">
                    {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Capture report as PDF</button>}
                     </Pdf>
                     </div>
                
                
                </>
        )
    }
}