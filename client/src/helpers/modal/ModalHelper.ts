import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setModal } from "../../reducers/modal/modalSlice";

const ModalHelper = () => {
  const { open } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const changeModalState = (val: boolean): void => {
    dispatch(setModal(val));
  };

  return { open, changeModalState };
};

export default ModalHelper;
