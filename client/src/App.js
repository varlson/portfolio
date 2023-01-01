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
import axios from "axios";
function App() {
  const { data, setDate } = useContext(AuthContext);

  const loadAbout = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://varlson-api.onrender.com/about")
        .then((res) => {
          resolve(res.data.succ[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    loadAbout()
      .then((res) => {
        setDate(res);
        console.log(res);
      })
      .catch((error) => {
        // console.error("deu erro");
        console.log(error);
      });
  }, []);

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
