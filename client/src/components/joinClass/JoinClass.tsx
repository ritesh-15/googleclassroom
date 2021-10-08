import {
  StyledJoinClass,
  JoinClassBody,
  JoinClassMain,
  Instructions,
} from "./JoinClass.styled";
import Input from "../input/Input";
import useJoined from "./useJoined";

const JoinClass = () => {
  const { variables, functions } = useJoined();

  return (
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
              Use a class code with 5-7 letters or numbers, and no spaces or
              symbols
            </li>
          </ul>
        </Instructions>
      </JoinClassBody>
    </StyledJoinClass>
  );
};

export default JoinClass;
