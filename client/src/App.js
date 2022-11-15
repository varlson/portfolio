import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorHandler from "./pages/ErrorHandler";
import Main from "./Main.";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="*" element={<ErrorHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
