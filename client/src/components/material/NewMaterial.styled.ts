import styled from "styled-components";

export const StyledNewMaterial = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const MaterialLeft = styled.div`
  padding: 2rem 1rem 0 3.5rem;

  div {
    margin-bottom: 1rem;
  }
`;

export const MaterialRight = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100vh;

  h1 {
    margin-bottom: 1rem;
  }
`;
