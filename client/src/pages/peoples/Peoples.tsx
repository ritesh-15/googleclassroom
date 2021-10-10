import { PeopleMain, StyledPeople, Person, Title } from "./People.styled";
import Avatar from "../../styles/avatar/Avatar.styled";
import usePeoples from "./usePeoples";

const Peoples = () => {
  const { variables } = usePeoples();

  return (
    <StyledPeople>
      <PeopleMain>
        <h1>Teachers</h1>
        <Person>
          <Avatar height="40px" width="40px">
            <img src={variables.classRoom?.userId.avatar} alt="" />
          </Avatar>
          <span>{variables.classRoom?.userId.name}</span>
        </Person>

        <Title>
          <h1>Classmates</h1>
          <span>{variables.peoples.length}</span>
        </Title>

        {/* map the persons */}

        {variables.peoples.map((p) => (
          <Person key={p.avatar}>
            <Avatar height="40px" width="40px">
              <img src={p.avatar} alt="" />
            </Avatar>
            <span>{p.name}</span>
          </Person>
        ))}
      </PeopleMain>
    </StyledPeople>
  );
};

export default Peoples;
