import styled from "styled-components";

export const StyledClasswork = styled.div``;

export const Topics = styled.div`
  padding: 2rem 1rem;
  flex: 1;

  div {
    padding: 1rem;
    width: 90%;
    max-width: 200px;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.4);

    &:hover {
      background: #f1f3f4;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const Material = styled.div`
  padding: 1rem;
  flex: 3;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Create = styled.div`
  margin: 1rem 0 2rem 0;
  display: flex;
  align-items: center;

  button {
    margin-right: 1rem;

    span {
      margin-left: 0.5rem;
    }
  }
`;
