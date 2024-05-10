import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./Style.css";
import Csk from "./components/Csk";
import Mi from "./components/Mi";
import Rcb from "./components/Rcb";
import Srh from "./components/Srh";
import Team from "./components/Team";
import India from "./components/India";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Team></Team>}></Route>
          <Route path="/india" element={<India></India>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;