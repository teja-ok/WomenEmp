import { Link } from "react-router-dom";
import "../../Style/style.css";
const FeedbackList =({data,title})=>{
    return (<div className="feedhome">
    <div className="list-body"><h2>All Feedbacks</h2>
        <div className="tbl-header">
                        <table className="list-table">
                        <thead>
                        <tr>
                            <th>FeedbackID</th>
                            <th>Scheme Rating</th>
                            <th>Training Rating</th>
                            <th>Overall Rating</th>
                            <th>User ID</th>
                            <th>Training Course</th>
                            <th className="comment">Comments</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        </table>
                        </div>
        <div className="tbl-content">
            {data.map((dat) =>(
                <div key={dat.feedBackId}>
                    <table>
                        <tbody>
                        <tr>
                    {/* <Link to={`/feedback/${dat.feedBackId}`}><h2>{dat.feedBackId} </h2> </Link> */}
                    <td> {dat.feedBackId}</td>
                    <td>{dat.schemeRating}</td>
                    <td> {dat.schemeTrainingRating}</td>
                    <td> {dat.overallRating}</td>
                    <td>
                    {dat.user ? dat.user.userId: ""}</td>
                    <td>
                    {dat.trainingCourse ? dat.trainingCourse.courseName: ""}</td>
                    <td className="comment"><p className="commentpara">{dat.comment}</p></td>
                    <td>{dat.date}</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            ))}
        
        </div></div></div>
    )
}
export default FeedbackList;
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { fetchFeedback } from '../../Actions/FeedbackActions'
// import { deleteTrainee, fetchTrainee } from '../../Actions/TraineeActions'
// import { deleteUser } from '../../Actions/UserAction'
// import Card from "react-bootstrap/Card";
// import ListGroup from 'react-bootstrap/ListGroup';

// function FeedbackList({data}) {

//   return (
    
//     <div class="mx-auto" style={{ width: "500px"}}>
//         <Card>
//             <Card.Body>
//                 <Card.Title>Feedback Details</Card.Title>
//                 {data &&  data.map((dat) =>(
//                  <div>
//                 <Card.Text>
//                     Comments: {data.comment}
//                 </Card.Text>
//                 <ListGroup className="List-group-flush">
//                     <ListGroup.Item>Feedback Id : {data.feedBackId}</ListGroup.Item>
//                     <ListGroup.Item>Scheme Rating : {data.schemeRating}</ListGroup.Item>
//                     <ListGroup.Item>Training Rating : {data.schemeTrainingRating}</ListGroup.Item>
//                     <ListGroup.Item>Overall Rating : {data.overallRating}</ListGroup.Item>
//                     <ListGroup.Item>User : {data.user ? data.user.userId:"--"}</ListGroup.Item>
//                     <ListGroup.Item>Scheme : {data.scheme ? data.scheme.schemeName:"--"}</ListGroup.Item>
//                     <ListGroup.Item>Training Course : {data.trainingCourse ? data.trainingCourse.courseName:"--"}</ListGroup.Item>

//                 </ListGroup>
//                 </div>
//                 ))}
//             </Card.Body>
//         </Card>
// {/* 
//         <button className='buttonBlue' onClick={handleUpdate}>Update</button>
//         <button className='buttonBlue' onClick={handleDelete} style={{backgroundColor:"Red"}}>Delete</button> */}

//     </div>)
// }
// export default FeedbackList;