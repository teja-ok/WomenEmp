import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFeedbackByUserId } from '../../Actions/FeedbackActions'
import { deleteTrainee, fetchTrainee } from '../../Actions/TraineeActions'
import { deleteUser } from '../../Actions/UserAction'
import Nav from '../Nav'

function TraineeById() {
    const user = useSelector((state) => state.user)
    const trainee = useSelector((state) => state.trainee)
    const [feed, setFeed] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchTrainee(user.userId))
        dispatch(fetchFeedbackByUserId(user.userId))
        axios
        .get(`http://localhost:8202/api/Feedback/User/${user.userId}`)
        .then((data) => setFeed(data.data))
        .catch((error) => setFeed({comment:""}))
    },[])

    const handleDelete = ()=> {
        dispatch(deleteUser(user.userId))
        dispatch(deleteTrainee(user.userId))
        navigate("/");
        alert("successfully deleted")
    }
    const handleUpdate = ()=> {
        navigate("/home/profile/update")
    }
    console.log(feed)
  return (
    <div data-testid="traineeById">
        <Nav />
        <table class="table table-striped" style={{width:"500px",margin:"auto"}}>
            <tbody>
            <tr>
                <td>Trainee Id :</td>
                <td>{trainee.traineeId}</td>
            </tr>
            <tr>
                <td>User Name :</td>
                <td>{trainee.userName}</td>
            </tr>
            <tr>
                <td>Password :</td>
                <td>{trainee.password}</td>
            </tr>
            <tr>
                <td>Name :</td>
                <td>{trainee.firstName} {trainee.lastName}</td>
            </tr>
            <tr>
                <td>Location :</td>
                <td>{trainee.location}</td>
            </tr>
            <tr>
                <td>Contact :</td>
                <td>{trainee.contact}</td>
            </tr>
            <tr>
                <td>Email :</td>
                <td>{trainee.email}</td>
            </tr>
            <tr>
                <td>Family Info :</td>
                <td>{trainee.familyInfo}</td>
            </tr>
            <tr>
                <td>Aadhar Number :</td>
                <td>{trainee.aadharNo}</td>
            </tr>
            <tr>
                <td>DOB :</td>
                <td>{trainee.dob}</td>
            </tr>
            <tr>
                <td>Training Course :</td>
                <td>{trainee.trainingCourse ? trainee.trainingCourse.courseName: ""}</td>
            </tr>
            <tr>
                <td>Feedback : </td>
                <td>{feed.comment ? feed.comment: ""}</td>
            </tr>
            </tbody>
        </table>

        <button className='buttonBlue' onClick={handleUpdate}>Update</button>
        <button className='buttonBlue' onClick={handleDelete} style={{backgroundColor:"Red"}}>Delete</button>

    </div>
  )
}

export default TraineeById