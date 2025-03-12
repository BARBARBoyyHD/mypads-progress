import React from "react";
import Header from "../components/header/Header";
import BookmarkCard from "../components/bookmark/BookmarkCard";
import NotesList from "../components/bookmark/NotesList"; // Import NotesList

const BookMarksPages = () => {
  const folders = [
    {
      type: "folder",
      title: "Папка",
      isPublic: true,
      notesCount: 1,
      tags: ["Теги", "Теги", "Теги"],
    },
    {
      type: "folder",
      title: "Папка",
      isPublic: true,
      notesCount: 1,
      tags: ["Теги", "Теги", "Теги"],
    },
  ];

  const notes = [
    { name: "Заметка", tags: ["Теги", "Теги", "Теги"] },
    { name: "Заметка 2", tags: ["Теги", "Теги", "Теги"] },
  ];

  return (
    <main>
      <Header />
      <section>
        <h2>Папки</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {folders.map((folder, index) => (
            <BookmarkCard key={index} {...folder} />
          ))}
        </div>
      </section>

      <section>
        <h2>Заметки</h2>
        <NotesList notes={notes} tags={[]} /> {/* Reusing NotesList */}
      </section>
    </main>
  );
};

export default BookMarksPages;
