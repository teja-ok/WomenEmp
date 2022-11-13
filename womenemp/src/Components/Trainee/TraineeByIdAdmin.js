import React from "react";
import NavAdmin from "../NavAdmin";
import { Link } from "react-router-dom";
import { useState } from "react";

function TraineeByIdAdmin() {
    
    const [user, setUser] = useState({
        id: ""
      });
    
      const { id } = user;
    
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    

    const onSubmit = (e) => {
        console.log(id);
        e.preventDefault();
      };

  return (
    <div>
      <NavAdmin />
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Search Trainee By ID</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter Trainee ID"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <Link
              to={`/admin/traineeById/${id}`}
              className="btn btn-outline-primary"
              type="submit"
            >
              Search
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TraineeByIdAdmin;
