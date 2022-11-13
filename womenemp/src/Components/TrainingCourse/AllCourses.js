import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../Style/Course.css";
import NavAdmin from "../NavAdmin";

function AllCourses() {
  const[courses,setCourses] = useState([])
  const{trainingCourseId} = useParams()

  useEffect (()=>{
    loadCourses();
},[])
const loadCourses = async ()=>{
    const result = await axios.get('http://localhost:8202/api/TrainingCourse')
    console.log(result.data);
    setCourses(result.data);
    
    
};
const deleteCourse= async (trainingCourseId)=> {
    await axios.delete(`http://localhost:8202/api/TrainingCourse/${trainingCourseId}`)
    loadCourses();
}
  return (
    
    <div >
      <NavAdmin />
      <header className='back2'>
          <h1 className='heading2'>Courses Available are:</h1></header>
        <div className='py-4 pos'>
        <table className ="table table-hover border shadow table-striped">
        <thead>
    <tr className="tableheadcolor">
      <th scope="col">Id</th>
      <th scope="col">Course Name</th>
      <th scope="col">Completion Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        courses.map((course,trainingCourseId)=>(
            <tr>
        <th className="rowstyle" scope="row" key={course.trainingCourseId}>{course.trainingCourseId}</th>
        <td className="rowstyle">{course.courseName}</td>
        <td className="rowstyle">{course.courseCompletionStatus}</td>
        <td > 
            <Link to={`/admin/allcourses/coursedetails/${course.trainingCourseId}`} className="btn btn-primary border shadow mx-2">View</Link>
            <Link to ={`/admin/updatecourse/${course.trainingCourseId}`} className="btn btn-outline-primary shadow mx-2">Update</Link>
            <button className="btn btn-danger border shadowmx-2" onClick={()=>deleteCourse(course.trainingCourseId)}>Delete</button>
        </td>
        </tr>
        ))
    }
    
    
  </tbody>
</table>
        </div>
        <Link to={`/admin`} className="btn btn-primary border shadow mx-2">Other Actions</Link>
    </div>
    
  )
    
}

export default AllCourses;