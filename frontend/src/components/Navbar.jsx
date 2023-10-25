import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div>Complaint Management System</div>
        <ul className={styles.list}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
