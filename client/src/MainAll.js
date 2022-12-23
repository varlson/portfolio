import React from "react";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
function MainAll() {
  return (
    <div>
      <AuthProvider>
        <App />
      </AuthProvider>
    </div>
  );
}

export default MainAll;
