import styles from "./add-complaint.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddComplaint = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      title,
      description,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/complaint/addComplaint",
        body
      );
      toast.success(response?.data?.message);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Add Complaint</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Short info about complaint in 6-7 words"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Explain bref about the complaint"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddComplaint;
