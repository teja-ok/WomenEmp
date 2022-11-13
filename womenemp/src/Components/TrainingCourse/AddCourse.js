import React from 'react';
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { addTrainingCourse } from "../../Actions/TrainingCourseActions";
import {useNavigate} from 'react-router-dom';
import "../../Style/Course.css";
import NavAdmin from "../NavAdmin"

function AddCourse() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
    const initialValues = {trainingCourseId: 100, courseName : "", courseDuration : "", startingDate: "", endingDate: "", courseCompletionStatus: ""}
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
        dispatch(addTrainingCourse((formValues)));
        alert("Course Added!")
        navigate(`/admin/allcourses`)
      }
    },[formErrors])
  
    const validate = (value)=>{
      const errors = {}
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
      <div className='page'>
        <NavAdmin />
        <header className='back'>
          <h1 className='heading'>New Course Form :</h1></header>
      <div className='formBlock'>
        <form onSubmit={handleSubmit} className="color"> 
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label className='box'><b>Course Name:</b></label>
              <input
              className='boxsize'
                type="text"
                name="courseName"
                placeholder="Enter the Course Name"
                value={formValues.courseName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseName}</p>
            <div className="field">
              <label className='box'><b>Course Duration:</b></label>
              <input
              className='boxsize'
                type="text"
                name="courseDuration"
                placeholder="Enter the Duration of course"
                value={formValues.courseDuration}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseDuration}</p>
            <div className="field">
              <label className='box'><b>Starting Date:</b></label>
              <input
              className='boxsize'
                type="date"
                name="startingDate"
                placeholder="Start Date"
                value={formValues.startingDate}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.startingDate}</p>
            <div className="field">
              <label className='box'><b>Ending Date:</b></label>
              <input
              className='boxsize'
                type="date"
                name="endingDate"
                placeholder="End Date"
                value={formValues.endingDate}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.endingDate}</p>
            <div className="field">
              <label className='box'><b>Completion Status:</b></label>
              <input
              
                type="text"
                name="courseCompletionStatus"
                placeholder="Enter the completion Status of Course."
                value={formValues.courseCompletionStatus}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseCompletionStatus}</p>
            <button type='submit' className="btn btn-primary shadow mx-2">Submit</button>
            <button onClick={(e)=>{navigate('/admin')}}  className="btn btn-secondary mx-2">Back</button>
          </div>
          <div id='submitAfter'></div>
        </form>
        {/* <Link to='/signup'>SignUp</Link> */}
      </div>
      </div>
    );
}

export default AddCourse