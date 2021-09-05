import { Grid } from "@material-ui/core";

import Note from "./Note/Note";

function Notes({ notes, setNotes, setCurrentId }) {
  return !notes.length ? (
    <h1>...loading</h1>
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {notes.map((note) => (
        <Grid item key={note._id} xs={12} sm={4}>
          <Note
            notes={notes}
            setNotes={setNotes}
            note={note}
            setCurrentId={setCurrentId}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Notes;
