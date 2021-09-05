import Note from "../models/Note.js";
import mongoose from "mongoose";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes); // 200 OK
  } catch (error) {
    res.status(404).json({ message: error.message }); // 404 Not Found
  }
};

export const createNote = async (req, res) => {
  const note = req.body;
  const newNote = new Note(note);

  try {
    await newNote.save();
    res.status(201).json(newNote); // 201 Created
  } catch (error) {
    res.status(409).json({ message: error.message }); // 409 Conflict
  }
};

export const updateNote = async (req, res) => {
  const { id: _id } = req.params;
  const note = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`No note with the id ${_id} exists`); // 404 Not Found
  }

  const updatedNote = await Note.findByIdAndUpdate(
    _id,
    { ...note, _id },
    {
      new: true,
    }
  );

  res.json(updatedNote);
};

export const deleteNote = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`No note with the id ${_id} exists`); // 404 Not Found
  }

  await Note.findByIdAndRemove(_id);

  res.json({ message: "Note deleted successfully" });
};
