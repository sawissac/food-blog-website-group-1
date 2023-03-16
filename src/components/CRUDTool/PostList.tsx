import React from "react";
import styles from "./crudtool.module.scss";
import Title from "./Title";

type Props = {
  data: Array<{
    title: string;
    mins: number;
    desc: string;
    url: string;
  }>;
};
const PostList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles["tool-container__post"]}>
      <Title text="Content" />
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</p>
            <div>
              <button type="button" title="edit">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button type="button" title="delete">
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
