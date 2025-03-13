import React from "react";
import BookmarkCard from "../components/bookmark/BookmarkCard";
import NotesList from "../components/bookmark/NotesList"; // Import NotesList
import Header from "../components/header/Header";
import styles from "../styles/BookMarkPages.module.css";

// Define types for folder and note
interface Folder {
  id: number;
  type: string;
  title: string;
  isPublic: boolean;
  notesCount: number;
  tags: string[];
}

interface Note {
  id: number; // Add id
  title: string; // Rename "name" to "title"
  tags: string[];
}

const BookMarksPages: React.FC = () => {
  const folders: Folder[] = [
    {
      id: 1,
      type: "folder",
      title: "Папка",
      isPublic: true,
      notesCount: 1,
      tags: ["Теги", "Теги", "Теги"],
    },
    {
      id: 2,
      type: "folder",
      title: "Папка",
      isPublic: true,
      notesCount: 1,
      tags: ["Теги", "Теги", "Теги"],
    },
  ];

  const notes: Note[] = [
    { id: 1, title: "Заметка", tags: ["Теги", "Теги", "Теги"] },
    { id: 2, title: "Заметка 2", tags: ["Теги", "Теги", "Теги"] },
  ];

  return (
    <main>
      <Header />
      <section className={styles.bookMarkSection}>
        <h2>Папки</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            padding: "20px",
          }}
        >
          {folders.map((folder) => (
            <BookmarkCard key={folder.id} {...folder} />
          ))}
        </div>
      </section>

      <section className={styles.notesSection}>
        <h2>Заметки</h2>
        <NotesList notes={notes} /> {/* No need for `tags={[]}` */}
      </section>
    </main>
  );
};

export default BookMarksPages;
