import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import useCreateDate from '../components/useCreateDate';

function CreateNote({setNotes}) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();
  const handleSubmit =(e) => {
     e.preventDefault();
     if(title && details)
     {
       const note = {id: uuid(), title, details,date}
       setNotes(prevNotes => [note,...prevNotes]);
       navigate('/');
       console.log(note);
     }
  }
  return (
    <section>
      <header className='create-note__header'>
      <Link to={'/'} ><IoIosArrowBack /></Link>
      <button className='btn lg primary' onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}> 
        <input type="text" autoFocus placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <textarea rows="28" placeholder='Note Details' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote