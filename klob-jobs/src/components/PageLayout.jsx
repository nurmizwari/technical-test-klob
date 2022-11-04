import { Outlet } from "react-router-dom";
import Home from "./Navbar";

const PageLayout = () => {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
};

export default PageLayout;
