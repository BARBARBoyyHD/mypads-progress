import { Link } from "react-router-dom";
import styles from "../../styles/emptyState.module.css";
import { FiPlus } from "react-icons/fi";

const EmptyState = () => {
  return (
    <div className={styles.container}>
      <Link style={{ textDecoration: "none" , color:"inherit"}} to="/add/new/folder">
        <div className={styles.box}>
          <span className={styles.icon}>
            <FiPlus />
          </span>
          <p>У вас нет папок и заметок</p>
          <small>Нажмите сюда, чтобы создать новую папку</small>
        </div>
      </Link>
    </div>
  );
};

export default EmptyState;
