import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react';
import useCreateDate from '../components/useCreateDate';
import {RiDeleteBin6Line} from 'react-icons/ri'

function EditNote({notes, setNotes}) {
  const {id} = useParams(); //This is used to extract specific properties from an object
  const note  = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
     e.preventDefault();
    if(title && details){
      const newNote = {...note,title,details,date};
      const newNotes = notes.map((note) => {
        if(note.id === id)
        {
          note = newNote;
        }
        return note;
      });
      setNotes(newNotes);
    }
    navigate("/");
  }

  const handleDelete = (e) => {
    if(window.confirm("Are you sure you want to delete?")){
      const newNotes = notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
      navigate("/");
    }
  }

  return (
    <section>
    <header className='edit-note__header'>
    <Link to={'/'} ><IoIosArrowBack /></Link>
    <button className='btn lg primary' onClick={handleForm}>Save</button>
    <button className='btn danger' onClick={handleDelete}><RiDeleteBin6Line /></button>
    </header>
    <form className="edit-note__form" onSubmit={handleForm}>
      <input type="text" autoFocus placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
      <textarea rows="28" placeholder='Note Details' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
    </form>
  </section>
  )
}

export default EditNote