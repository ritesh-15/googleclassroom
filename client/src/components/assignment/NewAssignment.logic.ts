import { ChangeEvent, useState } from "react";
import NewMaterialHelper from "../../helpers/new-material/NewMaterialHelper";
import TopicOptionsHelper from "../../helpers/topicOptions/TopicOptionsHelper";

const NewAssignmentLogic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { options } = TopicOptionsHelper();
  const [topic, setTopic] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [points, setPoints] = useState("");
  const { variables, functions } = NewMaterialHelper();

  const changeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    functions.changeTitleState(e.target.value);
    functions.changeTypeState("assignment");
  };

  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    functions.changeDescriptionState(e.target.value);
  };

  const changePoints = (e: ChangeEvent<HTMLInputElement>) => {
    functions.changePoints(e.target.value);
  };

  const changeTopic = (val: any) => {
    functions.changeTopicState(val);
  };

  const changeDue = (e: ChangeEvent<HTMLInputElement>) => {
    functions.changeDue(e.target.value);
  };

  return {
    variables: {
      title,
      description,
      options,
      topic,
      newTopic,
      points,
      variables,
    },
    functions: {
      changeTitle,
      changeDescription,
      setTopic,
      setNewTopic,
      changePoints,
      changeTopic,
      changeDue,
    },
  };
};

export default NewAssignmentLogic;
