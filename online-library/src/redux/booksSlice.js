import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 101,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A novel set in the Roaring Twenties, exploring themes of wealth, excess, and the American dream.',
      rating: 4.2
    },
    {
      id: 102,
      title: '1984',
      author: 'George Orwell',
      category: 'Sci-Fi',
      description: 'A dystopian novel that delves into the dangers of totalitarianism.',
      rating: 4.6
    },
    {
      id: 103,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      description: 'A story of racial injustice and childhood innocence in the American South.',
      rating: 4.8
    }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
