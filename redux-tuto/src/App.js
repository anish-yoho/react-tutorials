import React from "react";
import AllRoutes from "./views/routes/Navigation";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <AllRoutes />
      <Outlet />
    </div>
  );
};

export default App;
