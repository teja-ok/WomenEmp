import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../../Style/Course.css";
import NavAdmin from "../NavAdmin"
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { updateNgo } from '../../Actions/NgoActions';

function UpdateNgo() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
      const initialValues = {ngoId: "", ngoName : "", ngoLocation : "", ngoType: "", ngoMotive: "", donation: "",ngoActivities:""}
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e)=>{
        const {name, value} = e.target
        if(e.name === "donation" || e.name === "ngoSize" || e.name === "ngoId")
        setFormValues({...formValues, [name] : parseInt(value)});
        else
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
          dispatch(updateNgo((formValues)));
          alert("NGO Updated!")
          navigate(`/admin/viewallngo`)
        }
      },[formErrors])
    
      const validate = (value)=>{
        const errors = {}
        if(!value.ngoId){
            errors.ngoId = "Please provide NGO Id!"
          }
        if(!value.ngoName){
          errors.ngoName = "Please provide NGO Name!"
        }
        if(!value.ngoLocation){
          errors.ngoLocation = "Please provide NGO Location!"
        }
        if(!value.ngoType){
          errors.ngoType = "Please provide NGO Type!"
        }
        if(!value.ngoMotive){
          errors.ngoMotive = "Please provide NGO Motive!"
        }
        if(!value.donation){
          errors.donation = "Please provide Donation!"
        }
        if(!value.ngoSize){
            errors.ngoSize = "Please provide NGO Size!"
          }
        if(!value.ngoActivities){
            errors.ngoActivities = "Please provide NGO Activities!"
          }
        return errors;
      }

    return ( 
        <div className='page'>
        <NavAdmin />
        <header className='back'>
          <h1 className='heading'>Update NGO Form :</h1></header>
      <div className='formBlock'>
        <form onSubmit={handleSubmit} className="color"> 
          <div className="ui divider"></div>
          <div className="ui form">
          <div className="field">
              <label className='box'><b>NGO Id:</b></label>
              <input
              className='boxsize'
                type="text"
                name="ngoId"
                placeholder="Enter the NGO Id"
                value={formValues.ngoId}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoId}</p>
            <div className="field">
              <label className='box'><b>NGO Name:</b></label>
              <input
              className='boxsize'
                type="text"
                name="ngoName"
                placeholder="Enter the NGO Name"
                value={formValues.ngoName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoName}</p>
            <div className="field">
              <label className='box'><b>NGO Location:</b></label>
              <input
              className='boxsize'
                type="text"
                name="ngoLocation"
                placeholder="Enter the Location of NGO"
                value={formValues.ngoLocation}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoLocation}</p>
            <div className="field">
              <label className='box'><b>NGO Type:</b></label>
              <input
              className='boxsize'
                type="text"
                name="ngoType"
                placeholder="NGO Type"
                value={formValues.ngoType}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoType}</p>
            <div className="field">
              <label className='box'><b>NGO Motive:</b></label>
              <input
              className='boxsize'
                type="text"
                name="ngoMotive"
                placeholder="NGO Motive"
                value={formValues.ngoMotive}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoMotive}</p>
            <div className="field">
              <label className='box'><b>Donation:</b></label>
              <input
              
                type="text"
                name="donation"
                placeholder="Enter the Donation."
                value={formValues.donation}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.donation}</p>
            <div className="field">
              <label className='box'><b>NGO Size:</b></label>
              <input
              
                type="text"
                name="ngoSize"
                placeholder="Enter the NGO Size."
                value={formValues.ngoSize}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoSize}</p>
            <div className="field">
              <label className='box'><b>NGO Size:</b></label>
              <input
              
                type="text"
                name="ngoSize"
                placeholder="Enter the NGO Size."
                value={formValues.ngoSize}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoSize}</p>
            <div className="field">
              <label className='box'><b>NGO Activities:</b></label>
              <input
              
                type="text"
                name="ngoActivities"
                placeholder="Enter the NGO Activities."
                value={formValues.ngoActivities}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.ngoActivities}</p>
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

export default UpdateNgo;
