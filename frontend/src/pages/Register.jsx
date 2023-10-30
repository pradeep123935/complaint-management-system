import styles from "./auth.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      password,
    };
    try {
      await axios.post("http://localhost:3000/api/auth/register", body);
      toast.success("Registration successfull!!");
      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      <form className={styles.loginForm} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          value={name}
          minLength={4}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          required
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          Register
        </button>
      </form>
      <div className={styles.info}>
        have an account? <Link to="/">click here</Link>
      </div>
    </div>
  );
};

export default Register;
