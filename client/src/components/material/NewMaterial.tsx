import {
  MaterialLeft,
  MaterialRight,
  StyledNewMaterial,
} from "./NewMaterial.styled";
import Input from "../input/Input";
import useNewMaterial from "./useNewMaterial";
import Textarea from "../textarea/Textarea";
import Select from "../selectbox/Select";

const NewMaterial = () => {
  const { variables, functions } = useNewMaterial();

  return (
    <StyledNewMaterial>
      <MaterialLeft>
        <Input
          value={variables.variables.title}
          onChange={functions.setTitleState}
          title="Title"
          variant
        />
        <Textarea
          value={variables.variables.description}
          onChange={functions.setDescriptionState}
          title="Description (optional)"
          variant
        />
      </MaterialLeft>
      <MaterialRight>
        <h1>Topic</h1>
        {variables.topic === "Create new topic" ? (
          <Input
            value={variables.newTopic}
            onChange={functions.changeNewTopic}
            title="New topic"
            variant
          />
        ) : (
          <Select
            current={variables.topic}
            changeCurrent={functions.topicSet}
            options={variables.options}
            title="Choose topic"
          />
        )}
      </MaterialRight>
    </StyledNewMaterial>
  );
};

export default NewMaterial;
