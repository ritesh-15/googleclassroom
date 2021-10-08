import styled from "styled-components";

export const StyledJoinClass = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const JoinClassBody = styled.div`
  width: 95%;
  max-width: 500px;
`;

export const JoinClassMain = styled.div`
  border: 1px solid #dadce0;
  border-radius: 6px;
  margin-top: 6rem;
  padding: 2rem;

  h1 {
    margin-bottom: 5px;
  }

  div {
    margin-top: 1rem;
    width: 50%;
  }
`;

export const Instructions = styled.div`
  padding: 2rem;

  span {
    display: block;
    font-weight: 500;
  }

  ul {
    margin-top: 1rem;
    font-size: 0.9em;

    li {
      padding: 0 0 1rem 0;
      letter-spacing: 0.2px;
    }
  }
`;
