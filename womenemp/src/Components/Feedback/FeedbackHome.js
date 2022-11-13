import React, { useEffect } from 'react'
import Nav from '../Nav';
import "../../Style/feedhome.css";
import { Link, useNavigate } from 'react-router-dom';
import { fetchTrainee } from '../../Actions/TraineeActions';
import { useDispatch, useSelector } from 'react-redux';


function FeedbackHome() {
  const dispatch = useDispatch();
  const trainee = useSelector((state) => state.trainee);
  const currUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleFeed = () => {
    navigate("/feedback")
  }
  const updateFeed = () => {
    // if(trainee.feedback){
      navigate("/updatefeedback");
    // }
    // else{
    //   alert("Add Feedback First");
    // }
    
  }
  const handleSearch = () => {
    navigate("/searchfeedback")
  }
  useEffect(() => {
    dispatch(fetchTrainee(currUser.userId))
    .then(console.log(trainee))
    // dispatch(fetchTrainee(user.userId))
    // dispatch(fetchSchemes())
    // dispatch(fetchNgos());
  }, [])
  // console.log(schemes)
  return (
    <div>
        <Nav /> 
        <div class='feedhome'>
        <div class="center">
          <div><h2>Your Feedback Matters</h2></div>
        <div class="btn-2" >
          <button className='buttonBlue' onClick={handleFeed}>Add Feedback</button>
          
        </div>
        <div class="btn-2" >
          <button className='buttonBlue' onClick={updateFeed}>Update Feedback</button>
       </div>
        <div class="btn-2" >
          <button className='buttonBlue' onClick={handleSearch}>Search Feedback</button>
    </div></div></div></div>
  )
}

export default FeedbackHome