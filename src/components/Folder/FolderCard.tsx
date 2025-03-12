import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/FolderCard.module.css";
import { FiMoreHorizontal, FiPlus } from "react-icons/fi";
import { FaCog, FaShareAlt, FaUserShield, FaStar, FaTrash } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";

const FolderCard = ({ id, title, notesCount, tags, visibility }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Toggle dropdown
  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent folder click from triggering navigation
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div className={styles.folderCard} style={{cursor: "pointer"}} onClick={handleFolderClick}>
      {/* Folder Tab with More Options */}
      <div className={styles.folderTab}>
        <button className={styles.moreButton} onClick={toggleDropdown}>
          <FiMoreHorizontal style={{ color: "white" }} />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className={styles.dropdownMenu} ref={dropdownRef}>
            <ul>
              <li>
                <Link to={`/folder/settings/${id}`} style={{ color: "inherit" , textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>
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

      {/* Visibility Tag */}
      <span className={`${styles.visibilityTag} ${styles[visibility]}`}>
        {visibility}
      </span>

      {/* Folder Title & Notes Section */}
      <div className={styles.content}>
        <h3 className={styles.folderTitle}>{title}</h3>
        <div className={styles.notesSection}>
          <p>
            Заметки: <strong>{notesCount}</strong>
          </p>
          <button
            className={styles.addNoteButton}
            onClick={(e) => e.stopPropagation()} // Prevent navigation when clicking "+"
          >
            <FiPlus className={styles.plusIcon} />
          </button>
        </div>
      </div>

      {/* Tags Section */}
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Empty Content Area */}
      <div className={styles.emptyContent}></div>
    </div>
  );
};

export default FolderCard;
