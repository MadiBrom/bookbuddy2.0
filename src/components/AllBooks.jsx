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
  console.log("hello");
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
            <h3 className="book-card-title">{book.title}</h3>
            <div className="book-card-content">
              <img
                src={book.coverimage}
                alt={book.title}
                className="bookcard-img"
              />
              <div className="book-card-details">
                <h5 className="book-card-author">Author: {book.author}</h5>
                <p className="book-card-availability">
                  Available: {book.available ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
