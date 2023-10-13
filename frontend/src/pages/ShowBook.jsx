import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>Show Book</h1>
      <div>
        <span>Id: {book._id}</span>
        <span>Title: {book.title}</span>
        <span>Author: {book.author}</span>
        <span>Publish Year: {book.publishYear}</span>
        <span>Create Time: {new Date(book.createdAt).toString()}</span>
        <span>Last Update Time: {new Date(book.updatedAt).toString()}</span>
      </div>
    </div>
  );
};

export default ShowBook;
