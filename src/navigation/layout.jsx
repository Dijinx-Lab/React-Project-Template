import "../App.css";
import React from "react";
import {
  useLocation,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../views/home/home-page";
import routes from "../constants/routes";

function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <div className="App-content">
        <Routes>
          <Route path={routes.default} element={<HomePage />} />
          <Route path={routes.home} element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;