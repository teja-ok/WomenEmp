import React from "react";
import { Link } from "react-router-dom";
import NavAdmin from "./NavAdmin";

function Admin() {
  return (
    <div >
      <NavAdmin />
      <div className="admin">
        <h1>Admin Page</h1>
        <div>
          <Link to="/admin/trainees" className="link-text ">View All Trainees</Link>
        </div>
        <div>
          <Link to="/admin/traineeById" className="link-text ">View Trainee By ID</Link>
        </div>
        <div>
          <Link to="/admin/addcourse" className="link-text">Add Course</Link>
        </div>
        {/* <div>
        <Link to="/admin/updatecourse/:trainingCourseId">Update Course</Link>
        </div> */}
        <div>
          <Link to="/admin/searchcoursebyname" className="link-text">Search Course By Name</Link>
        </div>
        <div>
          <Link to="/admin/allcourses" className="link-text">Display all Courses</Link>
        </div>
        <div>
          <Link to="/admin/Schemes" className="link-text">View All Schemes</Link>
        </div>
        <div>
          <Link to="/admin/addscheme" className="link-text">Add Scheme</Link>
        </div>
        <div>
          <Link to="/admin/viewallfeedback" className="link-text">View all feedback</Link>
        </div>
        <div>
          <Link to="/admin/search-scheme" className="link-text ">Search Schemes</Link>
        </div>
        <div>
          <Link to="/admin/viewallngo" className="link-text ">View all NGO's</Link>
        </div>
        <div>
          <Link to="/admin/addngo" className="link-text ">Add NGO</Link>
        </div>
        <div>
          <Link to="/admin/updatengo" className="link-text ">Update NGO</Link>
        </div>

      </div>
    </div>
  );
}

export default Admin;
