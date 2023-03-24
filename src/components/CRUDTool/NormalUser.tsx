import styles from "./crudtool.module.scss";
import { useContext, useState } from "react";
import Title from "./Title";
import FormInput from "./FormInput";
import Button from "./Button";
import { AuthContext, setAuthStatusLocalStorage } from "../../context/authContext";
import { useNavigate } from "react-router-dom";


const NormalUser = () => {
  const { activeUserId, userData, renameUserName, setLogin, setActiveUserId } = useContext(AuthContext);
  const [selectedUser] = userData.filter((i) => i.id === activeUserId);
  const [userName, setUserName] = useState(selectedUser.userName);
  const navigate = useNavigate();

  return (
    <section className={styles["tool-container"]}>
      <div className={styles["tool-container__inner"]}>
        <div className={styles["tool-container__menu"]}>
            <nav>
                <button className={styles["active"]} type="button" title="userAccount">
                    Account
                </button>
            </nav>
        </div>
        <div className={styles["tool-container__blog"]} >
             <Title text="General" />
        <FormInput
          name="user-name"
          placeHolder="Username"
          type="text"
          value={userName}
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
        />
        <Button
          value="Rename"
          onClick={() => {
            renameUserName(activeUserId, userName);
            alert("User Name Updated");
          }}
        />
        <Title text="Account" />
        <Button
          value="Logout"
          onClick={() => {
            setLogin(false);
            setActiveUserId(0);
            setAuthStatusLocalStorage("no", 0);
            navigate("/");
          }}
        />
        </div>
       
      </div>
    </section>
  );
};

export default NormalUser;
