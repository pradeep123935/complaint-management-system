import styles from "./auth.module.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      <form className={styles.loginForm}>
        <input
          type="text"
          placeholder="Name"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.btn}>Register</button>
      </form>
      <div className={styles.info}>
        have an account? <Link to="/">click here</Link>
      </div>
    </div>
  );
};

export default Register;
