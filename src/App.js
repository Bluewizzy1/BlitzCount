import { Routes, Route } from "react-router-dom";

import "./index.css";

import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="bg-[#D2D2D2]">
      <Topbar/>
      <Routes>
        <Route>
          <Route index element={<Dashboard />} />
          <Route path="register" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// 