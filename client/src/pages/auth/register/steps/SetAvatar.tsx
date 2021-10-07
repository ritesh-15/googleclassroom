import Button from "../../../../styles/button/Button.styled";
import useRegister from "../useRegister";
import Avatar from "../../../../styles/avatar/Avatar.styled";
import { FC } from "react";

const imageStyle = {
  border: "4px solid var(--blue)",
  display: "block",
  margin: "0 auto",
  marginBottom: "1rem",
};

const imageInputStyle = {
  div: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    display: "none",
  },
  text: {
    color: "var(--blue)",
    cursor: "pointer",
    marginBottom: "1rem",
  },
};

const SetAvatar: FC = () => {
  const { functions, variables } = useRegister();

  return (
    <>
      <Avatar style={imageStyle} width="150px" height="150px">
        <img src={variables.avatar || "images/user.png"} alt="" />
      </Avatar>
      <div style={imageInputStyle.div}>
        <input
          onChange={functions.changeAvatar}
          style={imageInputStyle.input}
          type="file"
          id="avatar"
        />
        <label style={imageInputStyle.text} htmlFor="avatar">
          Choose profile picture
        </label>
      </div>
      <Button
        disabled={!variables.avatar || variables.loading ? true : false}
        onClick={functions.register}
        width="150px"
      >
        {variables.loading ? "Please wait..." : "Sign Up"}
      </Button>
    </>
  );
};

export default SetAvatar;
