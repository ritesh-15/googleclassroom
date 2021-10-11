import { useEffect, useState } from "react";
import { useParams } from "react-router";
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
import { User } from "../../reducers/user/userSlice";
import { ClassDetails, UrlParams } from "../class/useViewClass";

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

  useEffect(() => {
    socket.on("topic-created", (topic: Topic) => {
      setTopics((prevs) => [...prevs, topic]);
    });

    return () => {
      socket.off();
    };
  });

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
      if (data.isNew) {
        data.topic.classId = classRoom;
        await socket.emit("topic-created", data.topic);
      } else {
        await socket.emit("new-material", data.material);
      }

      setMaterialOpenState(false);
      setPosting(false);
      clear();
    } catch (err) {
      setPosting(false);
    }
  };

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
    },
  };
};

export default useClassWork;
