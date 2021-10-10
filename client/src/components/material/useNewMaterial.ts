import { ChangeEvent, useEffect, useState } from "react";
import { getTopics } from "../../api/material/material.api";
import ClassDetailsHelper from "../../helpers/classDetailas/ClassDetailsHelper";
import NewMaterialHelper from "../../helpers/new-material/NewMaterialHelper";

const useNewMaterial = () => {
  const [title, titleSet] = useState("");
  const [description, descriptionSet] = useState("");
  const [topic, topicSet] = useState<{ title: string; _id?: string }>({
    title: "",
    _id: "",
  });
  const [newTopic, setNewTopic] = useState("");
  const [options, setOptions] = useState<
    { title: string; _id: string | undefined }[]
  >([{ title: "Create new topic", _id: undefined }]);
  const { functions } = NewMaterialHelper();
  const { classRoom } = ClassDetailsHelper();
  const [unMounted, setUnMounted] = useState(false);

  useEffect(() => {
    // set the title in the new material state
    if (topic?.title === "Create new topic") return;
    functions.changeTopicState(topic?.title);
    functions.changeTopicIdState(topic._id);
    return () => {};
  }, [topic]);

  useEffect(() => {
    // get the topics of the class
    (async () => {
      try {
        const { data }: { data: { topics: { title: string; _id: string }[] } } =
          await getTopics(classRoom?._id);
        console.log(data.topics);
        if (!unMounted) {
          data.topics.map((topic) => {
            setOptions((prev) => [...prev, topic]);
          });
        }
        return () => {
          setOptions([{ title: "Create new topic", _id: undefined }]);
          setUnMounted(true);
        };
      } catch (err) {}
    })();

    return () => {};
  }, [classRoom?._id]);

  const setTitleState = (e: ChangeEvent<HTMLInputElement>): void => {
    titleSet(e.target.value);
    functions.changeTitleState(e.target.value);
  };

  const setDescriptionState = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    descriptionSet(e.target.value);
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
    },
    functions: {
      setTitleState,
      setDescriptionState,
      topicSet,
      changeNewTopic,
    },
  };
};

export default useNewMaterial;
