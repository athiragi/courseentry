import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Courseview = () => {
    var [course,setCourse]=useState([])
    axios.get("http://mylinkurcodesapp.herokuapp.com/getcourses").then(
        (response)=>{
            console.log(response.data)
            setCourse(response.data)

        }
    )

         return (
      
    <div>
        <Header/>
        <div className="container">
 <div className="row">
     <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
  <div className="row g-3">
  <div className='col col-12 col-sm-12 col-md-12 col-lg-12'>
  <table class="table table-success">
                     <thead>
                         <tr>
                            
                             <th scope="col">Titile</th>
                             <th scope="col">Description</th>
                             <th scope="col">Venue</th>
                             <th scope="col">Date</th>
                         </tr>
                     </thead> 
  <tbody>   
  {course.map((value,key)=>{
             return <tr>      
    
    <td>{value.courseTitle}</td>
    <td>{value.courseDescription}</td>
    <td>{value.courseVenue}</td>
    <td>{value.courseDate}</td>
     
    </tr>


         } )}
           </tbody>
</table>
         </div>    
           </div>
           </div>
           </div>
           </div>
           </div>
    
  )
}

export default Courseview