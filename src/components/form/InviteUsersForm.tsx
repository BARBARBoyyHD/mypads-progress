import { useState } from "react";
import styles from "../../styles/InviteUsers.module.css";
import { useNavigate } from "react-router-dom";

const InviteUsersForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [selectedEmails, setSelectedEmails] = useState<string[]>([
    "invited1@test.com",
    "invited2@test.com",
    "invited3@test.com",
  ]);
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    navigate("/all/my/folders");
  };

  const handleAddEmail = (): void => {
    if (email.trim() && !selectedEmails.includes(email)) {
      setSelectedEmails([...selectedEmails, email.trim()]);
      setEmail(""); // Clear input after adding
    }
  };

  const handleRemoveEmail = (emailToRemove: string): void => {
    setSelectedEmails((prevEmails) =>
      prevEmails.filter((e) => e !== emailToRemove)
    );
  };

  return (
    <div className={styles.inviteContainer}>
      <h3>Пригласить пользователей</h3>
      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="example@test.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddEmail}>Ok</button>
      </div>

      <div className={styles.selectedUsers}>
        <h4>Выбранные пользователи</h4>
        <div className={styles.emailList}>
          {selectedEmails.map((email, index) => (
            <div key={index} className={styles.emailChip}>
              {email}{" "}
              <span
                onClick={() => handleRemoveEmail(email)}
                style={{ cursor: "pointer" }}
              >
                ✕
              </span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className={styles.saveButton}>
        Сохранить
      </button>
    </div>
  );
};

export default InviteUsersForm;
