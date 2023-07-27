import React from "react";
import Contact from "./collectionPage/Contact/Contact";
import Settlement from "./collectionPage/Settlement";
import Legal from "./collectionPage/Legal";
import Sarfaesi from "./collectionPage/Sarfaesi";
import Applicant from "./collectionPage/Applicant";
import Asset from "./collectionPage/Asset";
import Notepad from "./collectionPage/Notepad";
import Document from "./collectionPage/Document";

import { Box } from "@chakra-ui/react";

const Content = ({ isActive }) => {
  const renderComp = (active) => {
    switch (active) {
      case "Contact":
        return <Contact />;
      case "Settlement":
        return <Settlement />;
      case "Legal":
        return <Legal />;
      case "Sarfaesi":
        return <Sarfaesi />;
      case "Applicant":
        return <Applicant />;
      case "Asset":
        return <Asset />;
      case "Notepad":
        return <Notepad />;
      case "Document":
        return <Document />;
      default:
        return null;
    }
  };
  return <Box>{renderComp(isActive)}</Box>;
};

export default Content;
