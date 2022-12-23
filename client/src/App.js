import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorHandler from "./pages/ErrorHandler";
import Main from "./Main.";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Test from "./test/Test";
import Protected from "./setup/Protected";
import { useEffect } from "react";
import AuthContext, { AuthProvider } from "./Context/AuthContext";
import { useContext } from "react";
import Requisitons from "./backend/Req";
function App() {
  const { setisAuth } = useContext(AuthContext);
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<ErrorHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
