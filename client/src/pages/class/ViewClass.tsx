import useViewClass from "./useViewClass";
import { StyledClass, Image } from "./ViewClass.styled";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const ViewClass = () => {
  const { variables, functions } = useViewClass();

  return (
    <StyledClass>
      <Image bg={variables.classRoom?.banner && variables.classRoom?.banner}>
        <h1>{variables.classRoom?.className}</h1>
        <div>
          <p>Class code : </p>
          <span></span>
          {variables.classRoom?.code}{" "}
          <FullscreenIcon style={{ marginLeft: "10px", cursor: "pointer" }} />
        </div>
        <div>
          <input onChange={functions.changeBanner} id="image" type="file" />
          {functions.isCreator() && (
            <label htmlFor="image">
              <p>Upload image</p>
            </label>
          )}
        </div>
      </Image>
    </StyledClass>
  );
};

export default ViewClass;
