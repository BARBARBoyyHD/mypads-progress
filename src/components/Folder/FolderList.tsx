import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import React Router navigation
import FolderCard from "./FolderCard";
import styles from "../../styles/FolderList.module.css";
import folders from "../data/FolderData"; // ✅ Import folder data



const FolderList: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation function

  useEffect(() => {
    console.log(folders); // ✅ Debugging: Check folder data in console
  }, []);

  // Handle folder click
  const handleFolderClick = (id: number) => {
    navigate(`/single/folder/${id}`); // Navigate to folder details page
  };

  return (
    <div className={styles.folderList}>
      {folders.map((folder) => (
        <FolderCard
          key={folder.id}
          {...folder} 
          // Pass folder properties as props
        />
      ))}
    </div>
  );
};

export default FolderList;
