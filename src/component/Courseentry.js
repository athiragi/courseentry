import { useState } from "react"
import Header from "./Header"


const Courseentry = () => {
    var [CourseTitle,setTitle]=useState("")
    var [Duration,setDuration]=useState("")
    var [Description,setDescription]=useState("")
    var [venue,setVenue]=useState("")
    var [date,setDate]=useState("")
    
    const subData=()=>{
        const data={"CouseTittle":CourseTitle,"Duration":Duration,"Description":Description,"venue":venue,"date":date}
        console.log(data)
    }
 
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">CourseTitle</label>
                    <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Duration</label>
                    <input type="text" className="form-control" onChange={(e)=>{setDuration(e.target.value)}}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <label for="" className="form-label">Description</label>
                       <textarea name="" id="" cols="30" rows="10" class="form-control" onChange={(e)=>{setDescription(e.target.value)}} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Venue</label>
                 <input type="text" className="form-control" onChange={(e)=>{setVenue(e.target.value)}} />
             </div>
             
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Date</label>
             <input type="date" name="" id="" class="form-control" onChange={(e)=>{setDate(e.target.value)}}/>
         </div>
      
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={subData}>Register</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Courseentry