import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Books List</h1>
        <a href='/books/create'><button>Create</button></a>
      </div>
      <BooksTable books={books} />
    </div>
  );
};

export default Home;
