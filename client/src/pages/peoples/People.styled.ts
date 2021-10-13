import styled from "styled-components";

export const StyledPeople = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 61px;
`;

export const PeopleMain = styled.div`
  width: 95%;
  max-width: 800px;
  margin-top: 3rem;

  h1 {
    font-size: 1.8em;
    color: var(--blue);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--blue);
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  span {
    margin-left: 1rem;
  }
`;

export const Title = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--blue);
  color: var(--blue);

  h1 {
    border: none !important;
  }
`;
