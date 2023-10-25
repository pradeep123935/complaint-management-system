import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
