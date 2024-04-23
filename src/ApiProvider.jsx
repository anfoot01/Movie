import { Outlet, useLocation } from "react-router-dom";
import { createContext, useMemo } from "react";
import { Header } from "./shared/ui/Header/Header.jsx";
import { Sidebar } from "./shared/ui/Sidebar/Sidebar";

export const ApiContext = createContext({});

export const ApiProvider = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const value = useMemo(() => ({}), []);

  return (
    <ApiContext.Provider value={value}>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Sidebar />
    </ApiContext.Provider>
  );
};
