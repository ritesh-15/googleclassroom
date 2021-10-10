import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  setDescription,
  setTitle,
  setTopic,
  setTopicId,
} from "../../reducers/new-material/new-materila-slice";

const NewMaterialHelper = () => {
  const dispatch = useDispatch();
  const { title, description, topic, topicId } = useSelector(
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
  const changeTopicIdState = (val?: string): void => {
    dispatch(setTopicId(val));
  };

  return {
    variables: { title, description, topic, topicId },
    functions: {
      changeDescriptionState,
      changeTopicIdState,
      changeTitleState,
      changeTopicState,
    },
  };
};

export default NewMaterialHelper;
