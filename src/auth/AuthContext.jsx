import { createContext, useState } from "react";


// Create authentication storage box
export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {


  // Check already logged in user
  // Get user from localStorage when app loads

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );



  // Login function

  const login = (userData) => {


    // Store user in browser storage

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );


    // Update React state

    setUser(userData);

  };



  // Logout function

  const logout = () => {


    // Remove user from localStorage

    localStorage.removeItem("user");


    // Clear React state

    setUser(null);

  };



  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};