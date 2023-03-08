import { useContext } from "react";
import pageContext from "../contexts/pageContext";

function PageButton({ thisPage, children }) {
  const { page, setPage } = useContext(pageContext);

  return (
    <button
      className={`h-full ${page === thisPage && " border-b-2 border-teal-400 text-teal-400"} hover:text-teal-400`}
      onClick={() => {
        setPage(thisPage);
      }}
    >
      {children}
    </button>
  );
}

export default PageButton;
