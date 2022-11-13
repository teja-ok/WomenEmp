import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import "../../Style/Course.css";

function UpdateCourse() {
    const navigate = useNavigate();
    // const {trainingCourseId} =useParams()
    const initialValues = {trainingCourseId : "", courseName : "", courseDuration : "", startingDate: "", endingDate: "", courseCompletionStatus: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e)=>{
      const {name, value} = e.target
      setFormValues({...formValues, [name] : value});
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues))
      setIsSubmit(true);
    }
    
  
    useEffect(()=>{
      console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit){
        axios
        .put(`http://localhost:8202/api/TrainingCourse`,formValues)
        .then((data) => {
            document.getElementById('updateAfter').innerHTML = 'Course Details Successfully Updated!'
            console.log(formValues.data)
            alert("Update Successful")
            navigate('/admin/allcourses')
        })
        .catch((error) => {document.getElementById('updateAfter').innerHTML = error.response.data.errorMessage});
      }
    },[formErrors])
  
    const validate = (value)=>{
      const errors = {}
      if(!value.trainingCourseId){
        errors.trainingCourseId = "Please provide Training Course Id !"
      }
      if(!value.courseName){
        errors.courseName = "Please provide courseName!"
      }
      if(!value.courseDuration){
        errors.courseDuration = "Please provide Course Duartion!"
      }
      if(!value.courseCompletionStatus){
        errors.courseCompletionStatus = "Please provide Completion Status!"
      }
      if(!value.startingDate){
        errors.startingDate = "Please provide Starting Date!"
      }
      if(!value.endingDate){
        errors.endingDate = "Please provide Ending Date!"
      }
      return errors;
    }
    return (
      <div >
        <header className='back1'>
          <h1 className='heading1'>Update Course Form :</h1></header>
      <div className='formBlock1'>
        <form onSubmit={handleSubmit} className='color2'>
          <div className="ui divider"></div>
          <div className="ui form">

          <div className="field">
              <label className='box2'>
              <b>Course Id:</b>
              <input
                type="text"
                name="trainingCourseId"
                placeholder="Enter the Course Id"
                value={formValues.trainingCourseId}
                onChange={handleChange}
              /></label>
            </div>
            <p>{formErrors.trainingCourseId}</p>

            <div className="field">
              <label className='box2'><b>Course Name:</b></label>
              <input
                type="text"
                name="courseName"
                placeholder="Enter the Course Name"
                value={formValues.courseName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseName}</p>
            <div className="field">
              <label className='box2'><b>Course Duration:</b></label>
              <input
                type="text"
                name="courseDuration"
                placeholder="Enter the Duration of course"
                value={formValues.courseDuration}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseDuration}</p>
            <div className="field">
              <label className='box2'><b>Starting Date:</b></label>
              <input
                type="date"
                name="startingDate"
                placeholder="Start Date"
                value={formValues.startingDate}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.startingDate}</p>
            <div className="field">
              <label className='box2'><b>Ending Date:</b></label>
              <input
                type="date"
                name="endingDate"
                placeholder="End Date"
                value={formValues.endingDate}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.endingDate}</p>
            <div className="field">
              <label className='box2'><b>Completion Status:</b></label>
              <input
                type="text"
                name="courseCompletionStatus"
                placeholder="Enter the completion Status of Course."
                value={formValues.courseCompletionStatus}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseCompletionStatus}</p>
            <button type='update' className="btn btn-primary mx-2">Update</button>
            <button onClick={(e)=>{navigate('/admin/allcourses')}} className="btn btn-secondary mx-2">Back</button>
          </div>
          <div id='updateAfter'></div>
        </form>
        {/* <Link to='/signup'>SignUp</Link> */}
      </div>
      </div>
    );
}

export default UpdateCourse