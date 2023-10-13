const BooksTable = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>
            Author
          </th>
          <th>
            Publish Year
          </th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td>
              {index + 1}
            </td>
            <td>
              {book.title}
            </td>
            <td>
              {book.author}
            </td>
            <td>
              {book.publishYear}
            </td>
            <td>
              <div>
                <a href={`/books/details/${book._id}`}><button>Details</button></a>
                <a href={`/books/edit/${book._id}`}><button>Edit</button></a>
                <a href={`/books/delete/${book._id}`}><button>Delete</button></a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;