import { useState, useEffect } from "react";

import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";

import { getNotes } from "./api";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const newNotes = await getNotes();
      setNotes(newNotes);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Form
        notes={notes}
        setNotes={setNotes}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />

      <br />
      <br />

      <Notes notes={notes} setNotes={setNotes} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
