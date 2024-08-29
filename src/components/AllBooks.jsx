import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function AllBooks({ books }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState("");
  const [featBook, setBook] = useState(null);

  const featuredBook = books.find((book) => book.id === featBook);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchParams.toLowerCase())
  );

  function handleClick(id) {
    navigate(`/books/${id}`);
  }

  return (
    <div className="App">
      <header>
        <NavBar setSearchParams={setSearchParams} />
      </header>
      <h2 id="title">Library</h2>
      <div className="books-container">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="book-card"
            onClick={() => handleClick(book.id)}
          >
            <h3>{book.title}</h3>
            <h5>Author: {book.author}</h5>
            <img id="img" src={book.coverimage} alt={book.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
