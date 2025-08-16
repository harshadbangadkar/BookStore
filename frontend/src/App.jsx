import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateBooks from './pages/CreateBooks.jsx' 
import Home from './pages/Home.jsx'
import DeleteBooks from './pages/DeleteBooks.jsx'
import EditBook from './pages/EditBook.jsx'
import ShowBooks from './pages/ShowBooks.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Books/create" element={<CreateBooks />} />
      <Route path="/Books/details/:id" element={<ShowBooks />} />
      <Route path="/Books/edit/:id" element={<EditBook />} />
      <Route path="/Books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
};

export default App