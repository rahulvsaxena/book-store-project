import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5555/books/${id}`).then((response) => {
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
    }).catch((error) => {
      console.log(error);
    });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    axios.put(`http://localhost:5555/books/${id}`, data).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Publish Year</label>
        <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} />
      </div>
      <button onClick={handleEditBook}>Save</button>
    </div>
  );
};

export default EditBook;
