import React from "react";
import Contact from "./Contact";

import Settlement from "./Settlement";
import Legal from "./Legal";
import Sarfaesi from "./Sarfaesi";
import Applicant from "./Applicant";
import Asset from "./Asset";
import Notepad from "./Notepad";
import Document from "./Document";

import { Box } from "@chakra-ui/react";

const RenderPage = ({ isActive }) => {
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

export default RenderPage;
