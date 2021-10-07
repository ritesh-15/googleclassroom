import { FC } from "react";
import { StyledHome } from "./Home.styled";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";

const Home: FC = () => {
  return (
    <StyledHome>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledHome>
  );
};

export default Home;
