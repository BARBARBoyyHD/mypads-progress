import { useParams } from "react-router-dom";
import FolderSettingsForm from "../components/Folder/FolderSettingsForm";
import { folders } from "../components/data/FolderData"; // Import folders data
import Header from "../components/header/Header";

const FolderSettingsPage = () => {
  const { id } = useParams<{ id: string }>(); // Get folder ID from URL
  const folder = folders.find((folder) => folder.id === Number(id)); // Find folder by ID

  if (!folder) {
    return <p>Папка не найдена</p>; // Show message if folder not found
  }

  return (
    <main>
      <Header />
      <h1 style={{ fontSize: "24px", color: "#3F42464D" }}>
        Мои папки /{" "}
        <span style={{ color: "#3F4246" }}>Редактировать папку</span>
      </h1>
      <section>
        <FolderSettingsForm folder={folder} />
      </section>
    </main>
  );
};

export default FolderSettingsPage;
