import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ClassDetails } from "../../pages/class/useViewClass";
import {
  setClassDetails,
  updateBanner,
} from "../../reducers/classDetailsSlice/detailsSlice";

const ClassDetailsHelper = () => {
  const { classRoom } = useSelector((state: RootState) => state.classDetails);

  const dispatch = useDispatch();

  const changeClassRoomState = (payload: ClassDetails): void => {
    dispatch(setClassDetails(payload));
  };

  const updateBannerState = (val: string): void => {
    dispatch(updateBanner(val));
  };

  return { classRoom, changeClassRoomState, updateBannerState };
};

export default ClassDetailsHelper;
