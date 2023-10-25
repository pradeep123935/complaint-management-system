import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <h1 className={styles.heading}>Dashboard</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Complaints Raised</h3>
          <h3>4</h3>
        </div>
        <div className={styles.card}>
          <h3>Complaints Resolved</h3>
          <h3>4</h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
