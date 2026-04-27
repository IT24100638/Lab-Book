import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getBooks = () => API.get("/api/books");
export const getBookById = (id) => API.get(`/api/books/${id}`);
export const createBook = (bookData) => API.post("/api/books", bookData);
export const updateBook = (id, bookData) => API.put(`/api/books/${id}`, bookData);
export const deleteBook = (id) => API.delete(`/api/books/${id}`);

export default API;
