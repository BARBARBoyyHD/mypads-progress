import React from "react";
import Header from "../components/header/Header";
import MigrateNotesForm from "../components/form/MigrateNotesForm";

const MigrateNotesPage: React.FC = () => {
  const folders = [
    { id: "folder1", name: "Папка 1" },
    { id: "folder2", name: "Папка 2" },
  ];

  const notes = ["Пад 1", "Пад 2", "Пад 3", "Пад 4", "Пад 5"];

  const handleMigrate = (selectedNotes: string[], targetFolder: string) => {
    console.log("Migrating notes:", selectedNotes, "to", targetFolder);
  };

  return (
    <main>
      <Header />
      <section>
        <h1 style={{color:"#3F42464D"}}>
          Мои папки/ Папка /<span style={{color:"#3F4246"}}> Миграция заметок из папки</span>
        </h1>
      </section>
      <section>
        <MigrateNotesForm
          folders={folders}
          notes={notes}
          onSubmit={handleMigrate}
        />
      </section>
    </main>
  );
};

export default MigrateNotesPage;
