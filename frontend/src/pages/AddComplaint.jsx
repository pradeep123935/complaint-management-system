import styles from "./add-complaint.module.css";
const AddComplaint = () => {
  return (
    <>
      <h1 className={styles.heading}>Add Complaint</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Short info about complaint in 6-7 words"
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
