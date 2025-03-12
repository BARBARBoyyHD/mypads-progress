export interface Folder{
    id: number;
    title: string;
    description: string;
    notesCount: number;
    tags: string[];
    visibility: "приватный" | "ограниченный" | "публичный";
    lastModified: string;
    admins: { name: string; email: string }[];
    files: { name: string; type: string; size: string }[];
}