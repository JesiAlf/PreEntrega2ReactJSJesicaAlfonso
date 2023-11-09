import { NavBar } from "./navBar/NavBar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
    <div style={{height:"30vh"}}>
    <NavBar/>
    </div>

    <div style={{minHeight:"80vh"}}>
        <Outlet/>
    </div>
    <div style={{height:"10vh"}}>
        <Footer/>
    </div>
    </div>
  );
};

export default Layout;