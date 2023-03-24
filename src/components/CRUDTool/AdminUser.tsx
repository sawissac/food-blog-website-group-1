import styles from "./crudtool.module.scss";
import React, { useContext, useState } from "react";
import Title from "./Title";
import FormInput from "./FormInput";
import Button from "./Button";
import { AuthContext, setAuthStatusLocalStorage } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import ContentUpdater from "./ContentUpdater";
import PostList from "./PostList";

const AdminUser = () => {
  const { activeUserId, userData, renameUserName, setLogin, setActiveUserId } = useContext(AuthContext);
  const { blogData, mainBannerId, setMainBanner, deleteBlogData, isBlogExist } = useContext(AppContext);
  const [selectedUser] = userData.filter((i) => i.id === activeUserId);
  const [userName, setUserName] = useState(selectedUser.userName);
  const [bannerId, setBannerId] = useState(mainBannerId.toString());
  const navigate = useNavigate();
  const [tab, setTab] = useState("account");
  const [edit, setEdit] = useState({
    status: false,
    id: 0,
    type: "update",
  });

  return (
    <section className={styles["tool-container"]}>
      <div className={styles["tool-container__inner"]}>
        <div className={styles["tool-container__menu"]}>
          <nav>
            <button
              className={tab === "account" ? styles["active"] : ""}
              type="button"
              title="userAccount"
              onClick={() => {
                setTab("account");
              }}
            >
              Account
            </button>
            <button
              className={tab === "content" ? styles["active"] : ""}
              type="button"
              title="content"
              onClick={() => {
                setTab("content");
              }}
            >
              Content
            </button>
          </nav>
        </div>
        {tab === "account" && (
          <div className={styles["tool-container__blog"]}>
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
                setAuthStatusLocalStorage("no", 0);
                navigate("/");
              }}
            />
          </div>
        )}
        {tab === "content" && (
          <div className={styles["tool-container__blog"]}>
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
                mainBanner={mainBannerId}
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
        )}
      </div>
    </section>
  );
};

export default AdminUser;
