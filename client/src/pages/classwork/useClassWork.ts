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
  const { title, topic, description, due, points, type, newTopic } = variables;
  const { changeMessage } = MessageHelper();
  const { classRoom } = ClassDetailsHelper();
  const { changeOptionsState, clearAllOptions } = TopicOptionsHelper();
  const [topics, setTopics] = useState<Topic[]>([]);
  const { changeProgressState } = ProgressHelper();
  const [unMounted, setUnMounted] = useState(false);
  const [posting, setPosting] = useState(false);
  const { user } = UserHelper();
  const { socket } = SocketHelper();

  // assignments variables
  const [assignmentOpenState, setAssignmentOpenState] = useState(false);

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
    functions.changeTypeState("");
    functions.changeDue("");
    functions.changePoints("");
    functions.changeNewTopic("");
  };

  const newMaterial = async (): Promise<void> => {
    if (!topic || !title) {
      changeMessage("Title and topic are required!", "error");
      return;
    }

    setPosting(true);

    const senderData = {
      title,
      topic: topic === "Create new topic" ? newTopic : topic,
      description,
      classId: classRoom?._id,
      type,
      due,
      points,
    };

    try {
      const { data } = await postNewMaterial(senderData);
      if (!data.isNew) {
        socket?.emit("new-material", data.material);
      } else {
        data.topic.classId = classRoom;

        socket?.emit("new-topic", data.topic);
      }

      setMaterialOpenState(false);
      setAssignmentOpenState(false);
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
      assignmentOpenState,
    },
    functions: {
      setMaterialOpenState,
      newMaterial,
      clear,
      newAssignment,
      setAssignmentOpenState,
    },
  };
};

export default useClassWork;
