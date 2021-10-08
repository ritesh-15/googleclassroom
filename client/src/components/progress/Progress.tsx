import styled from "styled-components";
import ProgressHelper from "../../helpers/progress/ProgressHelper";

interface ProgressProps {
  show: boolean;
}

const ProgressDiv = styled.div<ProgressProps>`
  width: 100%;
  height: 5px;
  background: hsl(214.08, 100%, 75.49019607843137%);
  opacity: ${({ show }) => (show ? "1" : "0")};

  div {
    width: 100%;
    height: 100%;
    background: var(--blue);
    border-radius: 8px;
    animation: progress infinite linear 1.2s;
  }
`;

const Bar = {};

const Progress = () => {
  const { show } = ProgressHelper();

  return (
    <ProgressDiv show={show}>
      <div />
    </ProgressDiv>
  );
};

export default Progress;
