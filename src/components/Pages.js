import { useContext } from "react";
import pageContext from "../contexts/pageContext";
import HomePage from "./HomePage";
import ResumePage from "./ResumePage";

function getPage(page) {
  switch (page) {
    case "about":
      return <HomePage />;
    case "resume":
      return <ResumePage />;
    default:
      return <HomePage />;
  }
}

function Pages() {
  const { page } = useContext(pageContext);

  return <div>{getPage(page)}</div>;
}

export default Pages;
