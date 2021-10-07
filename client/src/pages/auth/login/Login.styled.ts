import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const LoginMain = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
  height: fit-content;
  margin-top: 6rem;
  width: 100%;
  max-width: 450px;

  p {
    text-align: center;
    margin-top: 1rem;

    a {
      color: var(--blue);
      cursor: pointer;
    }
  }

  button {
    margin-left: auto;
  }

  div {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.div`
  img {
    width: 150px;
    object-fit: contain;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
`;
