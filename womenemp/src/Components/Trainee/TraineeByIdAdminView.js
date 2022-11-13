import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavAdmin from "../NavAdmin";

function TraineeByIdAdminView() {
  const { traineeId } = useParams();
//   console.log(traineeId)
  const [trainee, setTrainee] = useState({});
  useEffect(() => {
    loadTrainee();
  }, []);

  const loadTrainee = async () => {
    axios
    .get(`http://localhost:8202/api/Trainee/${traineeId}`)
    .then((data) => setTrainee(data.data))
    .catch((error) => {
        document.getElementById("traineeById").innerHTML =`
        ${error.response.data.errorMessage}
        `
    })
  };
  return (
    <div id="traineeById" data-testid = "traineeviewtest">
      <NavAdmin />
      <table
        class="table table-striped"
        style={{ width: "500px", margin: "auto" }}
      >
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
            <td>
              {trainee.firstName} {trainee.lastName}
            </td>
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
            <td>
              {trainee.trainingCourse ? trainee.trainingCourse.courseName : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TraineeByIdAdminView;
