import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/FolderCard.module.css";
import { FiMoreHorizontal, FiPlus } from "react-icons/fi";
import {  FaShareAlt, FaUserShield, FaStar, FaTrash } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

// Define an interface for FolderCard props
interface FolderCardProps {
  id: number;
  title: string;
  notesCount: number;
  tags: string[];
  visibility: string;
}

const FolderCard: React.FC<FolderCardProps> = ({ id, title, notesCount, tags, visibility }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Toggle dropdown
  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navigate to folder on click
  const handleFolderClick = () => {
    navigate(`/single/folder/${id}`);
  };

  return (
    <div className={styles.folderCard} style={{ cursor: "pointer" }} onClick={handleFolderClick}>
      <div className={styles.folderTab}>
        <button className={styles.moreButton} onClick={toggleDropdown}>
          <FiMoreHorizontal style={{ color: "white" }} />
        </button>

        {dropdownOpen && (
          <div className={styles.dropdownMenu} ref={dropdownRef}>
            <ul>
              <li>
                <Link to={`/folder/settings/${id}`} style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>
                  <IoSettings /> Настройки
                </Link>
              </li>

              {visibility !== "публичный" && (
                <li>
                  <FaShareAlt /> Поделиться
                </li>
              )}
              <li>
                <FaUserShield /> Администраторы
              </li>
              <li>
                <FaStar /> Избранное
              </li>
              <li className={styles.delete}>
                <FaTrash /> Удалить
              </li>
            </ul>
          </div>
        )}
      </div>

      <span className={`${styles.visibilityTag} ${styles[visibility]}`}>{visibility}</span>

      <div className={styles.content}>
        <h3 className={styles.folderTitle}>{title}</h3>
        <div className={styles.notesSection}>
          <p>
            Заметки: <strong>{notesCount}</strong>
          </p>
          <button className={styles.addNoteButton} onClick={(e) => e.stopPropagation()}>
            <FiPlus className={styles.plusIcon} />
          </button>
        </div>
      </div>

      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.emptyContent}></div>
    </div>
  );
};

export default FolderCard;
