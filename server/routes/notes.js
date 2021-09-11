import express from "express";

import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  upvoteNote,
  downvoteNote,
} from "../controllers/notes.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);
router.patch("/:id/upvote", upvoteNote);
router.patch("/:id/downvote", downvoteNote);

export default router;
