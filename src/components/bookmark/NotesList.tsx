import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/NotesList.module.css";
import { FaCog, FaStar, FaTrash,FaEllipsisH } from "react-icons/fa";

const NotesList = ({ notes, tags }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className={styles.notesContainer}>
      {notes.length > 0 ? (
        notes.map((file, index) => (
          <div key={index} className={styles.noteCard}>
            <div className={styles.noteHeader}>
              <span className={styles.noteIcon}>📘</span>
              <div className={styles.dropdownContainer}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className={styles.moreButton}
                >
                  <FaEllipsisH/>
                </button>
                {dropdownOpen === index && (
                  <div ref={dropdownRef} className={styles.dropdownMenu}>
                    <button className={styles.dropdownItem}>
                      <FaCog /> Настройки
                    </button>
                    <button className={styles.dropdownItem}>
                      <FaStar /> Избранное
                    </button>
                    <button className={styles.dropdownItem}>
                      <FaTrash /> Удалить
                    </button>
                  </div>
                )}
              </div>
            </div>
            <h3 className={styles.noteTitle}>{file.name}</h3>
            <div className={styles.tags}>
              {tags?.map((tag, i) => (
                <span key={i} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noNotes}>Нет заметок</div>
      )}
    </div>
  );
};

export default NotesList;