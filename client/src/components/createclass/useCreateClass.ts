import { ChangeEvent, useState } from "react";
import { createNewClass } from "../../api/class/class.api";
import MessageHelper from "../../helpers/message/MessageHelper";

const useCreateClass = () => {
  // varibale declarations
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [room, setRoom] = useState("");
  const [subject, setSubject] = useState("");
  const { changeMessage } = MessageHelper();

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

  const create = async () => {
    if (!className) return;

    const requestData = {
      className,
      room,
      subject,
      section,
    };

    try {
      const { data } = await createNewClass(requestData);
      clear();
    } catch (err) {
      changeMessage("Something went wrong, please try again !", "error");
    }
  };

  return {
    variables: {
      className,
      room,
      subject,
      section,
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
