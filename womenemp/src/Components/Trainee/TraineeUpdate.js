import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateTrainee } from '../../Actions/TraineeActions';
import { useEffect, useState } from "react";

function TraineeUpdate() {

    const trainee = useSelector((state) => state.trainee)
    const navigate = useNavigate()
    const dispatch = useDispatch();
  
  const [formValues, setFormValues] = useState(trainee);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      dispatch(updateTrainee(formValues));
      navigate("/home")
      alert("Successfully updated")
    }
  },[formErrors])

  const validate = (value) => {
    const errors = {};
    if (!value.userName) {
      errors.userName = "Please provide username";
    }
    if (!value.password) {
      errors.password = "Please provide password";
    } else if (value.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!value.firstName) {
      errors.firstName = "Please provide firstname";
    }
    if (!value.lastName) {
      errors.lastName = "Please provide lastname";
    }
    if (!value.location) {
      errors.location = "Please provide location";
    }
    if (!value.contact) {
      errors.contact = "Please provide contact";
    }
    if (!value.email) {
      errors.email = "Please provide email";
    }
    if (!value.familyInfo) {
      errors.familyInfo = "Please provide family info";
    }
    if (!value.aadharNo) {
      errors.aadharNo = "Please provide Aadhar Number";
    }
    if (!value.dob) {
      errors.dob = "Please provide DOB";
    }
    return errors;
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="formView">
        <h1>Update User</h1>
        

        <div className="field">
          <label>Username</label>
          <input type="text" name="userName" value={formValues.userName} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.userName}</p>

        <div className="field">
          <label>Password</label>
          <input type="password" name="password" value={formValues.password} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.password}</p>

        <div className="field">
          <label>First Name</label>
          <input type="text" name="firstName" value={formValues.firstName} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.firstName}</p>

        <div className="field">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formValues.lastName} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.lastName}</p>

        <div className="field">
          <label>Location</label>
          <input type="text" name="location" value={formValues.location} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.location}</p>

        <div className="field">
          <label>Contact</label>
          <input type="number" name="contact" value={formValues.contact} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.contact}</p>

        <div className="field">
          <label>Email</label>
          <input type="email" name="email" value={formValues.email} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.email}</p>

        <div className="field">
          <label>Family info</label>
          <input type="text" name="familyInfo" value={formValues.familyInfo} onChange={handleChange} />
        </div>
        <p className="error">{formErrors.familyInfo}</p>

        <div className="field">
          <label>Aadhar Number</label>
          <input type="text" name="aadharNo" value={formValues.aadharNo} onChange={handleChange} disabled/>
        </div>
        <p className="error">{formErrors.aadharNo}</p>

        <div className="field">
          <label>Date Of Birth</label>
          <input type="date" name="dob" value={formValues.dob} onChange={handleChange}/>
        </div>
        <p className="error">{formErrors.dob}</p>
        
        <button type="submit" className="buttonBlue">
          Update
        </button>

        <div id="loginAfter"></div>
      </form>
    </div>
  )
}

export default TraineeUpdate