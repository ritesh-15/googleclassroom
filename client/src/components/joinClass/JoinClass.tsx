import {
  StyledJoinClass,
  JoinClassBody,
  JoinClassMain,
  Instructions,
} from "./JoinClass.styled";
import Input from "../input/Input";
import useJoined from "./useJoined";
import { CloseOutlined } from "@mui/icons-material";
import Button from "../../styles/button/Button.styled";
import LModalHeader from "../../styles/largeModalHeader/LModalHeader.styled";
import { FC } from "react";

interface JoinClass {
  setOpen(val: boolean): void;
}

const JoinClass: FC<JoinClass> = ({ setOpen }) => {
  const { variables, functions } = useJoined();

  return (
    <>
      <LModalHeader>
        <div>
          <CloseOutlined onClick={() => setOpen(false)} className="icon" />
          <h1>Join class</h1>
        </div>
        <Button
          disabled={!variables.code ? true : false}
          onClick={async () => {
            const result = await functions.joinClass();
            if (result) setOpen(false);
          }}
          width="100px"
        >
          Join
        </Button>
      </LModalHeader>
      <StyledJoinClass>
        <JoinClassBody>
          <JoinClassMain>
            <h1>Class code</h1>
            <p>Ask your teacher for the class code, then enter it here.</p>
            <Input
              value={variables.code}
              onChange={functions.changeCode}
              title="Class code"
            />
          </JoinClassMain>
          <Instructions>
            <span>To sign in with a class code</span>
            <ul>
              <li>Use authorise account</li>
              <li>
                Use a class code with 7-10 letters or numbers, and no spaces or
                symbols
              </li>
            </ul>
          </Instructions>
        </JoinClassBody>
      </StyledJoinClass>
    </>
  );
};

export default JoinClass;
