import styles from "./styles.module.css";

const Button = ({ title, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
      ${styles.main} 
      ${type === "INFO" && styles.info} 
      ${type === "SUCCESS" && styles.success} 
      ${type === "DANGER" && styles.danger} 
      ${type === "WARNING" && styles.warning} 
      `}
    >
      {title}
    </button>
  );
};

export default Button;
