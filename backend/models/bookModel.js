//Mongoose is built on top of the MongoDB driver to provide programmers with a way to model their data. It manages relationships between data and works only with MongoDB.
import mongoose from 'mongoose';

// A Mongoose schema tells your code what pieces of information to expect and what type each piece of information should be (like a number for size, a string for color, etc.)
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//collection, document in mondodb == table, record in mysql
//we create a collection named 'Book' here using the schema
export const Book = mongoose.model('Book', bookSchema);