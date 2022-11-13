import { useEffect } from "react";
import TraineeView from "./TraineeView";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrainees } from "../../Actions/TraineeActions"
import NavAdmin from "../NavAdmin";

function Trainees() {
  const trainees = useSelector((state) => state.allTrainees.trainees)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTrainees())
  }, []);
  return (
    <div>
      <NavAdmin />
      <TraineeView trainees = {trainees} />
        
    </div>
  );
}

export default Trainees;
