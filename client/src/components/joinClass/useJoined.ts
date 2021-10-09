import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
import { joinClassRoom } from "../../api/class/class.api";
import MessageHelper from "../../helpers/message/MessageHelper";
import VerifyClassCode from "../../validations/classcode/VerifyClassCode";

const useJoined = () => {
  const [code, setCode] = useState("");
  const { verifyCode } = VerifyClassCode();
  const { changeMessage } = MessageHelper();
  const history = useHistory();

  const changeCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value);
  };

  const joinClass = async (): Promise<boolean> => {
    if (!code) {
      return false;
    }

    if (!verifyCode(code)) {
      changeMessage(
        "Class code is length of 7-10 characters contain only numbers and letters with not white space and no specail symbol!",
        "warning"
      );
      return false;
    }

    try {
      const { data } = await joinClassRoom({ classCode: code });
      history.push(`/v/c/${data.joinedClass.classId}`);
      return true;
    } catch (err) {
      changeMessage(
        "No class found with this class code please check class code and try again!",
        "error"
      );
      return false;
    }
  };

  return {
    variables: {
      code,
    },
    functions: {
      changeCode,
      joinClass,
    },
  };
};

export default useJoined;
