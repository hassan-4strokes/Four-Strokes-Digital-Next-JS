"use client";

import { createContext, useState } from "react";

export const Context = createContext({ isAuthenticated: false });

export const contextProvider = ({ children }) => {
  const [fullSidebar, setFullSidebar] = useState(true);

  const [localHost, setLocalHost] = useState("http://localhost:3000");

  const [renderHost, setRenderHost] = useState(
    "https://four-strokes-digital.onrender.com"
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState({});

  const [userDetails, setUserDetails] = useState({});

  // States Linked With Frontend

  const [dashboardLinksIndex, setDashboardLinksIndex] = useState(1);

  return (
    <Context.Provider
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
    </Context.Provider>
  );
};