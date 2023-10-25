import { Link } from "react-router-dom";
import styles from "./auth.module.css";
const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.loginForm}>
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
        <button className={styles.btn}>Login</button>
      </form>
      <div className={styles.info}>
        Not have an account? <Link to="/register">click here</Link>
      </div>
    </div>
  );
};

export default Login;
