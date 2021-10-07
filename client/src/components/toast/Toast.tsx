import { StyledToast, ToastBody } from "./Toast.styled";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Toast = () => {
  const { message, type, open } = useSelector(
    (state: RootState) => state.message
  );

  return (
    <StyledToast open={open}>
      <ToastBody>
        {type === "error" ? (
          <ErrorIcon style={{ color: "hsl(0, 71%, 49%)" }} />
        ) : type === "success" ? (
          <CheckCircleIcon style={{ color: "hsl(128, 71%, 40%)" }} />
        ) : (
          <WarningIcon style={{ color: "hsl(53, 74%, 50%)" }} />
        )}

        <p>{message}</p>
      </ToastBody>
    </StyledToast>
  );
};

export default Toast;
