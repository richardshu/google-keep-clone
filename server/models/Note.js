import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  message: String,
  upvotes: {
    type: Number,
    default: 0,
  },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
