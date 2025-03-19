"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [fullSidebar, setFullSidebar] = useState(true);
  const [localHost, setLocalHost] = useState("http://localhost:3000");
  const [renderHost, setRenderHost] = useState(
    "https://four-strokes-digital.onrender.com"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [dashboardLinksIndex, setDashboardLinksIndex] = useState(1);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        userDetails,
        setUserDetails,
        dashboardLinksIndex,
        setDashboardLinksIndex,
        localHost,
        setLocalHost,
        renderHost,
        setRenderHost,
        fullSidebar,
        setFullSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
