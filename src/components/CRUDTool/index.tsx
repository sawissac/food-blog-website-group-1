import { useContext} from "react";
import { AuthContext } from "../../context/authContext";
import NormalUser from "./NormalUser";
import AdminUser from "./AdminUser";

const CRUDTool = () => {
  const { activeUserId, userData } = useContext(AuthContext);
  const [selectedUser] = userData.filter((i) => i.id === activeUserId);

  if (selectedUser.role === "admin") {
    return <AdminUser />;
  }else{
    return <NormalUser />;
  }

};

export default CRUDTool;
