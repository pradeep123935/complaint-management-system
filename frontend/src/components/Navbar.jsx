import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { userDetails, setDetails } = useContext(AuthContext);
  return (
    <header>
      <nav className={styles.nav}>
        <div>Complaint Management System</div>
        <ul className={styles.list}>
          {userDetails !== "null" && userDetails ? (
            <li>
              <span className={styles.link}>Logout</span>
            </li>
          ) : (
            <>
              <li>
                <Link to="/" className={styles.link}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className={styles.link}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
