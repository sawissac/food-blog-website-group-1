import React from "react";
import Title from "./Title";
import FormInput from "./FormInput";
import Button from "./Button";
import Textarea from "./FormInputArea";

const ContentUpdater = () => {
  return (
    <div>
      <Title text="Updater" />
      <FormInput name="user-name" placeHolder="Title" type="text" />
      <FormInput name="user-name" placeHolder="Time" type="text" />
      <FormInput name="user-name" placeHolder="url" type="text" />
      <FormInput name="user-name" placeHolder="recipe" type="text" />
      <Textarea placeHolder="type desc" />
      <Button value="Update" />
      <Button value="Go Back" />
    </div>
  );
};

export default ContentUpdater;
