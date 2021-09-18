import { Grid } from "@material-ui/core";
import Note from "./Note/Note";

import { useSelector } from "react-redux";

function Notes({ setCurrentId }) {
  const notes = useSelector((state) => state.notes);

  return !notes.length ? (
    <h1>...loading</h1>
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {notes.map((note) => (
        <Grid item key={note._id} xs={12} sm={4}>
          <Note note={note} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Notes;
