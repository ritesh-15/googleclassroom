import { FC } from "react";
import { StyledHome } from "./Home.styled";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import useHome from "./useHome";

const Home: FC = () => {
  const { variables } = useHome();

  return (
    <StyledHome>
      {variables.createdClasses?.map((c) => (
        <Card
          key={c._id}
          banner={c.banner}
          className={c.className}
          creatorAvatar={c.userId.avatar}
          creatorName={c.userId.name}
          _id={c._id}
        />
      ))}
      {variables.joinedClasses?.map((c) => (
        <Card
          key={c.classId._id}
          banner={c.classId.banner}
          className={c.classId.className}
          creatorAvatar={c.creatorUserInfo.avatar}
          creatorName={c.creatorUserInfo.name}
          _id={c.classId._id}
        />
      ))}
    </StyledHome>
  );
};

export default Home;
