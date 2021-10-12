import { ChangeEvent, useEffect, useState } from "react";
import NewMaterialHelper from "../../helpers/new-material/NewMaterialHelper";
import TopicOptionsHelper from "../../helpers/topicOptions/TopicOptionsHelper";

const useNewMaterial = () => {
  const { functions, variables } = NewMaterialHelper();
  const [title, titleSet] = useState(variables.title);
  const [description, descriptionSet] = useState(variables.description || "");
  const [topic, topicSet] = useState(variables.topic);
  const [newTopic, setNewTopic] = useState("");
  const { options } = TopicOptionsHelper();

  const changeTopic = (val: any) => {
    functions.changeTypeState("material");
    functions.changeTopicState(val);
  };

  const setTitleState = (e: ChangeEvent<HTMLInputElement>): void => {
    functions.changeTitleState(e.target.value);
  };

  const setDescriptionState = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    functions.changeDescriptionState(e.target.value);
  };

  const changeNewTopic = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTopic(e.target.value);
    functions.changeTopicState(e.target.value);
  };

  return {
    variables: {
      title,
      description,
      topic,
      options,
      newTopic,
      variables,
    },
    functions: {
      setTitleState,
      setDescriptionState,
      changeTopic,
      changeNewTopic,
    },
  };
};

export default useNewMaterial;
