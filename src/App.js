import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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