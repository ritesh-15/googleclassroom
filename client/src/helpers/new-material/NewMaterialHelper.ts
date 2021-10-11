import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  setDescription,
  setTitle,
  setTopic,
} from "../../reducers/new-material/new-materila-slice";

const NewMaterialHelper = () => {
  const dispatch = useDispatch();
  const { title, description, topic } = useSelector(
    (state: RootState) => state.newMaterial
  );

  const changeTitleState = (val: string): void => {
    dispatch(setTitle(val));
  };
  const changeDescriptionState = (val: string): void => {
    dispatch(setDescription(val));
  };
  const changeTopicState = (val: string): void => {
    dispatch(setTopic(val));
  };

  return {
    variables: { title, description, topic },
    functions: {
      changeDescriptionState,
      changeTitleState,
      changeTopicState,
    },
  };
};

export default NewMaterialHelper;
