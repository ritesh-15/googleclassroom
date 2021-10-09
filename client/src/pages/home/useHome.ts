import { useEffect, useState } from "react";
import { getCreatedClasses, getJoinedClasses } from "../../api/class/class.api";
import ProgressHelper from "../../helpers/progress/ProgressHelper";

interface creadClass {
  className: string;
  code: string;
  banner?: string;
  room?: string;
  section?: string;
  subject?: string;
  _id: string;
  userId: {
    name: string;
    avatar: string;
    email: string;
  };
}

interface joinedClass {
  classId: {
    className: string;
    code: string;
    banner?: string;
    room?: string;
    section?: string;
    subject?: string;
    _id: string;
  };
  userId: {
    name: string;
    avatar: string;
    email: string;
  };
  creatorUserInfo: {
    name: string;
    avatar: string;
    email: string;
  };
}

const useHome = () => {
  const [joinedClasses, setJoinedClasses] = useState<joinedClass[]>([]);
  const [createdClasses, setCreatedClasses] = useState<creadClass[]>([]);
  const { changeProgressState } = ProgressHelper();

  useEffect(() => {
    // get the joined classes
    changeProgressState(true);
    (async () => {
      try {
        const { data } = <any>await getJoinedClasses();
        setJoinedClasses(data.joinedClasses);
        changeProgressState(false);
      } catch (err) {
        changeProgressState(false);
      }
    })();
  }, []);

  useEffect(() => {
    // get the created classes
    changeProgressState(true);
    (async () => {
      try {
        const { data } = <any>await getCreatedClasses();
        setCreatedClasses(data.createdClasses);
        changeProgressState(false);
      } catch (err) {
        changeProgressState(false);
      }
    })();
  }, []);

  return {
    variables: {
      createdClasses,
      joinedClasses,
    },
  };
};

export default useHome;
