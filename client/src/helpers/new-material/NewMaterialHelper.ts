import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  setDescription,
  setDue,
  setNewTopic,
  setPoints,
  setTitle,
  setTopic,
  setType,
} from "../../reducers/new-material/new-materila-slice";

const NewMaterialHelper = () => {
  const dispatch = useDispatch();
  const { title, description, topic, due, points, newTopic, type } =
    useSelector((state: RootState) => state.newMaterial);

  const changeTitleState = (val: string): void => {
    dispatch(setTitle(val));
  };
  const changeDescriptionState = (val: string): void => {
    dispatch(setDescription(val));
  };
  const changeTopicState = (val: string): void => {
    dispatch(setTopic(val));
  };
  const changeNewTopic = (val: string): void => {
    dispatch(setNewTopic(val));
  };
  const changeDue = (val: string): void => {
    dispatch(setDue(val));
  };
  const changePoints = (val: string): void => {
    dispatch(setPoints(val));
  };
  const changeTypeState = (val: string): void => {
    dispatch(setType(val));
  };

  return {
    variables: { title, description, topic, newTopic, due, type, points },
    functions: {
      changeDescriptionState,
      changeTitleState,
      changeTopicState,
      changeDue,
      changeNewTopic,
      changePoints,
      changeTypeState,
    },
  };
};

export default NewMaterialHelper;
