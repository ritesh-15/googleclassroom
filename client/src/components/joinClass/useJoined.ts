import { ChangeEvent, useState } from "react";

const useJoined = () => {
  const [code, setCode] = useState("");

  const changeCode = (e: ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value);
  };

  return {
    variables: {
      code,
    },
    functions: {
      changeCode,
    },
  };
};

export default useJoined;
