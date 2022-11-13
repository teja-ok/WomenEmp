import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTrainee } from "../../Actions/TraineeActions";

export default function SchemesView({ schemes }) {
  const dispatch = useDispatch();
  const trainee = useSelector((state) => state.trainee);
  const handleClick = (course) => {
    trainee.trainingCourse = course;
    dispatch(updateTrainee(trainee));
    alert("successfully enrolled");
  };
  return (
    <div className="tableContainer">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Scheme Name</th>
            <th>Objective</th>
            <th>Eligibility</th>
            <th>Launch Date</th>
            <th>Type</th>
            <th>Course Name</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {schemes &&
            schemes.map((scheme) => (
              <tr>
                <td>{scheme.schemeId}</td>
                <td>{scheme.schemeName}</td>
                <td>{scheme.schemeObjective}</td>
                <td>{scheme.schemeEligibility}</td>
                <td>{scheme.launchDate}</td>
                <td>{scheme.schemeType}</td>
                <td>{scheme.trainingCourse ? scheme.trainingCourse.courseName : "--"}</td>
                <td>
                  <button
                    type="button" class="btn btn-success"
                    onClick={() => handleClick(scheme.trainingCourse)}
                  >
                    Enroll
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
