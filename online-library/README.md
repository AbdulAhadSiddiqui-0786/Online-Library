# Online Library System

An online library system built with React, Vite, Redux Toolkit, React Router, and Tailwind CSS. This application allows users to browse a collection of books by category, search by title or author, view detailed information about each book, and add new books to the library.

## Features

- **Home Page:**  
  - Displays a welcome message and a list of book categories.
  - Shows popular books with a summary view (title and author) and a "View Details" link.
  
- **Browse Books Page:**  
  - Displays books filtered by category (using dynamic routing).
  - Includes a search bar to filter books by title or author.
  - Shows books based on the selected category or search criteria.

- **Book Details Page:**  
  - Displays complete details of the selected book (title, author, description, category, and rating).
  - Includes a "Back to Home" link.

- **Add Book Page:**  
  - Contains a form to add a new book with complete details (title, author, category, description, and rating).
  - Uses Redux Toolkit for state management.
  - Redirects the user to the Home Page after a successful submission.

- **404 Page:**  
  - Displays a custom 404 message for undefined routes with a link back to Home.
   ![online-library/src/assets/image_2025-02-15_223104756.png](online-library/src/assets/image_2025-02-15_223104756.png)


## Technologies Used

- **React** for building the UI.
- **Vite** for a fast development environment.
- **Redux Toolkit** for state management.
- **React Router** for navigation.
- **Tailwind CSS** for styling.

## Getting Started

### Prerequisites

- **Node.js** (v14 or later recommended)
- **npm** or **yarn**

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/online-library.git
   cd online-library

2. **Install Dependencies::**
   ``` bash
     npm install
     npm install tailwindcss @tailwindcss/vite
     npm install react-router-dom @reduxjs/toolkit react-redux 
3. **Start the Development Server:**
    npm run dev
    
## Project Structure

```bash
online-library/
├── node_modules/            
├── public/                
│   └── vite.svg
├── src/                     
│   ├── components/          
│   │   ├── BookCard.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── Pages/               
│   │   ├── Home.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── BookDetails.jsx
│   │   ├── AddBook.jsx
│   │   └── NotFound.jsx
│   ├── redux/               
│   │   ├── booksSlice.js
│   │   └── store.js
│   ├── App.jsx              
│   ├── index.css            
│   └── main.jsx             
├── .gitignore               
├── package.json             
├── README.md                
└── vite.config.js           
```
 
## Author

- Abdul Ahad Siddiqui  
- GitHub: [AbdulAhadSiddiqui-0786](https://github.com/AbdulAhadSiddiqui-0786)
