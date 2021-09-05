import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  message: String,
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
