
import CartWidget from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import {Link, Outlet} from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <div className={"ContainerNavBar"}>
        <img
          src="https://res.cloudinary.com/dphzc4d5r/image/upload/v1695681451/logotransp_pprvix.png"
          alt="logo"
        />
        <Link to="/">
          <h4>Arte Alfonso</h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Todas</li>
          </Link>
          <Link to="/category/decoracion">
            <li>decoracion</li>
          </Link>
          <Link to="/category/relojes">
            <li>relojes</li>
          </Link>
        </ul>
        <CartWidget />

      </div>
      <Outlet/>
  
    </>
     );
    };
      