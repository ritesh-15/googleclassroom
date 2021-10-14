import styled from "styled-components";

export const StyledViewMaterial = styled.div`
  max-width: 1100px;
  width: 95%;
  margin: 61px auto 0 auto;
  padding-top: 2rem;
`;

export const ViewMaterialMain = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 100px);
`;

export const ViewMaterialTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;

  h1 {
    font-size: 1.8em;
    margin-bottom: 10px;
    line-height: 1.5;
    color: var(--blue);
  }

  span {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ViewmaterialDescription = styled.div`
  padding-top: 1rem;

  p {
    line-height: 1.5;
  }
`;

export const ViewMaterialLeft = styled.div`
  flex: 1;
`;

export const ViewMaterialRight = styled.div`
  height: max-content;
  flex: 0.4;
  margin-left: 2rem;
`;

export const Work = styled.div`
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
      color: green;
      font-size: 0.9em;
      font-weight: 500;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child {
      margin-top: 1rem;
    }

    span {
      margin-left: 1rem;
    }
  }
`;
