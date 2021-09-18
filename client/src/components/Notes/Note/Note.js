import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { useDispatch } from "react-redux";
import { upvoteNote, downvoteNote, deleteNote } from "../../../actions/notes";

function Note({ note, setCurrentId }) {
  const dispatch = useDispatch();

  const handleUpvote = () => {
    dispatch(upvoteNote(note._id));
  };

  const handleDownvote = () => {
    dispatch(downvoteNote(note._id));
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote(note._id));
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

      {/* Upvote, Downvote, Edit, & Delete buttons */}
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button color="primary" onClick={handleUpvote}>
          <ArrowUpwardIcon />
        </Button>
        {note.upvotes}
        <Button color="primary" onClick={handleDownvote}>
          <ArrowDownwardIcon />
        </Button>

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
