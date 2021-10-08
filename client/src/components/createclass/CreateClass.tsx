import { CreateClassActions, StyledCrateClass } from "./CreateClass.styled";
import Input from "../input/Input";
import useCreateClass from "./useCreateClass";
import Button from "../../styles/button/Button.styled";
import ModalHelper from "../../helpers/modal/ModalHelper";
import { FC } from "react";

interface CreateClass {
  setOpen(val: boolean): void;
}

const CreateClass: FC<CreateClass> = ({ setOpen }) => {
  const { variables, functions } = useCreateClass();
  const { changeModalState } = ModalHelper();

  return (
    <StyledCrateClass>
      <h1>Create class</h1>
      <Input
        value={variables.className}
        onChange={functions.changeClassName}
        title="Class name"
        variant={true}
      />
      <Input
        value={variables.section}
        onChange={functions.changeSection}
        title="Section"
        variant={true}
      />
      <Input
        value={variables.subject}
        onChange={functions.changeSubject}
        title="Subject"
        variant={true}
      />
      <Input
        value={variables.room}
        onChange={functions.changeRoom}
        title="Room"
        variant={true}
      />
      <CreateClassActions>
        <Button
          onClick={() => setOpen(false)}
          width="fit-content"
          color="var(--text)"
          bg="transparent"
        >
          Cancel
        </Button>
        <Button
          disabled={!variables.className || variables.loading ? true : false}
          width="fit-content"
          color="var(--blue)"
          bg="transparent"
          onClick={async () => {
            const result = await functions.create();
            if (result) setOpen(false);
          }}
        >
          Create
        </Button>
      </CreateClassActions>
    </StyledCrateClass>
  );
};

export default CreateClass;
