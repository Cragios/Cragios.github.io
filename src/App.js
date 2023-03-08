import { useState } from "react";
import pageContext from "./contexts/pageContext";
import Header from "./components/Header";
import Pages from "./components/Pages";

function App() {
  const [page, setPage] = useState("resume");

  return (
    <pageContext.Provider value={{ page, setPage }}>
      <div className="min-h-screen bg-slate-900 text-slate-300">
        <Header />
        <Pages />
        <div></div>
      </div>
    </pageContext.Provider>
  );
}

export default App;
