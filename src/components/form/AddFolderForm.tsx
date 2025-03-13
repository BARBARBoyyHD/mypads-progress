import React, { useState } from "react";
import styles from "../../styles/addFolderForm.module.css";
import { FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const AddFolderForm: React.FC = () => {
  const [folderName, setFolderName] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("Ограниченная");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>("");
  const navigate = useNavigate();

  const handleAddTag = (): void => {
    if (newTag.trim() !== "") {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };
  const handleRemoveTag = (index: number): void => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    navigate("/all/my/folders");
  };

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <h1>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
            <span>Мои папки / </span>
          </Link>
        </h1>

        <h1>
          {" "}
          <strong style={{ color: "#3F4246" }}>Добавить новую папку</strong>
        </h1>
      </nav>

      <div className={styles.formContainer}>
        <h3>Папка</h3>

        <label>Имя</label>
        <input
          type="text"
          placeholder="Название папки"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />

        <label>Видимость</label>
        <select
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
        >
          <option>Ограниченная</option>
          <option>Публичная</option>
        </select>

        <label>Теги</label>
        <div className={styles.tagsInput}>
          <input
            type="text"
            placeholder="Ваши теги"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
          <button onClick={handleAddTag} className={styles.okButton}>
            Ok
          </button>
        </div>

        <div className={styles.tagList}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag} <button onClick={() => handleRemoveTag(index)}>✕</button>
            </span>
          ))}
        </div>

        <button onClick={handleSubmit} className={styles.addButton}>
          <span style={{ fontSize: "15px" }}>Добавить</span>
          <FiPlus className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default AddFolderForm;
