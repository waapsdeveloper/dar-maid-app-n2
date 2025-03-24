import React, { createContext, useContext, useState, useEffect } from "react";

// Create User Context
const UserContext = createContext();

// Custom Hook to use User Context
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ networkService, children }) => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);

  // Load user from local storage on mount


  // Get user from local storage
  const getUser = () => user;

  // Set user and save to local storage
  const setUserData = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setImage(userData.image);
  };

  // Get user role
  const getUserRole = () => (user && user.role_id ? user.role_id : -1);

  // Fetch logged-in user from API
  const getLoginUserFromApi = async () => {
    return new Promise(async (resolve) => {
      let token = localStorage.getItem("token");
      if (!token) {
        resolve(false);
        return;
      }
      try {
        let res = await networkService.getUserByToken();
        setUserData(res.user);
        resolve(res.user);
      } catch (err) {
        resolve(false);
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        image,
        getUser,
        setUserData,
        getUserRole,
        getLoginUserFromApi,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
