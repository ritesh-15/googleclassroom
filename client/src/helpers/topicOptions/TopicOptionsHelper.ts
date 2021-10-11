import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  clearOptions,
  setOptions,
} from "../../reducers/topicOptions/optionsSlice";

const TopicOptionsHelper = () => {
  const dispatch = useDispatch();
  const { options } = useSelector((state: RootState) => state.options);

  const changeOptionsState = (title: string): void => {
    dispatch(setOptions({ title }));
  };

  const clearAllOptions = (): void => {
    dispatch(clearOptions());
  };

  return { options, changeOptionsState, clearAllOptions };
};

export default TopicOptionsHelper;
