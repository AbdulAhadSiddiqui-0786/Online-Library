import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.title) errors.title = 'Title is required';
    if (!formData.author) errors.author = 'Author is required';
    if (!formData.category) errors.category = 'Category is required';
    if (!formData.description) errors.description = 'Description is required';
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5)
      errors.rating = 'Rating must be a number between 0 and 5';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook({ ...formData, id: Date.now() }));
      navigate('/'); // Redirect to the home page after adding the book
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input 
        required
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      {errors.title && <p className="text-red-500">{errors.title}</p>}
      
      <input 
        required
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      {errors.author && <p className="text-red-500">{errors.author}</p>}
      
      <input 
        required
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      {errors.category && <p className="text-red-500">{errors.category}</p>}
      
      <textarea 
        required
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      ></textarea>
      {errors.description && <p className="text-red-500">{errors.description}</p>}
      
      <input 
        required
        type="number"
        placeholder="Rating (0-5)"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
      />
      {errors.rating && <p className="text-red-500">{errors.rating}</p>}
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
