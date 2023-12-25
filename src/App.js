import { Routes, Route } from "react-router-dom";

import "./index.css";

import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="bg-black text-white">
      I laugh in spanish
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