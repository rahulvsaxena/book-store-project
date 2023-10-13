import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Delete Book</h1>
      <div>
        <h3>Are You Sure You want to delete this book?</h3>
        <button onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  );
};

export default DeleteBook;