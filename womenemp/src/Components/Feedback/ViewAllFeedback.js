import { useEffect } from "react";
import FeedbackList from "./FeedbackList";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedbacks } from "../../Actions/FeedbackActions";
import NavAdmin from "../NavAdmin";

function ViewAllFeedback() {
  const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, []);
  return (
    <div>
      <NavAdmin />
      <FeedbackList data={feedbacks}/>
    </div>
  );
}

export default ViewAllFeedback;
