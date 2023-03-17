import { useContext, useState } from "react";
import styles from "./crudtool.module.scss";
import FormInput from "./FormInput";
import Button from "./Button";
import PostList from "./PostList";
import ContentUpdater from "./ContentUpdater";
import Title from "./Title";
import { AuthContext } from "../../context/authContext";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const CRUDTool = () => {
  const { activeUserId, userData, renameUserName, setLogin, setActiveUserId } = useContext(AuthContext);
  const { blogData, mainBanner, setMainBanner, deleteBlogData, isBlogExist } = useContext(AppContext);
  const [selectedUser] = userData.filter((i) => i.id === activeUserId);
  const [userName, setUserName] = useState(selectedUser.userName);
  const [bannerId, setBannerId] = useState(mainBanner.toString());
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
    status: false,
    id: 0,
    type: "update",
  });

  if (selectedUser.role === "admin") {
    return (
      <section className={styles["tool-container"]}>
        <div className={styles["tool-container__inner"]}>
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
          <Title text="Main Banner" />
          <FormInput
            name="user-name"
            placeHolder="Main Banner"
            type="number"
            value={bannerId}
            onChange={(ev) => {
              setBannerId(ev.target.value);
            }}
          />
          <Button
            value="SET"
            onClick={() => {
              if (isBlogExist(parseInt(bannerId))) {
                setMainBanner(Number(bannerId));
                alert("Banner Updated!");
              } else {
                alert("ID not exist!");
              }
            }}
          />
          <Title text="Account" />
          <Button
            value="Logout"
            onClick={() => {
              setLogin(false);
              setActiveUserId(0);
              navigate("/");
            }}
          />
          {edit.status ? (
            <ContentUpdater
              type={edit.type}
              id={edit.id}
              back={() => {
                setEdit((i) => ({ ...i, status: false, type: "update" }));
              }}
            />
          ) : (
            <PostList
              mockdata={blogData}
              onEditClick={(ev) => {
                setEdit({
                  status: true,
                  id: ev,
                  type: "update",
                });
              }}
              onDeleteClick={(ev) => {
                deleteBlogData(ev);
              }}
              onCreateClick={() => {
                setEdit({
                  status: true,
                  id: 0,
                  type: "create",
                });
              }}
            />
          )}
        </div>
      </section>
    );
  }
  return (
    <section className={styles["tool-container"]}>
      <div className={styles["tool-container__inner"]}>
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
            navigate("/");
          }}
        />
      </div>
    </section>
  );
};

export default CRUDTool;
