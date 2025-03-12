import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaEllipsisH,
  FaShareAlt,
  FaUserShield,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import styles from "../../styles/BookmarkCard.module.css";

interface Bookmark {
  id: number;
  title: string;
  isPublic: boolean;
  notesCount: number;
  tags: string[];
}

const BookmarkCard: React.FC<Bookmark> = ({
  id,
  title,
  isPublic,
  notesCount,
  tags,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={styles.card}>
      {/* Folder Header */}
      <div className={styles.header}>
        <span
          className={`${styles.status} ${
            isPublic ? styles.public : styles.private
          }`}
        >
          {isPublic ? "Публичная" : "Приватная"}
        </span>
        <button className={styles.moreButton} onClick={toggleDropdown}>
          <FaEllipsisH className={styles.moreIcon} />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className={styles.dropdownMenu} ref={dropdownRef}>
            <ul>
              <li>
                <Link to={`/folder/settings/${id}`} style={{textDecoration:"none",color:"inherit"}} className={styles.menuItem}>
                  <IoSettings /> Настройки
                </Link>
              </li>
              {!isPublic && (
                <li className={styles.menuItem}>
                  <FaShareAlt /> Поделиться
                </li>
              )}
              <li className={styles.menuItem}>
                <FaUserShield /> Администраторы
              </li>
              <li className={styles.menuItem}>
                <FaStar /> Избранное
              </li>
              <li className={`${styles.menuItem} ${styles.delete}`}>
                <FaTrash /> Удалить
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Folder Title & Notes */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.notesCount}>
          Заметки: <strong>{notesCount}</strong>
        </p>
      </div>

      {/* Tags */}
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BookmarkCard;
