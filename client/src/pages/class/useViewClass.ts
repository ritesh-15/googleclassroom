import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getClassDetails, uploadBanner } from "../../api/class/class.api";
import ClassDetailsHelper from "../../helpers/classDetailas/ClassDetailsHelper";
import MessageHelper from "../../helpers/message/MessageHelper";
import ProgressHelper from "../../helpers/progress/ProgressHelper";
import UserHelper from "../../helpers/user/UserHelper";
import { User } from "../../reducers/user/userSlice";
import AuthValidation from "../../validations/authvalidation/AuthValidation";
import ImageTypeValidation from "../../validations/imageTypeValidation/ImageTypeValidation";

export interface UrlParams {
  id: string;
}

export interface ClassDetails {
  className: string;
  room?: string;
  subject?: string;
  section?: string;
  userId: User;
  code: string;
  banner?: string;
  _id: string;
}

const useViewClass = () => {
  const { id } = useParams<UrlParams>();
  const { changeMessage } = MessageHelper();
  const { classRoom, changeClassRoomState, updateBannerState } =
    ClassDetailsHelper();
  const { changeProgressState } = ProgressHelper();
  const { validateImageType } = ImageTypeValidation();
  const { user } = UserHelper();

  useEffect(() => {
    if (id === classRoom?._id) return;

    changeProgressState(true);
    (async () => {
      try {
        const { data } = <any>await getClassDetails(id);
        changeProgressState(false);
        changeClassRoomState(data.classRoom);
      } catch (err) {
        changeProgressState(false);
        changeMessage("Something went wrong,please try again!", "error");
      }
    })();
  }, [id]);

  const isCreator = (): boolean => {
    if (classRoom?.userId._id === user?._id) return true;
    return false;
  };

  const changeBanner = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;

    if (!files) return;

    const file = files[0];

    if (!file) return;

    if (!validateImageType(file.type)) {
      changeMessage(
        "Only png,jpg and jpeg are allowed only having size less than 8mb!",
        "warning"
      );
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      try {
        const { data } = await uploadBanner({
          banner: reader.result,
          classId: classRoom?._id,
        });
        updateBannerState(data.fileUrl);
      } catch (err) {
        changeMessage("Something went wrong, please try again!", "error");
      }
    };
  };

  return {
    variables: {
      classRoom,
    },
    functions: {
      changeBanner,
      isCreator,
    },
  };
};

export default useViewClass;
