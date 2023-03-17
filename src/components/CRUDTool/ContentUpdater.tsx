import React, { useContext, useState } from "react";
import Title from "./Title";
import FormInput from "./FormInput";
import Button from "./Button";
import Textarea from "./FormInputArea";
import { AppContext } from "../../context/appContext";
import { BlogData } from "../../context/mock-data";

type Props = {
  id: number;
  back: () => void;
  type: string;
};

const ContentUpdater: React.FC<Props> = ({ id, back, type }) => {
  const { blogData, setBlogData, createBlogData, uniqueId } = useContext(AppContext);
  const [selectedData] = blogData.filter((i) => i.id === id);
  const [data, setData] = useState<BlogData>(
    selectedData ? selectedData : { id: uniqueId, desc: "", mins: "", recipe: "", title: "", url: "" }
  );

  return (
    <div>
      <Title text={type === "update" ? "Updater" : "Create"} />
      <FormInput
        name="user-name"
        placeHolder="Title"
        type="text"
        value={data.title}
        onChange={(ev) => {
          setData((i) => ({ ...i, title: ev.target.value }));
        }}
      />
      <FormInput
        name="user-name"
        placeHolder="Time"
        type="text"
        value={data.mins}
        onChange={(ev) => {
          setData((i) => ({ ...i, mins: ev.target.value }));
        }}
      />
      <FormInput
        name="user-name"
        placeHolder="url"
        type="text"
        value={data.url}
        onChange={(ev) => {
          setData((i) => ({ ...i, url: ev.target.value }));
        }}
      />
      <FormInput
        name="user-name"
        placeHolder="recipe"
        type="text"
        value={data.recipe}
        onChange={(ev) => {
          setData((i) => ({ ...i, recipe: ev.target.value }));
        }}
      />
      <Textarea
        placeHolder="type desc"
        value={data.desc}
        onChange={(ev) => {
          setData((i) => ({ ...i, desc: ev.target.value }));
        }}
      />
      {type === "update" ? (
        <Button
          value="Update"
          onClick={() => {
            setBlogData(id, data);
            alert("updated");
            back();
          }}
        />
      ) : (
        <Button
          value="Create"
          onClick={() => {
            createBlogData(data);
            alert("New Blog Created");
            back();
          }}
        />
      )}

      <Button value="Go Back" onClick={back} />
    </div>
  );
};

export default ContentUpdater;
