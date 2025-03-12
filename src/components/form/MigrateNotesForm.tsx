import React, { useState } from "react";
import styles from "../../styles/MigrateNotesFrom.module.css";
import { useNavigate } from "react-router-dom";

interface MigrateNotesFormProps {
  folders: { id: string; name: string }[];
  notes: string[];
  onSubmit: (selectedNotes: string[], targetFolder: string) => void;
}

const MigrateNotesForm: React.FC<MigrateNotesFormProps> = ({ folders, notes, onSubmit }) => {
  const [selectedFolder, setSelectedFolder] = useState<string>(folders[0]?.id || "");
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const navigate = useNavigate()
 

  const handleFolderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFolder(e.target.value);
  };

  const handleNoteChange = (note: string) => {
    setSelectedNotes((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedNotes(selectAll ? [] : [...notes]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedNotes, selectedFolder);
    // change the id by fetching the data 
    navigate(`/single/folder/${4}`)
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Мигрировать из папки</h2>

      <label className={styles.label}>В меню</label>
      <select
        value={selectedFolder}
        onChange={handleFolderChange}
        className={styles.select}
      >
        {folders.map((folder) => (
          <option key={folder.id} value={folder.id}>
            {folder.name}
          </option>
        ))}
      </select>

      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className={styles.checkbox}
          />
          <span>Выбрать все заметки</span>
        </label>
      </div>

      {notes.map((note, index) => (
        <div key={index} className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedNotes.includes(note)}
              onChange={() => handleNoteChange(note)}
              className={styles.checkbox}
            />
            <span>{note}</span>
          </label>
        </div>
      ))}

      <button type="submit" className={styles.submitButton}>Мигрировать</button>
    </form>
  );
};

export default MigrateNotesForm;
