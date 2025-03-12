import React, { useState } from "react";
import styles from "../../styles/FolderSettings.module.css";
import { useNavigate } from "react-router-dom";

// Define folder type
interface Folder {
  id: number;
  title: string;
  description?: string;
  visibility: "приватный" | "ограниченный" | "публичный";
  tags: string[];
}

// Define props for the component
interface FolderSettingsFormProps {
  folder: Folder;
}

const FolderSettingsForm: React.FC<FolderSettingsFormProps> = ({ folder }) => {
  const [name, setName] = useState(folder.title);
  const [description, setDescription] = useState(folder.description || "");
  const [visibility, setVisibility] = useState<Folder["visibility"]>(
    folder.visibility
  );
  // const [password, setPassword] = useState(""); // Empty string instead of '********'
  const [readOnly, setReadOnly] = useState(false);
  const [tags, setTags] = useState<string[]>(folder.tags || []);

  const navigate = useNavigate();

  // Handle tag input
  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value.split(",").map((tag) => tag.trim())); // Trim spaces
  };

  const handleSubmit = () => {
    navigate("/all/my/folders");
  };

  // Handle tag removal
  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.title}>Редактировать папку</h2>

        {/* Имя */}
        <label className={styles.label}>Имя</label>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Описание */}
        <label className={styles.label}>Описание</label>
        <input
          type="text"
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Видимость */}
        <label className={styles.label}>Видимость</label>
        <select
          className={styles.select}
          value={visibility}
          onChange={(e) =>
            setVisibility(e.target.value as Folder["visibility"])
          }
        >
          <option value="приватный">Приватный</option>
          <option value="ограниченный">Ограниченный</option>
          <option value="публичный">Публичный</option>
        </select>

        {/* Пароль (Only if not public) */}
        {visibility !== "публичный" && (
          <>
            <label className={styles.label}>Пароль</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              readOnly
            />
          </>
        )}

        {/* Только для чтения */}
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="readOnly"
            checked={readOnly}
            onChange={() => setReadOnly(!readOnly)}
          />
          <label htmlFor="readOnly" className={styles.checkboxLabel}>
            Только для чтения
          </label>
        </div>

        {/* Теги */}
        <label className={styles.label}>Теги</label>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}{" "}
              <button type="button" onClick={() => handleRemoveTag(index)}>
                ✖
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите теги через запятую"
          onChange={handleTagChange}
        />

        {/* Добавить */}
        <button onClick={handleSubmit} className={styles.addButton}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default FolderSettingsForm;
