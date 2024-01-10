import { Routes, Route } from "react-router-dom";

import "./index.css";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="bg-[#D2D2D2] w-[360px] px-[30px]">
      <Topbar/>
      <Routes>
        <Route>
          <Route index element={<Dashboard />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// 