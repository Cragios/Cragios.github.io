import { createContext } from "react";

const pageContext = createContext({
  page: "home",
  setPage: (page) => {},
});

export default pageContext;
