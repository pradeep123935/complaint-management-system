import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Link to="/dashboard" className={styles.link}>
        Dashboard
      </Link>
      <hr />
      <Link to="/add-complaint" className={styles.link}>
        Add Complaint
      </Link>
      <hr />
      <Link to="/my-complaints" className={styles.link}>
        My Complaints
      </Link>
      <hr />
    </div>
  );
};

export default Sidebar;
