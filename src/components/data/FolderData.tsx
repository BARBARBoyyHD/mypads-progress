import {Folder} from "../../types/folder";

export const folders: Folder[] = [
  {
    id: 1,
    title: "Папка1",
    description: "Рабочие заметки",
    notesCount: 3,
    tags: ["Теги", "Теги", "Теги"],
    visibility: "ограниченный",
    lastModified: "2024-03-10",
    admins: [
      { name: "Tester", email: "text@example.mail.ru" },
      { name: "Tester", email: "text@example.mail.ru" },
    ],
    files: [
      { name: "Заметка", type: "text", size: "12KB" },
      { name: "Заметка 2", type: "text", size: "15KB" },
      { name: "Заметка 3", type: "text", size: "10KB" }
    ],
  },
  {
    id: 2,
    title: "Папка2",
    description: "Личные файлы",
    notesCount: 1,
    tags: ["Теги", "Теги", "Теги"],
    visibility: "публичный",
    lastModified: "2024-03-08",
    admins: [{ name: "Tester", email: "text@example.mail.ru" }],
    files: [{ name: "Личный документ", type: "pdf", size: "120KB" }],
  },
  {
    id: 3,
    title: "Папка3",
    description: "Проектные файлы",
    notesCount: 2,
    tags: ["Теги", "Теги", "Теги"],
    visibility: "приватный",
    lastModified: "2024-03-05",
    admins: [
      { name: "Tester", email: "text@example.mail.ru" },
      { name: "Tester", email: "text@example.mail.ru" },
      { name: "Tester", email: "text@example.mail.ru" },
    ],
    files: [
      { name: "Проект 1", type: "docx", size: "25KB" },
      { name: "Проект 2", type: "xlsx", size: "40KB" },
    ],
  },
  {
    id: 4,
    title: "Папка4",
    description: "Проектные файлы",
    notesCount: 2,
    tags: ["Теги", "Теги", "Теги"],
    visibility: "приватный",
    lastModified: "2024-03-05",
    admins: [
      { name: "Tester", email: "text@example.mail.ru" },
      { name: "Tester", email: "text@example.mail.ru" },
      { name: "Tester", email: "text@example.mail.ru" },
    ],
    files: [],
  },
];

export default folders;
