
import styles from "./Footer.module.css";
import { Outlet } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
     <p className={styles.title}>
      Arte Alfonso te acerca a los productos 100% artesanales{" "}
    </p>
      <div style={{ width: "100%", backgroundColor: "red", height: "10vh" }}>
        <h4 style={{ color: "white" }}>Arte Alfonso</h4>
      </div>
    </>
  );
};

export default Footer;

