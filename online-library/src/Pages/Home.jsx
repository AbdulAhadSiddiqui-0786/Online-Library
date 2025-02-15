// src/Pages/Home.jsx
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography'];
  const books = useSelector((state) => state.books.books);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Online Library</h1>
      
      {/* Book Categories */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/browse/${category}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
      
      {/* Popular Books */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <div key={book.id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              {/* Only summary details shown */}
              <Link
                to={`/book/${book.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
