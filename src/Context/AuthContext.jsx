import axios from "axios";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const [token, setToken] = useState(null);
  const login = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        config,
      );
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {}
    localStorage.setItem("token", token);
    setToken(token);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ login, token, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
