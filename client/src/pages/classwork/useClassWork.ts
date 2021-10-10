import { useState } from "react";
import { postNewMaterial } from "../../api/material/material.api";
import ClassDetailsHelper from "../../helpers/classDetailas/ClassDetailsHelper";
import MessageHelper from "../../helpers/message/MessageHelper";
import NewMaterialHelper from "../../helpers/new-material/NewMaterialHelper";

const useClassWork = () => {
  const [materialOpenState, setMaterialOpenState] = useState(false);
  const { variables } = NewMaterialHelper();
  const { title, topic, topicId, description } = variables;
  const { changeMessage } = MessageHelper();
  const { classRoom } = ClassDetailsHelper();

  const newMaterial = async (): Promise<void> => {
    if (!topic || !title) {
      changeMessage("Title and topic are required!", "error");
      return;
    }

    const senderData = {
      title,
      topic,
      description,
      topicId,
      classId: classRoom?._id,
    };

    try {
      const { data } = await postNewMaterial(senderData);
      setMaterialOpenState(false);
    } catch (err) {}
  };

  return {
    variables: {
      materialOpenState,
    },
    functions: {
      setMaterialOpenState,
      newMaterial,
    },
  };
};

export default useClassWork;
