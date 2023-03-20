import { ReactElement, createContext, useEffect, useState } from "react";

export interface UserData {
  id: number;
  role: string;
  userName: string;
  password: string;
}

interface AuthProps {
  isLogin: boolean;
  userData: UserData[];
  activeUserId: number;
  uniqueId: number;
  setLogin: (props: boolean) => void;
  setUserData: (id: number, data: UserData) => void;
  setActiveUserId: (id: number) => void;
  renameUserName: (id: number, rename: string) => void;
  createUserData: (data: UserData) => void;
}

const AuthContextData: AuthProps = {
  isLogin: false,
  activeUserId: 0,
  uniqueId: 3,
  userData: [
    {
      id: 1,
      role: "admin",
      userName: "Tode Gyi",
      password: "Mrbeast6000",
    },
    {
      id: 2,
      role: "user",
      userName: "Tode Gyi Nyi Lay",
      password: "Mrbeast6000",
    },
  ],
  setLogin: () => { },
  setUserData: () => { },
  setActiveUserId: () => { },
  renameUserName: () => { },
  createUserData: () => { },
};

interface AuthStatus {
  isLogin: string;
  activeUserId: number;
}

export const getAuthStatusLocalStorage = (): AuthStatus => {
  const data = localStorage.getItem("authStatus");

  if (data === null) {
    const defaultData = {
      isLogin: "no",
      activeUserId: 0,
    };

    localStorage.setItem("authStatus", JSON.stringify(defaultData));

    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

export function setAuthStatusLocalStorage(isLogin: string, activeUserId: number) {
  localStorage.setItem(
    "authStatus",
    JSON.stringify({
      isLogin: isLogin,
      activeUserId: activeUserId,
    })
  );
}

export const AuthContext = createContext<AuthProps>(AuthContextData);

type Props = {
  children: ReactElement[] | ReactElement;
};

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState(AuthContextData);

  useEffect(() => {
    const stoAuthData = getAuthStatusLocalStorage();
    if (stoAuthData.isLogin === "yes") {
      setAuth((data) => {
        return {
          ...data,
          isLogin: stoAuthData.isLogin === "yes" ? true : false,
          activeUserId: stoAuthData.activeUserId,
        };
      });
    }
  }, []);

  const overRide = {
    ...auth,
    setLogin: (flag: boolean) => {
      setAuth((data) => {
        return {
          ...data,
          isLogin: flag,
        };
      });
    },
    setUserData: (searchId: number, data: UserData) => {
      const updatedData = auth.userData.map((user) => {
        if (user.id === searchId) {
          return { ...user, ...data };
        } else {
          return user;
        }
      });
      setAuth((data) => ({
        ...data,
        userData: updatedData,
      }));
    },
    setActiveUserId: (id: number) => {
      setAuth((data) => ({ ...data, activeUserId: id }));
    },
    renameUserName: (searchId: number, rename: string) => {
      const updatedData = auth.userData.map((user) => {
        if (user.id === searchId) {
          return { ...user, userName: rename };
        } else {
          return user;
        }
      });
      setAuth((data) => ({ ...data, userData: updatedData }));
    },
    createUserData: (data: UserData) => {
      const newUserData = [...auth.userData];
      newUserData.push(data);
      setAuth((data) => ({ ...data, userData: newUserData, uniqueId: auth.uniqueId + 1 }));
    },
  };
  return <AuthContext.Provider value={overRide}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
