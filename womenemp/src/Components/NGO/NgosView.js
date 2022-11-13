import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTrainee } from '../../Actions/TraineeActions';
import { useSelector } from 'react-redux';

function NgosView({ ngos }) {

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

            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Motive</th>
            <th>Donation</th>
            <th>NGO Size</th>
            <th>Activities</th>
            <th>Course</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {ngos &&
            ngos.map((ngo) => (
              <tr>

                <td>{ngo.ngoName}</td>
                <td>{ngo.ngoLocation}</td>
                <td>{ngo.ngoType}</td>
                <td>{ngo.ngoMotive}</td>
                <td>{ngo.donation}</td>
                <td>{ngo.ngoSize}</td>
                <td>{ngo.ngoActivities}</td>
                <td>{ngo.trainingCourse.courseName}</td>
                <td>
                  <button
                    type="button" class="btn btn-success"
                    onClick={() => handleClick(ngo.trainingCourse)}
                  >
                    Enroll
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default NgosView