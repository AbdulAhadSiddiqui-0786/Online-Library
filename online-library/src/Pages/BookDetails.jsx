// src/Pages/BookDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600 mb-2"><strong>Author:</strong> {book.author}</p>
      <p className="text-gray-600 mb-2"><strong>Category:</strong> {book.category}</p>
      <p className="text-gray-600 mb-4"><strong>Rating:</strong> {book.rating}/5</p>
      <p className="mb-4"><strong>Description:</strong> {book.description}</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default BookDetails;
