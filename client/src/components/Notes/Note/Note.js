import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteNote } from "../../../api";

function Note({ notes, setNotes, note, setCurrentId }) {
  const handleDeleteNote = async () => {
    const newNotes = await deleteNote(notes, note._id);
    setNotes(newNotes);
  };

  return (
    <Card>
      {/* Title */}
      <Typography variant="h5" align="center">
        {note.title}
      </Typography>

      {/* Message */}
      <CardContent>
        <Typography>{note.message}</Typography>
      </CardContent>

      {/* Edit and Delete buttons */}
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button color="primary" onClick={() => setCurrentId(note._id)}>
          <EditIcon />
        </Button>
        <Button color="secondary" onClick={handleDeleteNote}>
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Note;
