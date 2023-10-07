import React, { useEffect, useState } from 'react'
import {MdClose} from 'react-icons/md';
import {CiSearch} from 'react-icons/ci';
import NoteItem from '../components/NoteItem';
import { Link } from 'react-router-dom';
import {BsPlusLg} from 'react-icons/bs';

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);
   
  const handleSearch = () => {
    setFilteredNotes(notes.filter(function(note) {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase()))
      {
        return note;
      }
      else {
      return '';
      }
    }))
  }

  useEffect(handleSearch,[text,notes]);

  const handleToggleSearch = () => {
    setShowSearch(prevState => !prevState);
    setText(''); // Reset the search text
    setFilteredNotes(notes); // Reset filteredNotes to show all notes
  }

  return (
    <section>
    <header className='notes__header'>
    {!showSearch && <h2>My Notes</h2>}
    {showSearch &&
    <input type="text"autoFocus placeholder='keyword' onChange={(e)=> {setText(e.target.value);handleSearch();}}/>}
    <button className="btn" onClick={handleToggleSearch}>{showSearch ? <MdClose/> : <CiSearch />}</button>
    </header>
    <div className="notes__container">
      { filteredNotes.length === 0 && <p className='empty__notes'>No notes found.</p> }
      {
        filteredNotes?.map(note => <NoteItem key={note.id} note={note}/>)
      }
    </div>
    <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes;