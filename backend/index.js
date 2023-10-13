import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//ultra imp, takes incomming json request and puts the parsed data into req.body
app.use(express.json());

//Cross-Origin Resource Sharing
//It’s a mechanism that uses additional HTTP headers to tell browsers which origins are allowed to access your resources
app.use(cors());


app.get('/', (request, response) => {
  return response.send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });