import { Route, Routes } from "react-router-dom";
import AllBooks from "./components/AllBooks";
import SingleBook from "./components/SingleBook";
import { fetchAllBooks } from "./API";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await fetchAllBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <div id="container">
      <Routes>
        <Route path="/" element={<AllBooks books={books} />} />
        <Route path="/books/:bookId" element={<SingleBook />} />
      </Routes>
    </div>
  );
}

export default App;
