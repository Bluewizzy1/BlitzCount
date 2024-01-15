import { Routes, Route } from "react-router-dom";

import "./index.css";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="bg-[#D2D2D2]">
      <Topbar />
      <div className="bg-white mt-5 max-w-maxBoundary w-full mx-auto">
        <Routes>
          <Route>
            <Route index element={<Dashboard />} />
            <Route path="register" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
//
