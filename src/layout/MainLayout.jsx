import { Outlet } from "react-router-dom";
import Navbar from "../component/homePage/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
