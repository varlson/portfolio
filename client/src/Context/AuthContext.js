import { createContext, useState } from "react";
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [User, setUser] = useState({ name: "", email: "" });
  const [isAuth, setisAuth] = useState(false);
  const value = {
    User,
    isAuth: isAuth,
    setUser,
    setisAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
