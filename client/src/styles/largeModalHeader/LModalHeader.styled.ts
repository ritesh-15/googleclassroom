import styled from "styled-components";

const LModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 1rem;
      text-transform: capitalize;
      font-size: 1.3em;
    }
  }
`;

export default LModalHeader;
