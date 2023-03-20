import React, { useContext, useEffect } from "react";
import CRUDTool from "../../components/CRUDTool";
import Navbar from "../../components/Navbar";
import { AuthContext, getAuthStatusLocalStorage } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const stoAuth = getAuthStatusLocalStorage();
    if (stoAuth.isLogin === "no") {
      navigate("/user/sign-in");
    }
  }, []);

  return (
    <>
      <Navbar />
      {isLogin && <CRUDTool />}
    </>
  );
};

export default ProfilePage;
