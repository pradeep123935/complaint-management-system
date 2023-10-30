import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { userDetails, setDetails } = useContext(AuthContext);

  const logoutHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout"
      );
      if (response.status === 200) {
        setDetails(null);
        toast.success("Logout successfull!!");
        navigate("/");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div>Complaint Management System</div>
        <ul className={styles.list}>
          {userDetails !== "null" && userDetails ? (
            <li>
              <span className={styles.link} onClick={logoutHandler}>
                Logout
              </span>
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
