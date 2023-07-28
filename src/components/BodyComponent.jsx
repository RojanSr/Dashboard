import React from "react";
import CollectionTabSection from "./collectionTabs";
import ChangePage from "./ChangePage";
import SaveExit from "./SaveExit";

const BodyComponent = () => {
  return (
    <>
      <CollectionTabSection />
      <ChangePage />
      <SaveExit />
    </>
  );
};

export default BodyComponent;
