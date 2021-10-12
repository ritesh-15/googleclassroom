import { useEffect, useState } from "react";
import {
  getClassroomTopics,
  postNewMaterial,
} from "../../api/material/material.api";
import ClassDetailsHelper from "../../helpers/classDetailas/ClassDetailsHelper";
import MessageHelper from "../../helpers/message/MessageHelper";
import NewMaterialHelper from "../../helpers/new-material/NewMaterialHelper";
import ProgressHelper from "../../helpers/progress/ProgressHelper";
import SocketHelper from "../../helpers/socket/SocketHelper";
import TopicOptionsHelper from "../../helpers/topicOptions/TopicOptionsHelper";
import UserHelper from "../../helpers/user/UserHelper";
import useJoinRoom from "../../hooks/useJoinRoom";
import { User } from "../../reducers/user/userSlice";
import { ClassDetails } from "../class/useViewClass";

export interface Topic {
  classId: ClassDetails;
  creatorId: User;
  title: string;
  _id: string;
}

const useClassWork = () => {
  const [materialOpenState, setMaterialOpenState] = useState(false);
  const { variables, functions } = NewMaterialHelper();
  const { title, topic, description } = variables;
  const { changeMessage } = MessageHelper();
  const { classRoom } = ClassDetailsHelper();
  const { changeOptionsState, clearAllOptions } = TopicOptionsHelper();
  const [topics, setTopics] = useState<Topic[]>([]);
  const { changeProgressState } = ProgressHelper();
  const [unMounted, setUnMounted] = useState(false);
  const [posting, setPosting] = useState(false);
  const { user } = UserHelper();
  const { socket } = SocketHelper();

  useEffect(() => {
    if (!socket) return;

    socket.on("new-topic-created", (newTopic: Topic) => {
      console.log("New topic ", newTopic);
      setTopics((prevs) => [...prevs, newTopic]);
    });

    return () => {
      socket.off("new-topic-created");
    };
  }, [socket]);

  // get the topics

  useEffect(() => {
    if (!classRoom?._id) return;

    changeProgressState(true);

    (async () => {
      try {
        const { data }: { data: { topics: Topic[] } } =
          await getClassroomTopics(classRoom._id);

        if (!unMounted) {
          setTopics(data.topics);

          data.topics.map((topic) => {
            changeOptionsState(topic.title);
          });
        }

        changeProgressState(false);
      } catch (err) {
        changeProgressState(false);
      }

      return () => {
        setUnMounted(true);
      };
    })();

    return () => {
      clearAllOptions();
    };
  }, [classRoom?._id]);

  const clear = () => {
    functions.changeDescriptionState("");
    functions.changeTitleState("");
    functions.changeTopicState("");
  };

  const newMaterial = async (): Promise<void> => {
    if (!topic || !title) {
      changeMessage("Title and topic are required!", "error");
      return;
    }

    setPosting(true);

    const senderData = {
      title,
      topic,
      description,
      classId: classRoom?._id,
    };

    try {
      const { data } = await postNewMaterial(senderData);
      if (!data.isNew) {
        console.log("Data is here");
        socket?.emit("new-material", data.material);
      } else {
        data.topic.classId = classRoom;
        console.log("Data is here");
        socket?.emit("new-topic", data.topic);
      }

      setMaterialOpenState(false);
      setPosting(false);
      clear();
    } catch (err) {
      setPosting(false);
    }
  };

  const newAssignment = () => {};

  return {
    variables: {
      materialOpenState,
      topics,
      posting,
      classRoom,
      user,
    },
    functions: {
      setMaterialOpenState,
      newMaterial,
      clear,
      newAssignment,
    },
  };
};

export default useClassWork;
