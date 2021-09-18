import {
  GET_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  UPVOTE_NOTE,
  DOWNVOTE_NOTE,
} from "../constants/actionTypes";

const notes = (notes = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    case CREATE_NOTE:
      return [...notes, action.payload];
    case UPDATE_NOTE:
    case UPVOTE_NOTE:
    case DOWNVOTE_NOTE:
      return notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    case DELETE_NOTE:
      return notes.filter((note) => note._id !== action.payload);

    default:
      return notes;
  }
};

export default notes;
