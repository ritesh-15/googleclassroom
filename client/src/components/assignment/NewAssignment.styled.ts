import styled from "styled-components";

export const StyledNewAssignMent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const AssignLeft = styled.div`
  padding: 2rem 1rem 0 3.5rem;

  div {
    margin-bottom: 1rem;
  }
`;

export const AssignRight = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100vh;

  h1 {
    margin-bottom: 0.5rem;
  }
`;

export const AssignRightDiv = styled.div`
  margin-bottom: 1rem;

  &:nth-child(2) {
    input {
      background: var(--bg-grey);
      padding: 1rem;
      width: 100%;
      font-size: 1rem;
      outline: none;
      border: none;
      border-radius: 3px;
    }
  }
`;
