import { Link } from "react-router-dom";
import styles from "./auth.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setDetails } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        body
      );
      setDetails(JSON.stringify(response?.data));
      toast.success("Login successfull!!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.loginForm} onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          minLength="6"
          required
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
      <div className={styles.info}>
        Not have an account? <Link to="/register">click here</Link>
      </div>
    </div>
  );
};

export default Login;
