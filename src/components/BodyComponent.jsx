import React from "react";
import SwitchPage from "../pages/SwitchPage";
import PrevNextPageBtn from "./PrevNextPageBtn";
import SaveExit from "./SaveExit";

const BodyComponent = () => {
  return (
    <>
      <SwitchPage />
      <PrevNextPageBtn />
      <SaveExit />
    </>
  );
};

export default BodyComponent;
