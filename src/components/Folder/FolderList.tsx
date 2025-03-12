import React, { useEffect } from "react";
import styles from "../../styles/FolderList.module.css";
import folders from "../data/FolderData"; // ✅ Import folder data
import FolderCard from "./FolderCard";



const FolderList: React.FC = () => {
  useEffect(() => {
    console.log(folders); // ✅ Debugging: Check folder data in console
  }, []);

  // Handle folder click

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
