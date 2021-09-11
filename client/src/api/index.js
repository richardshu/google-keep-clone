import axios from "axios";

const url = "http://localhost:5000/notes";

export const getNotes = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNote = async (notes, newNote) => {
  try {
    const { data } = await axios.post(url, newNote);
    return [...notes, data];
  } catch (error) {
    console.error(error);
  }
};

export const updateNote = async (notes, id, updatedNote) => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, updatedNote);
    return notes.map((note) => (note._id === data._id ? data : note));
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = async (notes, id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return notes.filter((note) => note._id !== id);
  } catch (error) {
    console.error(error);
  }
};

export const upvoteNote = async (notes, id) => {
  try {
    const { data } = await axios.patch(`${url}/${id}/upvote`);
    return notes.map((note) => (note._id === data._id ? data : note));
  } catch (error) {
    console.error(error);
  }
};

export const downvoteNote = async (notes, id) => {
  try {
    const { data } = await axios.patch(`${url}/${id}/downvote`);
    return notes.map((note) => (note._id === data._id ? data : note));
  } catch (error) {
    console.error(error);
  }
};
