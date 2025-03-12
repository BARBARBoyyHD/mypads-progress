export interface Folder{
    id: number;
    title: string;
    notesCount: number;
    tags: string[];
    visibility: string;
    lastModified: string;
    admins: { name: string; email: string }[];
    files: { name: string; type: string; size: string }[];
}