import {
  AssignLeft,
  AssignRight,
  AssignRightDiv,
  StyledNewAssignMent,
} from "./NewAssignment.styled";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import NewAssignmentLogic from "./NewAssignment.logic";
import Select from "../selectbox/Select";

const NewAssignment = () => {
  const { variables, functions } = NewAssignmentLogic();
  return (
    <StyledNewAssignMent>
      <AssignLeft>
        <Input
          value={variables.variables.title}
          onChange={functions.changeTitle}
          title="Title"
          variant
        />
        <Textarea
          value={variables.variables.description}
          onChange={functions.changeDescription}
          title="Instructions (optional)"
          variant
        />
      </AssignLeft>
      <AssignRight>
        {/* Points */}
        <AssignRightDiv>
          <h1>Points</h1>
          <Input
            value={variables.variables.points}
            onChange={functions.changePoints}
            type="text"
            variant
          />
        </AssignRightDiv>

        {/* Due date  */}
        <AssignRightDiv>
          <h1>Due date</h1>
          <input
            onChange={functions.changeDue}
            value={variables.variables.due}
            type="date"
          />
        </AssignRightDiv>

        {/* topic */}
        <AssignRightDiv>
          <h1>Topic</h1>
          {variables.variables.topic === "Create new topic" ? (
            <Input
              value={variables.variables.newTopic}
              onChange={functions.changeNewTopic}
              title="New topic"
              variant
            />
          ) : (
            <Select
              current={variables.variables.topic}
              changeCurrent={functions.changeTopic}
              options={variables.options}
              title="Choose topic"
            />
          )}
        </AssignRightDiv>
      </AssignRight>
    </StyledNewAssignMent>
  );
};

export default NewAssignment;
