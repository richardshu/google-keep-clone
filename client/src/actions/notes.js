import * as api from "../api";
import {
  GET_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  UPVOTE_NOTE,
  DOWNVOTE_NOTE,
} from "../constants/actionTypes";

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.getNotes();
    dispatch({ type: GET_NOTES, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({ type: CREATE_NOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);
    dispatch({ type: UPDATE_NOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await api.deleteNote(id);
    dispatch({ type: DELETE_NOTE, payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const upvoteNote = (id) => async (dispatch) => {
  try {
    const { data } = await api.upvoteNote(id);
    dispatch({ type: UPVOTE_NOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const downvoteNote = (id) => async (dispatch) => {
  try {
    const { data } = await api.downvoteNote(id);
    dispatch({ type: DOWNVOTE_NOTE, payload: data });
  } catch (error) {
    console.error(error);
  }
};
