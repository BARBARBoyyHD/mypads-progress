import Header from "../components/header/Header";
import MovingNotesButton from "../components/button/MovingNotesButton";
import styles from "../styles/AddNotesButton.module.css";
const MoveNotesPages = () => {
  return (
    <main>
      <Header />
      <section>
        <h2 className={styles.breadcrumbs}>
          Мои папки / <span className={styles.folderName}>Папка 1 /</span> <span style={{color:"black"}}>Миграция заметок из папки</span> 
        </h2>
      </section>
      <section
        style={{ minHeight: "50vh", display: "flex", justifyContent: "center" }}
      >
        <MovingNotesButton />
      </section>
    </main>
  );
};

export default MoveNotesPages;
