import { useState } from "react";
import styles from "../../styles/InviteUsers.module.css";
import { useNavigate } from "react-router-dom";

const InviteUsersForm = () => {
  const [email, setEmail] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([
    "invited1@test.com",
    "invited2@test.com",
    "invited3@test.com",
  ]);
  const navigate = useNavigate()

  const handleSubmit = ()=>{
    navigate("/all/my/folders")
  }

  const handleAddEmail = () => {
    if (email && !selectedEmails.includes(email)) {
      setSelectedEmails([...selectedEmails, email]);
      setEmail(""); // Clear input after adding
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setSelectedEmails(selectedEmails.filter((e) => e !== emailToRemove));
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
              {email} <span onClick={() => handleRemoveEmail(email)}>✕</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className={styles.saveButton}>Сохранить</button>
    </div>
  );
};

export default InviteUsersForm;
