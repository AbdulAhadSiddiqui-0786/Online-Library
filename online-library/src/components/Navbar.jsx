import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://cdn-icons-png.freepik.com/512/2888/2888404.png" 
            alt="Logo" 
            className="h-8 w-8 mr-2" 
          />
          <Link to="/" className="text-xl font-bold">
            Online Library
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/browse" className="hover:text-gray-200">
            Browse Books
          </Link>
          <Link to="/add-book" className="hover:text-gray-200">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
