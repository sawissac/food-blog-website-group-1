import React from "react";
import styles from "./crudtool.module.scss";
import Title from "./Title";
import { BlogData } from "../../context/mock-data";

type Props = {
  mockdata: BlogData[];
  mainBanner : number;
  onEditClick: (ev: number) => void;
  onDeleteClick: (ev: number) => void;
  onCreateClick: () => void;
};

const PostList: React.FC<Props> = ({ mainBanner, mockdata, onDeleteClick, onEditClick, onCreateClick }) => {
  return (
    <div className={styles["tool-container__post"]}>
      <Title text="Content" />
      <div>
        <p>Create Post</p>
        <button type="button" title="edit" onClick={onCreateClick}>
          <i className="fa-regular fa-plus"></i>
        </button>
      </div>
      {mockdata.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.id} - {item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}
            </p>
            <div>
              <button
                type="button"
                title="edit"
                onClick={() => {
                  onEditClick(item.id);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button
                type="button"
                title="delete"
                onClick={() => {
                  if(mainBanner === item.id){
                    alert("Can't delete, ID is use in main banner!")
                  }else{
                    onDeleteClick(item.id);
                  }
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
