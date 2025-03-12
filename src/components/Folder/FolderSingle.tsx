import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import folders from "../data/FolderData";
import styles from "../../styles/SingleFolder.module.css";
import NewNoteButton from "../button/NewNoteButton";
import { FaPlus, FaCog, FaStar, FaTrash } from "react-icons/fa";

// Define types
interface File {
  name: string;
}

interface Admin {
  name: string;
  email: string;
}

interface Folder {
  id: number;
  title: string;
  files: File[];
  tags?: string[];
  admins?: Admin[];
}

// Component
const FolderSingle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const folderId = parseInt(id || "0", 10);
  const folder: Folder | undefined = folders.find((f) => f.id === folderId);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  // If folder is not found
  if (!folder) {
    return <div className={styles.error}>Папка не найдена</div>;
  }

  // Navigation functions
  const editFolder = () => navigate(`/folder/settings/${id}`);
  const moveNotes = () => navigate(`/move/notes`);
  const adminSettings = () => navigate(`/admin/setting`);

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <div className={styles.wrapNav}>
        <h2 className={styles.breadcrumbs}>
          Мои папки / <span className={styles.folderName}>{folder.title}</span>
        </h2>

        {/* Top Buttons */}
        <div className={styles.topButtons}>
          {folder.files.length > 0 && (
            <button className={styles.shareButton}>🔗 Поделиться</button>
          )}
          <button className={styles.deleteButton}>🗑 Удалить папку</button>
          {folder.files.length > 0 && (
            <button className={styles.unsubscribeButton}>
              ⚠ Отписаться от папки
            </button>
          )}
        </div>
      </div>

      <div className={styles.WrapNotesAdmin}>
        {/* Folder Container */}
        <div>
          <div className={styles.folderContainer}>
            {folder.files.length > 0 ? (
              folder.files.map((file, index) => (
                <div key={index} className={styles.noteCard}>
                  <div className={styles.noteHeader}>
                    <span className={styles.noteIcon}>📘</span>
                    <div className={styles.dropdownContainer}>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={styles.moreButton}
                      >
                        •••
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
                    {folder.tags?.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.folderContainer}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NewNoteButton />
                </div>
              </div>
            )}
          </div>

          {/* Move Folder Button (Only show if there are notes) */}
          {folder.files.length > 0 && (
            <button onClick={moveNotes} className={styles.moveButton}>
              📂 Переместить папку в другую папку
            </button>
          )}
        </div>

        <div>
          <div className={styles.adminPanel}>
            <h3>Администраторы</h3>
            <ul>
              {folder.admins?.map((admin, index) => (
                <li key={index}>
                  {admin.name}{" "}
                  <span className={styles.adminEmail}>{admin.email}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={adminSettings} className={styles.adminButton}>
                <p style={{ fontSize: "13px" }}>Совместное администрирование</p>{" "}
                <FaPlus />
              </button>
            </div>
          </div>
          <div className={styles.configurations}>
            <button onClick={editFolder} className={styles.configButton}>
              ⚙ Конфигурации
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderSingle;
