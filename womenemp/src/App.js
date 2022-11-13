import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Admin from "./Components/Admin"
import SignUp from "./Components/SignUp";
import Trainees from "./Components/Trainee/Trainees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddCourse from "./Components/TrainingCourse/AddCourse";
import UpdateCourse from "./Components/TrainingCourse/UpdateCourse";
import AllCourses from "./Components/TrainingCourse/AllCourses";
import IndividualCourse from "./Components/TrainingCourse/IndividualCourse";
import SearchCourseByName from "./Components/TrainingCourse/SearchCourseByName";
import SearchResult from "./Components/TrainingCourse/SearchResult";
import SearchResults from "./Components/Scheme/SearchResults";
import Scheme from "./Components/Scheme/Scheme";
import SchemesList from "./Components/Scheme/SchemesList";
import SearchScheme from "./Components/Scheme/SearchScheme";
import TraineeById from "./Components/Trainee/TraineeById";
import Feedback from "./Components/Feedback/AddFeedback";
import ViewAllFeedback from "./Components/Feedback/ViewAllFeedback";

import TraineeUpdate from "./Components/Trainee/TraineeUpdate";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UpdateFeedback from "./Components/Feedback/UpdateFeedback";
import FeedbackHome from "./Components/Feedback/FeedbackHome";
import Search from "./Components/Feedback/Search";
import TraineeByIdAdmin from "./Components/Trainee/TraineeByIdAdmin";
import TraineeByIdAdminView from "./Components/Trainee/TraineeByIdAdminView";

import Ngos from "./Components/NGO/Ngos";
import AddNgo from "./Components/NGO/AddNgo";
import UpdateNgo from "./Components/NGO/UpdateNgo";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/profile" element={<TraineeById />} />
          <Route path="/home/profile/update" element={<TraineeUpdate />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addscheme" element={<Scheme />} />
          <Route path="/admin/schemes" element={<SchemesList />} />
          <Route path="/admin/search-scheme" element={<SearchScheme />} />
          <Route path="/admin/search-scheme-by-type/:schemeType" element={<SearchResults />} />

          <Route path="/admin/trainees" element={<Trainees />} />
          <Route path="/admin/traineeById" element={<TraineeByIdAdmin />} />
          <Route path="/admin/traineeById/:traineeId" element={<TraineeByIdAdminView />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/admin/addcourse" element={<AddCourse />} />
          <Route path="/admin/updatecourse/:trainingCourseId" element={<UpdateCourse />} />
          <Route path="/admin/searchcoursebyname" element={<SearchCourseByName />} />
          <Route path="/admin/allcourses" element={<AllCourses />} />
          <Route path="/admin/allcourses/coursedetails/:trainingCourseId" element={<IndividualCourse />} />
          <Route path="/admin/searchcoursebyname/:courseName" element={<SearchResult />} />

          <Route path="/admin/viewallngo" element={<Ngos />} />
          <Route path="/admin/addngo" element={<AddNgo />} />
          <Route path="/admin/updatengo" element={<UpdateNgo />} />

          <Route path="/feedback" element={<Feedback />} />
          <Route path="/updatefeedback" element={<UpdateFeedback />} />
          <Route path="/feedback/home" element={<FeedbackHome />} />
          <Route path="/admin/viewallfeedback" element={<ViewAllFeedback />} />
          <Route path="/searchfeedback" element={<Search />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
