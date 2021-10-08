import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setProgressState } from "../../reducers/progress/progressSlice";

const ProgressHelper = () => {
  const { show } = useSelector((state: RootState) => state.progress);

  const dispatch = useDispatch();

  const changeProgressState = (val: boolean): void => {
    dispatch(setProgressState(val));
  };

  return { show, changeProgressState };
};

export default ProgressHelper;
