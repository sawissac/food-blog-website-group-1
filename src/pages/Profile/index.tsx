import React, { useContext, useEffect } from "react";
import { AuthContext, getAuthStatusLocalStorage } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import CRUDTool from "../../components/CRUDTool";
import Navbar from "../../components/Navbar";

const ProfilePage:React.FC<{}> = () => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const stoAuth = getAuthStatusLocalStorage();
    if (stoAuth.isLogin === "no") {
      navigate("/user/sign-in");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      {isLogin && <CRUDTool />}
    </>
  );
};

export default ProfilePage;
