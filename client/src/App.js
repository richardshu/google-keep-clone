import { useState, useEffect } from "react";

import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";

import { useDispatch } from "react-redux";
import { getNotes } from "./actions/notes";

import "./App.css";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <br />
      <br />
      <Notes setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
