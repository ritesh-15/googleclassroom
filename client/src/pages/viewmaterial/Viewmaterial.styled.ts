import styled from "styled-components";

export const StyledViewMaterial = styled.div`
  max-width: 700px;
  width: 95%;
  margin: 61px auto 0 auto;
  padding-top: 2rem;
`;

export const ViewMaterialMain = styled.div`
  width: 100%;
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
  }

  span {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const ViewmaterialDescription = styled.div`
  padding-top: 1rem;

  p {
    line-height: 1.5;
  }
`;
