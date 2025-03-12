import { useNavigate } from "react-router-dom";
import styles from "../../styles/MovingNotesButton.module.css";
const MovingNotesButton = () => {
  const navigate = useNavigate();
  const handleMigrate = () => {
    navigate("/migrate/notes");
  };
  return (
    <div className={styles.container}>
      <h1>Папка 1</h1>
      <p>Извините, но нет доступных папок для миграции.</p>
      <button onClick={handleMigrate} className={styles.button}>
        Создать папку
      </button>
    </div>
  );
};

export default MovingNotesButton;
