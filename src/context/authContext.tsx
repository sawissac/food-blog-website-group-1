import { ReactElement, createContext, useState } from "react";

export interface UserData {
  id: number;
  role: string;
  userName: string;
  password: string;
}

interface AuthProps {
  // navar login | profile
  isLogin: boolean;
  // signin, signup, crud
  userData: UserData[];
  // crud
  activeUserId: number;
  // crud
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
  setLogin: () => {},
  setUserData: () => {},
  setActiveUserId: () => {},
  renameUserName: () => {},
  createUserData: () => {},
};

export const AuthContext = createContext<AuthProps>(AuthContextData);

type Props = {
  children: ReactElement[] | ReactElement;
};

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState(AuthContextData);
  const overide = {
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
  return <AuthContext.Provider value={overide}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;