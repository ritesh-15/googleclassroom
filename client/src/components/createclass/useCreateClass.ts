import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
import { createNewClass } from "../../api/class/class.api";
import MessageHelper from "../../helpers/message/MessageHelper";

const useCreateClass = () => {
  // varibale declarations
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [room, setRoom] = useState("");
  const [subject, setSubject] = useState("");
  const { changeMessage } = MessageHelper();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  // change the class name

  const changeClassName = (e: ChangeEvent<HTMLInputElement>): void => {
    setClassName(e.target.value);
  };
  const changeSection = (e: ChangeEvent<HTMLInputElement>): void => {
    setSection(e.target.value);
  };
  const changeRoom = (e: ChangeEvent<HTMLInputElement>): void => {
    setRoom(e.target.value);
  };
  const changeSubject = (e: ChangeEvent<HTMLInputElement>): void => {
    setSubject(e.target.value);
  };

  const clear = () => {
    setClassName("");
    setSection("");
    setRoom("");
    setSubject("");
  };

  const create = async (): Promise<boolean> => {
    if (!className) return false;

    const requestData = {
      className,
      room,
      subject,
      section,
    };

    setLoading(true);

    try {
      const { data } = await createNewClass(requestData);
      history.push(`/v/c/${data.createdClass._id}`);
      clear();
      setLoading(false);
      return true;
    } catch (err) {
      setLoading(false);
      changeMessage("Something went wrong, please try again !", "error");
      return false;
    }
  };

  return {
    variables: {
      className,
      room,
      subject,
      section,
      loading,
    },
    functions: {
      changeClassName,
      changeSubject,
      changeSection,
      changeRoom,
      create,
    },
  };
};

export default useCreateClass;
