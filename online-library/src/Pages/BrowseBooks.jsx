// src/Pages/BrowseBooks.jsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector((state) => state.books.books);
  
  let filteredBooks = [];

  if (category) {
    // If a category is specified in the URL, filter by that category.
    filteredBooks = books.filter((book) => book.category === category);
    // Further filter by search term if provided.
    if (searchTerm.trim().length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  } else {
    // If no category is specified, only filter by search term.
    if (searchTerm.trim().length > 0) {
      filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
