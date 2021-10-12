import styled from "styled-components";

export const StyledTopic = styled.div`
  margin-bottom: 2rem;
  max-width: 800px;
`;

export const TopicTitle = styled.div`
  h1 {
    font-size: 2em;
    color: var(--blue);
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #f1f3f4;

    &::after {
      border-color: transparent;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    border-bottom: 1px solid var(--blue);
  }
`;

export const TopicMaterials = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;

    h1 {
      margin-left: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      padding: 0;
      justify-content: space-between;

      span {
        margin-right: 2rem;
        font-size: 0.8em;
        color: rgba(0, 0, 0, 0.9);
      }
    }

    &:hover {
      background: #f1f3f4;
    }
  }
`;
