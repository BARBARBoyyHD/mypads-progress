import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AddNewFolderPages from "./pages/AddNewFolderPages";
import MyFolderPages from "./pages/MyFolderPages";
import SingleFolderPages from "./pages/SingleFolderPages";
import FolderSettingsPages from "./pages/FolderSettingsPages";
import MoveNotesPages from "./pages/MoveNotesPages";
import MigrateNotesPages from "./pages/MigrateNotesPages";
import AdminSettingPages from "./pages/AdminSettingPages";
import BookMarksPages from "./pages/BookMarksPages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/add/new/folder" element={<AddNewFolderPages />} />
        <Route path="/all/my/folders" element={<MyFolderPages />} />
        <Route path="/single/folder/:id" element={<SingleFolderPages />} />
        <Route path="/folder/settings/:id" element={<FolderSettingsPages />} />

        {/* move notes should be by id this is just example */}
        {/* /move/notes/:id */}
        <Route path="/move/notes/" element={<MoveNotesPages />} />

        {/* same like move/notes should be migrate by id */}
        {/* /migrate/notes/:id */}
        <Route path="/migrate/notes" element={<MigrateNotesPages />} />
        {/* change into /admin/setting/:id */}
        <Route path="/admin/setting" element={<AdminSettingPages/>}/>
        <Route path="/all/my/bookmark" element={<BookMarksPages/>}/>
      </Routes>
    </Router>
  );
}

export default App;
