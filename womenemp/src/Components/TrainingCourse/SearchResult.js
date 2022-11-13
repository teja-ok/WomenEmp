import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function IndividualUser() {
  const [course, setcourse] = useState({
    trainingCourseId: "",
    courseName: "",
    courseDuration: "",
    startingDate:"",
    endingDate: "", 
    courseCompletionStatus: ""
  });

  const { courseName } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8202/api/TrainingCourse/courseName/${courseName}`);
    setcourse(result.data);
    // alert("Search Complete")
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Course Details</h2>

          <div className="card">
            <div className="card-header">
              Details of course Name : {course.courseName}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Training Course Id :</b>
                  {course.trainingCourseId}
                </li>
                <li className="list-group-item">
                  <b>Training Course Duration:</b>
                  {course.courseDuration}
                </li>
                <li className="list-group-item">
                  <b>Training Course Starting Date:</b>
                  {course.startingDate}
                </li>
                <li className="list-group-item">
                  <b>Training Course Ending Date:</b>
                  {course.endingDate}
                </li>
                <li className="list-group-item">
                  <b>Training Course Completion Status:</b>
                  {course.courseCompletionStatus}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/admin/allcourses"}>
            Back to Courses!
          </Link>
        </div>
      </div>
    </div>
  );
}
