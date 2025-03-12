import React from "react";
import Header from "../components/header/Header";
import FolderList from "../components/Folder/FolderList";
import styles from "../styles/MyFolderPages.module.css";

const MyFolderPages: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />
      <h1>Мои папки</h1>
      <FolderList />
    </main>
  );
};

export default MyFolderPages;
