import { useState, useEffect } from "react";
import { TextField, Button, Typography, Container } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../../actions/notes";

function Form({ currentId, setCurrentId }) {
  const [noteData, setNoteData] = useState({
    title: "",
    message: "",
    upvotes: 0,
  });

  const dispatch = useDispatch();
  const note = useSelector((state) =>
    currentId ? state.notes.find((note) => note._id === currentId) : null
  );

  // If we edit a note, populate the form's data fields with that note's info
  useEffect(() => {
    if (note) {
      setNoteData(note);
    }
  }, [currentId, note]);

  const handleSubmit = (event) => {
    event.preventDefault(); // to prevent refreshes in the browser

    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      dispatch(createNote(noteData));
    }
    handleClear();
  };

  const handleClear = () => {
    setCurrentId(null);
    setNoteData({
      title: "",
      message: "",
    });
  };

  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h4" align="center">
          {currentId ? "Edit Note" : "Create Note"}
        </Typography>

        <Container
          align="center"
          style={{ display: "flex", flexDirection: "column", width: "40%" }}
        >
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            value={noteData.title}
            onChange={(event) =>
              setNoteData({ ...noteData, title: event.target.value })
            }
          />

          <TextField
            name="message"
            variant="outlined"
            label="Message"
            value={noteData.message}
            onChange={(event) =>
              setNoteData({ ...noteData, message: event.target.value })
            }
            multiline={true}
            rows={3}
          />
        </Container>

        <Container align="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            {currentId ? "Update" : "Post"}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default Form;
