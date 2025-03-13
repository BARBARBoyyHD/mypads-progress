import React from "react";
import FolderList from "../components/Folder/FolderList";
import Header from "../components/header/Header";

const MyFolderPages: React.FC = () => {
  return (
    <main>
      <Header />

      <section>
        <h1 style={{padding:"10px"}}>Мои папки</h1>
        <FolderList />
      </section>
    </main>
  );
};

export default MyFolderPages;
