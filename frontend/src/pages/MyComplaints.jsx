import { Link } from "react-router-dom";
import styles from "./my-complaints.module.css";

const MyComplaints = () => {
  return (
    <>
      <h1 className={styles.heading}>My Complaints</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>S.No</th>
            <th className={styles.th}>Complaint Title</th>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>1</td>
            <td className={styles.td}>Food is not good</td>
            <td className={styles.td}>23-10-2023</td>
            <td className={styles.td}>Submitted</td>
            <td className={styles.td}>
              <Link to="/">View</Link>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>1</td>
            <td className={styles.td}>Food is not good</td>
            <td className={styles.td}>23-10-2023</td>
            <td className={styles.td}>Submitted</td>
            <td className={styles.td}>
              <Link to="/">View</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MyComplaints;
