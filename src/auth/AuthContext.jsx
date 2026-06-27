import { createContext, useState } from "react";

// create storage box for the authentication data 
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // checked if user already logged in
  // Get user from localStorage when opp state  
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // login function 
  const login = (userData) => {

    // save user data in browser storage
    localStorage.getItem(
      "user",
      JSON.stringify(userData)
    );

    // update react state
    setUser(userData);
  };

  // logout function
  const logout = (userData) => {

    // remove user from browser function
    localStorage.removeItem("user");

    // remove user from react state
    setUser(null);
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          login,
          logout
        }}>
        {children}
      </AuthContext.Provider>
    </div>
  )

};