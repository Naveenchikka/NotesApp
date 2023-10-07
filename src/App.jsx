import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import Notes from './pages/Notes';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes));
  },[notes]);

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Notes notes={notes}/>} />
        <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
        <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App