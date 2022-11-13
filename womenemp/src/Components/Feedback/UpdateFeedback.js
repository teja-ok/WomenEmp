import React, { useEffect, useState } from "react";
import "../../Style/style.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { updateFeedback } from "../../Actions/FeedbackActions";
import Nav from "../Nav";

function UpdateFeedback(){ 
  
    const feed = useSelector((state) => state.feedback);
    const d = new Date().toISOString().split("T")[0];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubmit, setIsSubmit] = useState(false);
    const initialValues = {feedBackId:100,schemeRating:null,schemeTrainingRating:null,overallRating:null,comment:"",date:d};
    const [formValues, setFormValues] = useState(feed);
    const [formErrors, setFormErrors] = useState({});
   

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value});
      }
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
          dispatch(updateFeedback(formValues));
          navigate("/feedback/home")
          alert("Successfully updated")
          }
    },[formErrors])

      const validate = (value)=>{
        const errors = {}
        if(!value.schemeRating){
          errors.schemeRating = "Please provide Scheme Rating"
        }
        if(!value.schemeTrainingRating){
          errors.schemeTrainingRating = "Please provide Scheme Training Rating"
        }
        if(!value.overallRating){
            errors.overallRating = "Please provide Overall Rating"
        }
        if(!value.comment){
            errors.comment = "Please provide Comments"
        } 
        return errors;
      }
    
    return(<div className="feedhome"><Nav/>

        <div className="feedback">
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Feedback added succesfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
            <h2>Update Feedback</h2>
            <form onSubmit={handleSubmit}>
                {/* <div><label>FeedbackID</label>
                <input type="number" 
                name="feedBackId"
                placeholder="Enter Feedback ID"
                onChange={handleChange}></input></div> */}
                {/* <div>
                    
                    <input type="number" name="schemeRating"></input>
                    <label>Scheme Rating</label>
                    <input type="number" name="schemeTrainingRating"></input>
                    <label>Scheme Rating</label>
                    <input type="number" name="overallRating"></input>
                    </div> */}
                    <div>
                        <label>Scheme Rating</label>
                <select
                required
                name="schemeRating"
                value={formValues.schemeRating}
                onChange={handleChange}>
                    {/* <option value="" disabled selected hidden>Select your option</option> */}
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select><p className="error">{formErrors.schemeRating}</p>
                
                    <label 
                    >Scheme Training Rating</label>
                <select
                required
                name="schemeTrainingRating"
                value ={formValues.schemeTrainingRating}
                onChange={handleChange}>
                    {/* <option value="" disabled selected hidden>Select your option</option> */}
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select><p className="error">{formErrors.schemeTrainingRating}</p>
                
                    <label >Overall Rating</label>
                <select
                required
                name="overallRating"
                value ={formValues.overallRating}
                onChange={handleChange}>
                    {/* <option value="" disabled selected hidden>Select your option</option> */}
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select><p className="error">{formErrors.overallRating}</p>
                  <label >Comments</label>
                <textarea
                required 
                type="text"
                onChange={handleChange}
                name="comment"
                value={formValues.comment}></textarea>
                <p className="error">{formErrors.comment}</p>
                    <button role="button">Submit</button>
                
                </div>
            </form>
        </div></div>
    )
}
export default UpdateFeedback;