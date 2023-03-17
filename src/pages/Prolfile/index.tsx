import React, { useContext, useEffect } from "react";
import CRUDTool from "../../components/CRUDTool";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/user/sign-in");
    }
  }, [isLogin]);

  return (
    <>
      <Navbar />
      <CRUDTool />
    </>
  );
};

export default ProfilePage;
