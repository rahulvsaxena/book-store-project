import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    axios
      .post('http://localhost:5555/books', data)
      .then(navigate('/'))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create Book</h1>
      <div>
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Publish Year</label>
        <input type="number" onChange={(e) => setPublishYear(e.target.value)} />
      </div>
      <button onClick={handleSaveBook}>Save</button>
    </div>
  );
};

export default CreateBooks;
