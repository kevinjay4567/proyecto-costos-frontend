import axios from "axios";
import FileData from "../interfaces/FileData";


export async function getAllFiles() : Promise<FileData[]> {
    return await axios.get<FileData[]>('http://localhost:3001/files')
    .then((response) => response.data);
}