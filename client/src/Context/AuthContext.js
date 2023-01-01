import { createContext, useState } from "react";
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [User, setUser] = useState({ name: "", email: "" });
  const [isAuth, setisAuth] = useState(false);
  const [data, setDate] = useState(null);
  const value = {
    User,
    isAuth: isAuth,
    setUser,
    setisAuth,
    data,
    setDate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
