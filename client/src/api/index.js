import axios from "axios";

const url = "http://localhost:5000/notes";

export const getNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
export const updateNote = (id, updatedNote) =>
  axios.patch(`${url}/${id}`, updatedNote);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);
export const upvoteNote = (id) => axios.patch(`${url}/${id}/upvote`);
export const downvoteNote = (id) => axios.patch(`${url}/${id}/downvote`);
