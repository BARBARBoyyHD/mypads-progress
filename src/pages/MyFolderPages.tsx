import React from "react";
import FolderList from "../components/Folder/FolderList";
import Header from "../components/header/Header";
import styles from "../styles/MyFolderPages.module.css";
import Plus from "../assets/Plus.svg";
import { useNavigate } from "react-router-dom";

const MyFolderPages: React.FC = () => {
  const navigate = useNavigate()
  const AddFolder = ()=>{
    navigate("/add/new/folder")
  }
  return (
    <main>
      <Header />

      <section>
        <div className={styles.wrapNav}>
          <h1 style={{ color: "#3F4246", fontSize: "24px" }}>Мои папки</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={AddFolder} className={styles.button}>
              Добавить новую папку{" "}
              <img src={Plus} alt="plus icon" className={styles.plusIcon} />
            </button>
          </div>
        </div>

        <FolderList />
      </section>
    </main>
  );
};

export default MyFolderPages;
